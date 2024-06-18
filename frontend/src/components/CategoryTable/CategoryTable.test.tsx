import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { CategoryTable } from './CategoryTable';
import userEvent from '@testing-library/user-event';

const mockData = [
  {
    amount: '120',
    category: 'Bills',
    date: '2024-06-13 14:55:42',
    id: '7',
    item_type: 'budget',
  },
  {
    amount: '120',
    category: 'Rent',
    date: '2024-06-13 14:55:42',
    id: '1',
    item_type: 'budget',
  },
];

const renderComponent = () => {
  return render(<CategoryTable title="Budgets" data={mockData} newCat={{category: 'test', amount: 'test'}} />);
};

describe('Integration test for Category table', () => {
  test('Category table renders', async () => {
    const { findByLabelText, findByText } = renderComponent();

    const categoryBox = await findByLabelText('category-box');
    expect(categoryBox).toBeInTheDocument();

    const addMoreSection = await findByLabelText('add-more-section');
    expect(addMoreSection).toBeInTheDocument();

    const addMoreText = await findByText('Add more categories');
    expect(addMoreText).toBeInTheDocument();

    const saveButton = await findByLabelText('save-button');
    expect(saveButton).toBeInTheDocument();
  });

  test('Add more categories launches an add box', async () => {
    const { findByLabelText } = renderComponent();

    const user = userEvent.setup();

    const addMoreSection = await findByLabelText('add-more-section');
    expect(addMoreSection).toBeInTheDocument();

    user.click(addMoreSection);

    // empty add more box
    const addMoreInput = await findByLabelText('add-more-input-box');
    expect(addMoreInput).toBeInTheDocument();

    const categoryBox = await findByLabelText('category-box');
    expect(categoryBox).toBeInTheDocument();

    const submitInputBox = await findByLabelText('submit-input');
    expect(submitInputBox).toBeInTheDocument();
  });
});
