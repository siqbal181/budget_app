import axios from 'axios';
import { SpendDataItem } from '../components/types';

export async function fetchSpends() {
  try {
    const response = await axios.get('http://127.0.0.1:5000/spends');
    if (response.status !== 200) {
      throw new Error('Error in network response')
    }
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error fetching spends:', error)
  }
}

export async function postSpendItem(spend_data_item: SpendDataItem) {
  try {
    const response = await axios.post('http://127.0.0.1:5000/spends', spend_data_item);
    if (response.status !== 201) {
      throw new Error('Error in network response')
    }
  } catch (error) {
    console.error('Error posting spend item:', error)
  }
}