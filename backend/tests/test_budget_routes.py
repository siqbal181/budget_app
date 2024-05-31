
def test_get_budgets_route(client):
  response = client.get('/budgets')

  assert response.status_code == 200

  data = response.get_json()

  assert len(data) == 2
  assert data[0]['amount'] == 100.0
  assert data[0]['category'] == 'Test Category 1'
  assert data[1]['category'] == 'Test Category 2'

def test_post_budgets_route(client):
  budget_item = {
    "category": "Shopping",
    "amount": 40.0
  }

  response = client.post("/budgets", json=budget_item)
  assert response.status_code == 201

  response_2 = client.get('/budgets')
  data = response_2.get_json()
  assert len(data) == 3
  assert data[-1]['category'] == 'Shopping'
