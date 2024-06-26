"""Routes for users monthly budget amounts."""

from flask import Blueprint, request, jsonify
from src.db import get_db

budgets_bp = Blueprint("budget_routes", __name__)


@budgets_bp.route("/budgets", methods=["POST", "GET", "DELETE"])
def budget_items():
    """Enact request methods for budget items via the /budgets endpoint"""
    if request.method == "POST":
        db = get_db()

        data = request.get_json()
        category = data.get('category')
        amount = data.get('amount')

        if not category or not amount:
            return jsonify({"error": "Category and amount are required."}), 400

        try:
            db.execute(
                "INSERT INTO budget (category, amount, item_type) VALUES (?, ?, 'budget')", (category, amount))
            db.commit()
            return jsonify({"message": "Budget item saved successfully."}), 201
        except db.IntegrityError:
            return jsonify({"error": "Unable to add budget item."}), 500

    elif request.method == "GET":
        db = get_db()
        try:
            # implicit cursor creation
            data = db.execute("SELECT * FROM budget").fetchall()
            # need to convert the data into dictionary list before passing into jsonify
            budget_items_list = [{"id": row["id"], "category": row["category"],
                                  "amount": row["amount"], "date": row["date"], "item_type": row["item_type"]} for row in data]

            return jsonify(budget_items_list), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    elif request.method == 'DELETE':
        try:
            item_id = request.json['id']
            db = get_db()
            db.execute("DELETE FROM budget WHERE id = ?", (item_id,))
            db.commit()
            return jsonify({"message": "Data successfully deleted"}), 200
        except Exception as e:
            print(f"Error: {e}")
            return jsonify({"error": "Unable to delete budget item"}), 500
    return jsonify({"error": "Method not allowed"}), 405
