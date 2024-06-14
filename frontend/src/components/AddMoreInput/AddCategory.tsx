import { FC } from 'react';
import "./AddCategory.css"

interface AddCategoryProps {}

export const AddCategory: FC<AddCategoryProps> = () => {
  return (
    <div className="add-more-input-box" aria-label="add-more-input-box">
      <div className='category-input-box' aria-label='category-input-box'>
        <input placeholder='Category' className='category-input'/>
      </div>
      <div className='amount-input-box' aria-label='amount-input-box'>
      <input placeholder='£' className='amount-input'/>
      </div>
      <div className='save-input' aria-label='save-input'>+</div>
    </div>
  );
};
