"""
Database functions for Flask app

Functions:
    get_db(): Gets the database connection
    close_db(): Closes the database connection
    init_db(): Initialises the database
    init_db_command(): CLI command to initialise the database
    init_app(app): Registers database functions with the Flask app.
"""

import sqlite3
import click
from flask import current_app, g
from flask.cli import with_appcontext


def get_db():
    """
    Get a database connection.

    This function will look to see if there not an existing database in g. If not,
    it will attach a db to g and create a connection to the database. It sets the row factory
    to sqlite.Row for easy access to columns by name and returns the database connection
    """
    if 'db' not in g:
        g.db = sqlite3.connect(
            current_app.config['DATABASE'],
            detect_types=sqlite3.PARSE_DECLTYPES
        )
        g.db.row_factory = sqlite3.Row
    return g.db


def close_db(e=None):
    """
    Close the database connection.

    This function will remove the db from the global 'g' object and closes if it exists.
    """
    db = g.pop('db', None)

    if db is not None:
        db.close()


def init_db():
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
    app.teardown_appcontext(close_db)
    app.cli.add_command(init_db_command)

# $ src --app flaskr init-db
