import { useContext } from 'react';
import { BudgetContext } from '../context/BudgetProvider';

export const useBudgetContext = () => {
  const context = useContext(BudgetContext);
  if (context === undefined) {
    throw new Error('useBudgetContext must be used within a BudgetProvider');
  }
  return context;
};
