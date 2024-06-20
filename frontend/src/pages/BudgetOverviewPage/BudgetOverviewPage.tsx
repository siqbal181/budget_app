import { FC } from 'react';
import { CategoryTable } from '../../components/CategoryTable/CategoryTable';
import { DataItem, NewCategory } from '../../components/types';
import { deleteBudgetItem } from '../../services/budgetApiService';
import { useBudgetContext } from '../../hooks/useBudgetContext';

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
  const { getBudgets } = useBudgetContext();

  const handleDelete = async (itemId: string, itemType: string) => {
    try {
      await deleteBudgetItem({ id: Number(itemId) });
      await getBudgets();
    } catch (error) {
      console.error(`Failed to delete ${itemType} item`, error);
    }
  };

  return (
    <>
      <CategoryTable
        title={title}
        data={data}
        newCat={newCat}
        dateFilterModalOpen={false}
        handleDeleteItem={handleDelete}
      />
    </>
  );
};
