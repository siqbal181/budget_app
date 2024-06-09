import { FC } from 'react';
import { CategoryTable } from '../../components/CategoryTable/CategoryTable';
import { fetchBudgets } from '../../services/budgetApiService';
import { DataItem } from '../../components/types';
import { useEffect, useState } from 'react';

interface BudgetOverviewPageProps {
  title: string;
}

export const BudgetOverviewPage: FC<BudgetOverviewPageProps> = ({ title }) => {
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
      <CategoryTable title={title} data={budgetData} />
    </>
  );
};
