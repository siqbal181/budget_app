import os
import tempfile
import pytest
from src import create_app
from src.db import get_db, init_db

@pytest.fixture()
def app():
    # Create a temporary file to use as the test database
    db_fd, db_path = tempfile.mkstemp()

    app = create_app({
        'TESTING': True,
        'DATABASE': db_path,
    })

    with app.app_context():
        init_db()
        db = get_db()
        db.execute("INSERT INTO budget (category, amount) VALUES (?, ?)", ('Test Category 1', 100.0))
        db.execute("INSERT INTO budget (category, amount) VALUES (?, ?)", ('Test Category 2', 200.0))
        db.commit()

    yield app

    os.close(db_fd)
    os.unlink(db_path)

@pytest.fixture()
# test client used to simulate requests to the app
def client(app):
    return app.test_client()

@pytest.fixture()
# allows invoking commands in the flask cli
def runner(app):
    return app.test_cli_runner()
