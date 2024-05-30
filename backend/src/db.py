import sqlite3

import click
# g is used to store data that might be accessed by multiple functions during the req
# connection is stored and reused instead of making a new conn if get_db is called a second time in the req
from flask import current_app, g

def get_db():
  if 'db' not in g:
    g.db = sqlite3.connect(
      current_app.config['DATABASE'],
      detect_types=sqlite3.PARSE_DECLTYPES
    )
    # tells the connection to return Rows that because like dicts which allows accessing columns by name
    g.db.row_factory = sqlite3.Row

    return g.db

def close_db():
  db = g.pop('db', None)

  if db is not None:
    db.close()