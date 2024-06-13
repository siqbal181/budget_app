import { FC } from 'react';
import { CategoryItemProps } from '../types';
import './CategoryItem.css';

export const CategoryItem: FC<CategoryItemProps> = (
  props: CategoryItemProps
) => {
  const { category, amount, itemId, itemType, handleDeleteItem } = props;
  return (
    <div className="category-item-container">
      <div className="item-text">{category}</div>
      <div className="item-amount">£{amount}</div>
      <div
        className="remove-category-button"
        onClick={() => handleDeleteItem(itemId, itemType)}
        data-testid="remove-category"
      >
        -
      </div>
    </div>
  );
};
