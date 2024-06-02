export async function fetchBudgets() {
  try {
    const response = await fetch('/budgets');
    if (!response.ok) {
      throw new Error('Failed to fetch budgets');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching budgets:", error);
    throw error;
  }
}
