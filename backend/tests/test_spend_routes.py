
def get_spend_routes(client):
  response = client.get('/spends')
  assert response.status == 200

