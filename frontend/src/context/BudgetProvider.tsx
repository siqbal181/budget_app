import { createContext, useState } from 'react';
import { DataItem } from '../components/types';
import { fetchBudgets } from '../services/budgetApiService';

interface BudgetContextType {
  budgetItems: DataItem[];
  setBudgetItems: React.Dispatch<React.SetStateAction<DataItem[]>>;
  getBudgets: () => Promise<void>;
}

export const BudgetContext = createContext<BudgetContextType>({
  budgetItems: [],
  setBudgetItems: () => {},
  getBudgets: async () => {},
});

export const BudgetProvider = ({ children }: { children: React.ReactNode }) => {
  const [budgetItems, setBudgetItems] = useState<DataItem[]>([]);

  const getBudgets = async () => {
    try {
      const response = await fetchBudgets();

      if (response.status !== 200) {
        throw new Error('Error in network response');
      }
      const budgets = response.data;
      setBudgetItems(budgets);
    } catch (error) {
      console.error('Error fetching budgets:', error);
    }
  };

  return (
    <BudgetContext.Provider value={{ budgetItems, setBudgetItems, getBudgets }}>
      {children}
    </BudgetContext.Provider>
  );
};
