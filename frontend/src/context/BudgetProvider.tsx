import { createContext, useCallback, useState } from 'react';
import { DataItem } from '../components/types';
import { fetchBudgets } from '../services/budgetApiService';

interface BudgetContextType {
  budgetItems: DataItem[];
  setBudgetItems: React.Dispatch<React.SetStateAction<DataItem[]>>;
  getBudgets: () => Promise<void>;
}

// default values need to be provided in case the context runs without a provider
export const BudgetContext = createContext<BudgetContextType>({
  budgetItems: [],
  setBudgetItems: () => {}, // no op function is the default so the context has a valid function to call
  getBudgets: async () => {}, // no op async function
});

export const BudgetProvider = ({ children }: { children: React.ReactNode }) => {
  const [budgetItems, setBudgetItems] = useState<DataItem[]>([]);

  // useCallback hook memoize getBudgets so it doesn't change on every render
  const getBudgets = useCallback(async () => {
    try {
      const budget_data = await fetchBudgets();
      setBudgetItems(budget_data);
    } catch (error) {
      console.error('Error fetching budgets:', error);
    }
  }, []);

  return (
    <BudgetContext.Provider value={{ budgetItems, setBudgetItems, getBudgets }}>
      {children}
    </BudgetContext.Provider>
  );
};
