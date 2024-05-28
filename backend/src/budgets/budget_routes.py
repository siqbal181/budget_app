from flask import Blueprint

budgets_bp = Blueprint("budget_routes", __name__)

@budgets_bp.route("/budgets")
def get_budgets():
  return 'budgets'