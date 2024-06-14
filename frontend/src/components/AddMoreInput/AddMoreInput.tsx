import { FC } from 'react';
import './AddMoreInput.css';

interface AddMoreInputProps {}

export const AddMoreInput: FC<AddMoreInputProps> = () => {
  return (
    <div className="add-more-input-box" aria-label="add-more-input-box">
      Add
    </div>
  );
};
