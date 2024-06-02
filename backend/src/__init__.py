"""Initialising the application with create_app function and returning the app"""

import os
from flask import Flask
from .budgets.budget_routes import budgets_bp
from .spends.spend_routes import spend_bp
from . import db


def create_app(test_config=None):
    """Creates an instance of Flask app and sets up config for testing and database. Registers blueprints"""
    app = Flask(__name__, instance_relative_config=True)

    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'budgetApp.sqlite'),
    )

    if test_config is None:
        app.config.from_pyfile('config.py', silent=True)
    else:
        app.config.from_mapping(test_config)

    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    db.init_app(app)

    app.register_blueprint(budgets_bp)
    app.register_blueprint(spend_bp)

    return app


# runs in BE using: flask --app src run --debug // globally installed so use the shell to run it
# poetry run flask --app src run --debug
