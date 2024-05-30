from flask import Blueprint, request, jsonify
from src.db import get_db

budgets_bp = Blueprint("budget_routes", __name__)

@budgets_bp.route("/budgets", methods=["POST"])
def post_budget_item():
  db = get_db()

  data = request.get_json()
  category = data.get('category')
  amount = data.get('amount')

  if not category or not amount:
    return jsonify({"error": "Category and amount are required"}), 400

  try:
    db.execute("INSERT INTO budget (category, amount) VALUES (?, ?)", (category, amount))
    db.commit()
    return jsonify({"message": "Budget item saved successfully"}), 201
  except db.IntegrityError:
    return jsonify({"error": "Error in adding budget item"}), 500
