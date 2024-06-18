import './App.css';
import { BudgetOverviewPage } from './pages/BudgetOverviewPage/BudgetOverviewPage';
import SpendOverviewPage from './pages/SpendOverViewPage/SpendOverviewPage';
import { BudgetProvider } from './context/BudgetProvider';
import { SpendProvider } from './context/SpendProvider';
import { useBudgetContext } from './hooks/useBudgetContext';
import { useEffect } from 'react';
import { NewCategory } from './components/types';
import { useSpendContext } from './hooks/useSpendContext';

interface AppProps {
  newCat: NewCategory;
}

const App = ({ newCat }: AppProps) => {
  return (
    <BudgetProvider>
      <SpendProvider>
        <AppContent newCat={newCat} />
      </SpendProvider>
    </BudgetProvider>
  );
};

const AppContent = ({ newCat }: AppProps) => {
  const { getBudgets, budgetItems } = useBudgetContext();
  const { getSpends, spendItems } = useSpendContext();

  useEffect(() => {
    getBudgets();
  }, [getBudgets]);

  useEffect(() => {
    getSpends();
  }, [getSpends]);

  return (
    <>
      <BudgetOverviewPage
        title="Please enter your budgets"
        data={budgetItems}
        newCat={newCat}
      />
      <SpendOverviewPage
        title="Please enter your spends"
        data={spendItems}
        newCat={newCat}
      />
    </>
  );
};

export default App;
