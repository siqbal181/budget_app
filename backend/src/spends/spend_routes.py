"""Routes for users actual spend amounts"""

from flask import Blueprint, request, jsonify
from src.db import get_db

spend_bp = Blueprint("spend_routes", __name__)


@spend_bp.route("/spends", methods=['GET', 'POST'])
def spend_items():
    """GET or POST spend items via the /spends endpoint"""
    if request.method == 'GET':

        try:
            db = get_db()
            data = db.execute("SELECT * FROM spend").fetchall()

            spend_items_list = [{"id": row["id"], "amount": row["amount"],
                                 "category": row["category"]} for row in data]
            return jsonify(spend_items_list), 200

        except Exception as e:
            return jsonify({"error": str(e)}), 500
        # access the spend from the db in a try catch
    elif request.method == 'POST':
        db = get_db()
        # get the request body into json
        # try to save it to the db
        try:
            data = request.get_json()
            category = data.get('category')
            amount = data.get('amount')

            db.execute(
                "INSERT INTO spend (category, amount) VALUES (?, ?)", (category, amount))
            db.commit()
            return jsonify({"message": "spend item saved successfully."}), 201
        except db.IntegrityError:
            return jsonify({"error": "failed to save spend item"}), 500

    return jsonify({"error": "Method not allowed"}), 405
