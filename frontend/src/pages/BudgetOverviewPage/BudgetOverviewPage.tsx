import { FC } from 'react';
import { CategoryTable } from '../../components/CategoryTable/CategoryTable';
import { DataItem, NewCategory } from '../../components/types';
import { useHandleDelete } from '../../hooks/useHandleDelete';

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
  const handleDeleteBudget = useHandleDelete();

  return (
    <>
      <CategoryTable
        title={title}
        data={data}
        newCat={newCat}
        dateFilterModalOpen={false}
        handleDeleteItem={handleDeleteBudget}
      />
    </>
  );
};
