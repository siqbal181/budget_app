import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import { CategoryTable } from "./CategoryTable"

const mockData = [
  {amount: '120', category: 'Bills', date: '2024-06-13 14:55:42', id: '7', item_type: "budget"},
  {amount: '120', category: 'Rent', date: '2024-06-13 14:55:42', id: '1', item_type: "budget"}
]

describe("Integration test for Category table", () => {
  test("Category table renders", async () => {
    const { findByLabelText, findByText } = render(
      <CategoryTable title="Budgets" data={mockData}/>
    );
      const categoryBox = await findByLabelText('category-box');
      expect(categoryBox).toBeInTheDocument();

      const addMoreSection = await findByLabelText('add-more-section');
      expect(addMoreSection).toBeInTheDocument();

      const addMoreText = await findByText('Add more categories');
      expect(addMoreText).toBeInTheDocument();

      const saveButton = await findByLabelText('save-button');
      expect(saveButton).toBeInTheDocument();
  })
})