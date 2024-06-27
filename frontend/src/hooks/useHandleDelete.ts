import { useCallback } from 'react';
import { deleteBudgetItem } from '../services/budgetApiService';
import { useBudgetContext } from './useBudgetContext';
import { useSpendContext } from './useSpendContext';
import { deleteSpendItem } from '../services/spendApiService';

export const useHandleDelete = () => {
  const { getBudgets } = useBudgetContext();
  const { getSpends } = useSpendContext();

  const handleDelete = useCallback(async (itemId: string, itemType: string) => {
    try {
      if (itemType === 'budget') {
        await deleteBudgetItem({ id: Number(itemId) });
        await getBudgets();
      } else {
        await deleteSpendItem({ id: Number(itemId) });
        await getSpends();
      }
    } catch (error) {
      console.error(`Failed to delete ${itemType} item`, error);
    }
  }, [getBudgets, getSpends]);

  return handleDelete;
};
