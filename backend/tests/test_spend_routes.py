
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

def test_delete_spend_item_route(client):
    # get data and check 2 items
    respone = client.get('/spends')
    data_pre_delete = respone.get_json()
    assert len(data_pre_delete) == 2

    # delete one item
    delete_response = client.delete('/spends', json={'id': 1})
    assert delete_response.status_code == 200

    # get data again and check length is 1
    delete_response = client.get('/spends')
    data_post_delete = delete_response.get_json()
    assert len(data_post_delete) == 1
