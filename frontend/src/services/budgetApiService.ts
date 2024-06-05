import axios from 'axios';
import { DataItem } from '../components/types';

export async function fetchBudgets() {
  try {
    const response = await axios.get('http://127.0.0.1:5000/budgets');
    if (response.status !== 200) {
      throw new Error('Error in network response');
    }
    const data = await response.data;
    return data;
  } catch (error) {
    console.error('Error fetching budgets:', error);
  }
}

export async function postBudgetItem(budget_item_data: DataItem) {
  try {
    const response = await axios.post(
      'http://127.0.0.1:5000/budgets',
      budget_item_data
    );
    if (response.status !== 201) {
      throw new Error('Error in network response');
    }
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error posting budget item:', error);
  }
}

export async function deleteBudgetItem(budget_item_id: { id: number }) {
  try {
    const config = {
      data: budget_item_id,
    };
    const response = await axios.delete(
      'http://127.0.0.1:5000/budgets',
      config
    );
    if (response.status !== 200) {
      throw new Error('Error deleting budget item.');
    }
  } catch (error) {
    console.error('Error deleting budget item:', error);
  }
}
