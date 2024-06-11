import { FC } from 'react';
import './CategoryTable.css';
import { CategoryItem } from '../CategoryItem/CategoryItem';
import { CategoryTableProps, DataItem } from '../types';
// import { deleteBudgetItem } from '../../services/budgetApiService';
// import { deleteSpendItem } from '../../services/spendApiService';

export const CategoryTable: FC<CategoryTableProps> = ({ title, data }) => {

  function handleDelete() {
    console.log('delete')
    // try {
    //   console.log('deleted')
    // } catch (error) {
      
    // }
  }

  return (
    <div className="category-box">
      <p className="category-box-title" aria-label="category-box-title">
        {title}
      </p>
      {data.map((dataItem: DataItem) => (
        <CategoryItem
          key={dataItem.itemId}
          category={dataItem.category}
          amount={dataItem.amount}
          itemId={dataItem.itemId}
          itemType={dataItem.itemType}
          handleDeleteItem={handleDelete}
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
