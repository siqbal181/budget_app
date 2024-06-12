import { FC } from 'react';
import './CategoryTable.css';
import { CategoryItem } from '../CategoryItem/CategoryItem';
import { CategoryTableProps, DataItem } from '../types';
import { deleteBudgetItem } from '../../services/budgetApiService';
import { deleteSpendItem } from '../../services/spendApiService';

export const CategoryTable: FC<CategoryTableProps> = ({ title, data }) => {

  function handleDelete(itemId: string, itemType: string) {
    console.log(itemId, itemType)
    try {
      itemType === 'budget' ? deleteBudgetItem({id: Number(itemId)}) : deleteSpendItem({ id: Number(itemId)})
    } catch (error) {
      throw new Error(`Failed to delete ${itemType} item`)
    }
  }

  return (
    <div className="category-box">
      <p className="category-box-title" aria-label="category-box-title">
        {title}
      </p>
      {data.map((dataItem: DataItem) => (
        <CategoryItem
          key={dataItem.id}
          category={dataItem.category}
          amount={dataItem.amount}
          id={dataItem.id}
          itemType={dataItem.item_type}
          handleDeleteItem={() => handleDelete(dataItem.id, dataItem.item_type)}
        />
      ))}
      <div className="bottom-row">
        <div className="add-more-section">
          <div className="add-more-button">+</div>
          <span className="add-more-text">Add more categories</span>
        </div>
        <div className="save-button" data-testid="save-button">
          Save
        </div>
      </div>
    </div>
  );
};
