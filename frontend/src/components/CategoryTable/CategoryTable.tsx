import { FC, useState } from 'react';
import './CategoryTable.css';
import { CategoryItem } from '../CategoryItem/CategoryItem';
import { CategoryTableProps, DataItem } from '../types';
import { deleteBudgetItem } from '../../services/budgetApiService';
import { deleteSpendItem } from '../../services/spendApiService';
import { useBudgetContext } from '../../hooks/useBudgetContext';
import { AddCategory } from '../AddMoreInput/AddCategory';

export const CategoryTable: FC<CategoryTableProps> = ({ title, data }) => {
  const { getBudgets } = useBudgetContext();
  const [addCategoryOpen, setAddCategoryOpen] = useState(false);

  const handleDelete = async (itemId: string, itemType: string) => {
    try {
      if (itemType === 'budget') {
        await deleteBudgetItem({ id: Number(itemId) });
      } else {
        await deleteSpendItem({ id: Number(itemId) });
      }
      await getBudgets();
    } catch (error) {
      console.error(`Failed to delete ${itemType} item`, error);
    }
  };

  const handleAddCategory = () => {
    console.log('Submitted');
  };

  return (
    <div className="category-box" aria-label="category-box">
      <p className="category-box-title" aria-label="category-box-title">
        {title}
      </p>
      {data.map((dataItem: DataItem) => (
        <CategoryItem
          key={dataItem.id}
          category={dataItem.category}
          amount={dataItem.amount}
          itemId={dataItem.id}
          itemType={dataItem.item_type}
          handleDeleteItem={() => handleDelete(dataItem.id, dataItem.item_type)}
        />
      ))}
      {addCategoryOpen && <AddCategory handleSubmit={handleAddCategory} />}
      <div className="bottom-row">
        <div
          className="add-more-section"
          aria-label="add-more-section"
          onClick={() => setAddCategoryOpen(true)}
        >
          <div className="add-more-button" aria-label='add-more-button'>+</div>
          <span className="add-more-text" aria-label='add-more-text'>Add more categories</span>
        </div>
        <div
          className="save-button"
          data-testid="save-button"
          aria-label="save-button"
        >
          Save
        </div>
      </div>
    </div>
  );
};
