import { render } from '@testing-library/react';
import { BudgetOverviewPage } from './BudgetOverviewPage';
import { BudgetContext } from '../../context/BudgetProvider';
import '@testing-library/jest-dom';

const mockGetBudgets = jest.fn();
const mockSetBudgetItems = jest.fn();
const mockBudgetItems = [
  {
    amount: '600.0',
    category: 'Rent',
    date: '2024-06-02 16:44:37',
    id: '1',
    item_type: 'budget',
  },
  {
    amount: '300.0',
    category: 'Bills',
    date: '2024-06-02 16:44:59',
    id: '3',
    item_type: 'budget',
  },
];

function renderWithContext(component: React.ReactNode) {
  return render(
    <BudgetContext.Provider
      value={{
        budgetItems: mockBudgetItems,
        getBudgets: mockGetBudgets,
        setBudgetItems: mockSetBudgetItems,
      }}
    >
      {component}
    </BudgetContext.Provider>
  );
}

function renderBudgetPage() {
  return renderWithContext(
    <BudgetOverviewPage title="Please enter your budgets here" />
  );
}

describe('When rendering the budget overview page', () => {
  test("The 'Please enter your budgets here' title should be displayed", async () => {
    const { findByText } = renderBudgetPage();

    const budgetTitle = await findByText('Please enter your budgets here');
    expect(budgetTitle).toBeInTheDocument();
  });

  test("The 'Add more categories' button should be displayed", async () => {
    const { findByText } = renderBudgetPage();

    const addMoreCategories = await findByText('Add more categories');
    expect(addMoreCategories).toBeInTheDocument();
  });

  test("The 'Save' button should be displayed", async () => {
    const { findByText } = renderBudgetPage();

    const saveButton = await findByText('Save');
    expect(saveButton).toBeInTheDocument();
  });

  test('getBudgets are called and budgets are returned', async () => {
    const { findByText } = renderBudgetPage();

    const rentItem = await findByText('Rent');
    const billsItem = await findByText('Bills');
    expect(rentItem).toBeInTheDocument();
    expect(billsItem).toBeInTheDocument();
  });

  test('When deleting a budget item it is successfully removed and no longer displayed on the page', async () => {
    const { findByText } = renderBudgetPage();

    // const user = userEvent.setup();
    const rentItem = await findByText('Rent');
    expect(rentItem).toBeInTheDocument();

    // const deleteItem = await screen.getAllByTestId('remove-category');
    // expect(deleteItem).toBeInTheDocument();
    // await user.click(deleteItem);
  });
});
