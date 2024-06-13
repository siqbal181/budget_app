import { FC } from 'react';
import { CategoryItemProps } from '../types';
import './CategoryItem.css';

export const CategoryItem: FC<CategoryItemProps> = (
  props: CategoryItemProps
) => {
  const { category, amount, itemId, itemType, handleDeleteItem } = props;
  return (
    <div
      className="category-item-container"
      aria-label="category-item-container"
    >
      <div className="item-text" aria-label="category-text">
        {category}
      </div>
      <div className="item-amount" aria-label="category-amount">
        £{amount}
      </div>
      <div
        className="remove-category-button"
        aria-label="remove-category-button"
        onClick={() => handleDeleteItem(itemId, itemType)}
        data-testid="remove-category"
      >
        -
      </div>
    </div>
  );
};
