import { FC } from 'react';
import { CategoryItemProps } from '../types';
import './CategoryItem.css';

export const CategoryItem: FC<CategoryItemProps> = (
  props: CategoryItemProps
) => {
  const { category, amount } = props;

  return (
    <div className="category-item-container">
      <span className="item-text">{category}</span>
      <span className="item-amount">£{amount}</span>
      <span className="remove-category-button">-</span>
    </div>
  );
};
