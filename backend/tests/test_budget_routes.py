
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


def test_delete_budget_item_route(client):
    # get data and check 2 items
    respone = client.get('/budgets')
    data_pre_delete = respone.get_json()
    assert len(data_pre_delete) == 2

    # delete one item
    delete_response = client.delete('/budgets', json={'id': 1})
    assert delete_response.status_code == 200

    # get data again and check length is 1
    delete_response = client.get('/budgets')
    data_post_delete = delete_response.get_json()
    assert len(data_post_delete) == 1
