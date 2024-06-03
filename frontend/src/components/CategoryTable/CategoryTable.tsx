import { FC } from 'react';
import './CategoryTable.css';
import { CategoryItem } from '../CategoryItem/CategoryItem';

import { CategoryTableProps } from '../types';

export const CategoryTable: FC<CategoryTableProps> = ({ title, data, categoryItem}) => {

  return (
    <div className="category-box">
      <p className="category-box-title">{title}</p>
      <div className="add-more-section">
        <CategoryItem
          {...categoryItem}
        />
        <div className="add-more-button">+</div>
        <span className="add-more-text">Add more categories</span>
      </div>
    </div>
  );
};
