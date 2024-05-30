from flask import Blueprint, request, flash, jsonify
from src.db import get_db

budgets_bp = Blueprint("budget_routes", __name__)

@budgets_bp.route("/budgets", methods=["POST"])
def post_budget_item():
  db = get_db()

  category, amount = request.json

  try:
    db.execute("INSERT INTO budget (category, amount) VALUES (?, ?)",
    (category, amount))
    db.commit()
    return jsonify({"budgetItem saved successfully": category})
  except db.IntegrityError:
    error = f'Error in adding budget item'

  flash(error)