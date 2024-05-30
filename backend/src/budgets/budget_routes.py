from flask import Blueprint, request, jsonify
from src.db import get_db

budgets_bp = Blueprint("budget_routes", __name__)

@budgets_bp.route("/budgets", methods=["POST", "GET"])
def budget_items():
  if request.method == "POST":
    db = get_db()

    data = request.get_json()
    category = data.get('category')
    amount = data.get('amount')

    if not category or not amount:
      return jsonify({"error": "Category and amount are required."}), 400

    try:
      db.execute("INSERT INTO budget (category, amount) VALUES (?, ?)", (category, amount))
      db.commit()
      return jsonify({"message": "Budget item saved successfully."}), 201
    except db.IntegrityError:
       return jsonify({"error": "Unable to add budget item."}), 500
    
  elif request.method == "GET":
      db = get_db()
      try:
          data = db.execute("SELECT * FROM budget").fetchall() # implicit cursor creation
          # need to convert the data into dictionary list before passing into jsonify 
          budget_items = [{"id": row["id"], "category": row["category"], "amount": row["amount"]} for row in data]

          return jsonify(budget_items), 200
      except Exception as e:
         return jsonify({"error": str(e)}), 500