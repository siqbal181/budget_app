import pytest
import sqlite3
from src.db import get_db

def test_get_budgets_route(client):
  response = client.get("/budgets")

  assert response.status_code == 200

  data = response.get_json()

  assert len(data) == 2