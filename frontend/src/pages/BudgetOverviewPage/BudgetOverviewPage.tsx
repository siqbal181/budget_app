import { FC } from 'react';
import { CategoryTable } from '../../components/CategoryTable/CategoryTable';
import { useEffect } from 'react';
import { useBudgetContext } from '../../hooks/useBudgetContext';

interface BudgetOverviewPageProps {
  title: string;
  handleDeleteItem: (itemId: string, itemType: string) => void;
}

export const BudgetOverviewPage: FC<BudgetOverviewPageProps> = ({ title }) => {
  const { budgetItems, getBudgets } = useBudgetContext();

  useEffect(() => {
    getBudgets();
  }, []);

  return (
    <>
      <CategoryTable title={title} data={budgetItems} />
    </>
  );
};
