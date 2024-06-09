import './App.css';
import { BudgetOverviewPage } from './pages/BudgetOverviewPage/BudgetOverviewPage';
import { BudgetProvider } from './context/BudgetProvider';

function App() {
  return (
    <>
      <BudgetProvider>
        <BudgetOverviewPage title='Please enter your budgets here'/>
      </BudgetProvider>
    </>
  );
}

export default App;
