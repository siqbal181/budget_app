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


def close_db():
    """Remove the db from the global 'g' object and close if it exists."""
    db = g.pop('db', None)

    if db is not None:
        db.close()


def init_db():
    """
    Get the db connection and use the current application context to open the schema.sql file.
    Execute SQL commands to create and setup the tables for the database.
    """
    db = get_db()

    with current_app.open_resource('schema.sql') as f:
        db.executescript(f.read().decode('utf8'))


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
