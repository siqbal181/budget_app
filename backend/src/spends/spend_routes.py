from flask import Blueprint, request, jsonify
from src.db import get_db

spend_bp = Blueprint("spend_routes", __name__)


@spend_bp.route("/spends", methods=['GET', 'POST'])
def spend_items():
  if request.method == 'GET':

    try:
      db = get_db()
      data = db.execute("SELECT * FROM spend").fetchall()
      
      spend_items = [{"id": row["id"], "amount": row["amount"], "category": row["category"]} for row in data]
      return jsonify(spend_items), 200
    
    except Exception as e:
      return jsonify({"error": str(e)}), 500
    # access the spend from the db in a try catch
