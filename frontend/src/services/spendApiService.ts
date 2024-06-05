import axios from 'axios';
import { DataItem } from '../components/types';

export async function fetchSpends() {
  try {
    const response = await axios.get('http://127.0.0.1:5000/spends');
    if (response.status !== 200) {
      throw new Error('Error in network response');
    }
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error fetching spends:', error);
  }
}

export async function postSpendItem(spend_data_item: DataItem) {
  try {
    const response = await axios.post(
      'http://127.0.0.1:5000/spends',
      spend_data_item
    );
    if (response.status !== 201) {
      throw new Error('Error in network response');
    }
  } catch (error) {
    console.error('Error posting spend item:', error);
  }
}

export async function deleteSpendItem(spend_item_id: {'id': number}) {
  try {
    const config = {
      data: {
        spend_item_id
      }
    }
    const response = await axios.delete('/ttp://127.0.0.1:5000/spends', config)
    if (response.status !== 200) {
      throw new Error('Error in network response') 
    }
  } catch (error) {
    console.error('Error deleting spend item', error);
  }
}