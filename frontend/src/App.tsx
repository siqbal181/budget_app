import './App.css';
import { BudgetOverviewPage } from './pages/BudgetOverviewPage/BudgetOverviewPage';
// import SpendOverviewPage from './pages/SpendOverViewPage/SpendOverviewPage';
import { BudgetProvider } from './context/BudgetProvider';
// import { SpendProvider } from './context/SpendProvider';
// import { useSpendContext } from './hooks/useSpendContext';
import { useBudgetContext } from './hooks/useBudgetContext';
import { useEffect } from 'react';
import { NewCategory } from './components/types';

interface AppProps {
  newCat: NewCategory;
}

function App({ newCat}: AppProps) {
  const { getBudgets, budgetItems } = useBudgetContext();
  // const { getSpends, spendItems } = useSpendContext();

  useEffect(() => {
    getBudgets();
  }, [getBudgets]);

  // useEffect(() => {
  //   getSpends();
  // }, [getSpends]);

  return (
    <>
      <BudgetProvider>
        {/* <SpendProvider> */}
          <BudgetOverviewPage
            title="Please enter your budgets"
            data={budgetItems}
            newCat={newCat}
          />
          {/* <SpendOverviewPage
            title="Please enter your spends"
            data={spendItems}
            newCat={newCat}
          /> */}
        {/* </SpendProvider> */}
      </BudgetProvider>
    </>
  );
}

export default App;
