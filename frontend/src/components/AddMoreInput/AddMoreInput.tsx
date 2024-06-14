import { FC } from 'react';
import './AddMoreInput.css';

interface AddMoreInputProps {}

export const AddMoreInput: FC<AddMoreInputProps> = () => {
  return (
    <div className="add-more-input-box" aria-label="add-more-input-box">
      <div className='category-input' aria-label='category-input'>
        <input placeholder='Category'/>
      </div>
      <div className='budget-input' aria-label='budget-input'>
      <input placeholder='£'/>
      </div>
      <div className='cancel-input' aria-label='cancel-input'>-</div>
    </div>
  );
};
