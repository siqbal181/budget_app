"""Database functions for Flask app"""

import sqlite3
import click
from flask import current_app, g
from flask.cli import with_appcontext


def get_db():
    """
    See if there not an existing database in g. If not attach a db to g and create a connection
    to the database. Set the row factory to sqlite.Row for easy access to columns by name and
    return the database connection
    """
    if 'db' not in g:
        g.db = sqlite3.connect(
            current_app.config['DATABASE'],
            detect_types=sqlite3.PARSE_DECLTYPES
        )
        g.db.row_factory = sqlite3.Row
    return g.db


def close_db(e=None):
    """Remove the db from the global 'g' object and close if it exists."""
    db = g.pop('db', None)

    if db is not None:
        db.close()


def init_db():
    """
    Initialize the database by executing SQL commands to create and setup the tables.
    If the 'item_type' column does not exist in the 'budget' table, add it using ALTER TABLE.
    """
    db = get_db()

    # Execute schema.sql
    with current_app.open_resource('schema.sql') as f:
        db.executescript(f.read().decode('utf8'))

    # Add item_type column if it does not exist
    cursor = db.cursor()
    cursor.execute("PRAGMA table_info(budget)")
    columns = cursor.fetchall()
    column_names = [column[1] for column in columns]
    if 'item_type' not in column_names:
        cursor.execute("ALTER TABLE budget ADD COLUMN item_type TEXT")
        db.commit()
        print("Added 'item_type' column to 'budget' table.")



@click.command('init-db')
@with_appcontext  # Ensure the command runs within the app context
def init_db_command():
    """Clear the existing data and create new tables."""
    init_db()
    click.echo('Initialized the database.')


def init_app(app):
    """
    Attaches the app in the argument and uses the teardown context to close the db at the end
    of each request. Adds a command to the Flask CLI to initialise the database.
    """
    app.teardown_appcontext(close_db)
    app.cli.add_command(init_db_command)

# $ src --app flaskr init-db
