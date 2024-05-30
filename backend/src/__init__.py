from flask import Flask
from .budgets.budget_routes import budgets_bp


def create_app():
  app = Flask(__name__, instance_relative_config=True)
  app.config.from_mapping

  app.register_blueprint(budgets_bp)

  return app


# runs in BE using: flask --app src run --debug