"""Initialising the application with create_app function and returning the app"""

import os
from flask import Flask
from .budgets.budget_routes import budgets_bp
from .spends.spend_routes import spend_bp
from . import db
from flask_cors import CORS


def create_app(test_config=None):
    """Creates Flask app instance and sets up config for testing and db. Registers blueprints"""
    app = Flask(__name__, instance_relative_config=True)
    CORS(app, resources={r"/*": {"origins": "*"}})

    # Obtain the directory of the current file (src/__init__.py)
    current_dir = os.path.dirname(__file__)

    # Construct the path to the instance folder within the backend directory
    instance_path = os.path.join(current_dir, '..', 'instance')

    # Ensure the instance folder exists
    if not os.path.exists(instance_path):
        os.makedirs(instance_path)

    # Configure Flask app
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(instance_path, 'budgetApp.sqlite'),
    )

    if test_config is None:
        app.config.from_pyfile('config.py', silent=True)
    else:
        app.config.from_mapping(test_config)

    db.init_app(app)

    app.register_blueprint(budgets_bp)
    app.register_blueprint(spend_bp)

    return app


# runs in BE using: flask --app src run --debug // globally installed so use the shell to run it
# poetry run flask --app src run --debug
