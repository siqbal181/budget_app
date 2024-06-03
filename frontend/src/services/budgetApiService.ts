import axios from 'axios';

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
