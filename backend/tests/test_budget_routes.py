
def test_get_budgets_route(client):
  response = client.get("/budgets")

  assert response.status_code == 200

  data = response.get_json()

  assert len(data) == 2
  assert data[0]['amount'] == 100.0
  assert data[0]['category'] == 'Test Category 1'
  assert data[1]['category'] == 'Test Category 2'