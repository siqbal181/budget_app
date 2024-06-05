import { FC } from 'react';
import { CategoryTable } from '../../components/CategoryTable/CategoryTable';
import { fetchBudgets } from '../../services/budgetApiService';
import { DataItem } from '../../components/types';
import { useEffect, useState } from 'react';

interface BudgetOverviewPageProps {}

export const BudgetOverviewPage: FC<BudgetOverviewPageProps> = () => {
  const [budgetData, setBudgetData] = useState<DataItem[]>([]);

  async function fetchBudgetData() {
    try {
      const budget_data = await fetchBudgets();
      setBudgetData(budget_data);
    } catch {
      throw new Error('Error fetching budgets');
    }
  }

  useEffect(() => {
    fetchBudgetData();
  }, []);

  return (
    <>
      <CategoryTable title="Please enter your budgets here" data={budgetData} />
    </>
  );
};
