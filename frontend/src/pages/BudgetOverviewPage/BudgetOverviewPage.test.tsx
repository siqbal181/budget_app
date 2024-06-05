import { render } from "@testing-library/react"
import { BudgetOverviewPage } from "./BudgetOverviewPage"
import '@testing-library/jest-dom';

describe("When rendering the budget overview page", () => {
  test("The 'Please enter your budgets here' title should be displayed", async () => {
    // arrange
    const {findByLabelText} = render(<BudgetOverviewPage/>);

    const budgetTitle = await findByLabelText('category-box-title');
    expect(budgetTitle).toBeInTheDocument();
    // act

    // assert
  })
})