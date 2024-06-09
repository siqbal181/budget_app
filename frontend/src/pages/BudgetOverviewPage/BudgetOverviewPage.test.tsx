import { render } from '@testing-library/react';
import { BudgetOverviewPage } from './BudgetOverviewPage';
import '@testing-library/jest-dom';

describe('When rendering the budget overview page', () => {
  test("The 'Please enter your budgets here' title should be displayed", async () => {
    const { findByText } = render(<BudgetOverviewPage title='Please enter your budgets here'/>);

    const budgetTitle = await findByText('Please enter your budgets here');
    expect(budgetTitle).toBeInTheDocument();
  });

  test("The 'Add more categories' button should be displayed", async () => {
    const { findByText } = render(<BudgetOverviewPage title='Please enter your budgets here'/>);

    const addMoreCategories = await findByText('Add more categories');
    expect(addMoreCategories).toBeInTheDocument();
  });

  test("The 'Save' button should be displayed", async () => {
    const { findByText } = render(<BudgetOverviewPage title='Please enter your budgets here'/>);

    const saveButton = await findByText('Save');
    expect(saveButton).toBeInTheDocument();
  });
});
