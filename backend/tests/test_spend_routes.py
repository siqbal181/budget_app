
def test_get_spend_routes(client):
  response = client.get('/spends')
  assert response.status_code == 200

def test_post_spend_route(client):
  spend_item = {
    "category": "Holiday",
    "amount": 640
  }

  response = client.post('/spends', json=spend_item)
  assert response.status_code == 201