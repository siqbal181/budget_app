import { FC } from 'react';
import './CategoryTable.css';
import { CategoryItem } from '../CategoryItem/CategoryItem';

import { CategoryTableProps } from '../types';

export const CategoryTable: FC<CategoryTableProps> = ({ title, data }) => {
  return (
    <div className="category-box">
      <p className="category-box-title" aria-label="category-box-title">
        {title}
      </p>
      {data.map((dataItem) => (
        <CategoryItem
          category={dataItem.category}
          amount={dataItem.amount}
          key={dataItem.category}
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
