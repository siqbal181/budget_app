import { FC } from 'react';
import { CategoryTable } from '../../components/CategoryTable/CategoryTable';
import { DataItem, NewCategory } from '../../components/types';

interface BudgetOverviewPageProps {
  title: string;
  newCat: NewCategory;
  data: DataItem[];
}

export const BudgetOverviewPage: FC<BudgetOverviewPageProps> = ({
  title,
  newCat,
  data,
}) => {
  return (
    <>
      <CategoryTable title={title} data={data} newCat={newCat} />
    </>
  );
};
