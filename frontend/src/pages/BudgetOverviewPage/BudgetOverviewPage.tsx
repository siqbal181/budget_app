import { FC } from 'react';
import { CategoryTable } from '../../components/CategoryTable/CategoryTable';
import { useEffect } from 'react';
import { useBudgetContext } from '../../hooks/useBudgetContext';
import { NewCategory } from '../../components/types';

interface BudgetOverviewPageProps {
  title: string;
  newCat: NewCategory
}

export const BudgetOverviewPage: FC<BudgetOverviewPageProps> = ({ title, newCat }) => {
  const { budgetItems, getBudgets } = useBudgetContext();

  useEffect(() => {
    getBudgets();
  }, [getBudgets]);

  return (
    <>
      <CategoryTable title={title} data={budgetItems} newCat={newCat} />
    </>
  );
};
