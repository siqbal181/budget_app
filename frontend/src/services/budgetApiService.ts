import axios from 'axios';
import { BudgetDataItem } from '../components/types';

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

export async function postBudgetItem(budget_item_data: BudgetDataItem) {
  try {
    const response = await axios.post('http://127.0.0.1:5000/budgets', budget_item_data);
    if (response.status !== 201) {
      throw new Error('Error in network response')
    }
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error posting budget item:', error);
  }
}