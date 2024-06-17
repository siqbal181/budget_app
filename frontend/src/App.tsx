import './App.css';
import { BudgetOverviewPage } from './pages/BudgetOverviewPage/BudgetOverviewPage';
import { BudgetProvider } from './context/BudgetProvider';
// import QuestionWidget from './components/QuestionWidget/QuestionWidget';

function App() {
  return (
    <>
      <BudgetProvider>
        {/* <QuestionWidget questionType={'Budget'} /> */}
        <BudgetOverviewPage title="Please enter your budgets here" />
      </BudgetProvider>
    </>
  );
}

export default App;
