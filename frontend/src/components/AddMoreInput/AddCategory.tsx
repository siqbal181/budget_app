import { FC } from 'react';
import './AddCategory.css';
import { NewCategory } from '../types';
import { useForm, SubmitHandler } from 'react-hook-form';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

interface AddCategoryProps {
  handleSubmit: (data: NewCategory) => void;
}

const categoryList = ['Bills', 'Rent', 'Shopping', 'Charity'];

export const AddCategory: FC<AddCategoryProps> = ({ handleSubmit }) => {
  const {
    formState: { errors },
    handleSubmit: formSubmit,
    setValue,
    watch,
  } = useForm<NewCategory>();

  const categoryValue = watch('category');

  const onSubmit: SubmitHandler<NewCategory> = (data) => {
    handleSubmit(data);
    console.log(data);
  };

  return (
    <div className="add-more-input-box" aria-label="add-more-input-box">
      <form onSubmit={formSubmit(onSubmit)} className="form-structure">
        <FormControl fullWidth>
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            id="category"
            value={categoryValue || ''}
            onChange={(e) => setValue('category', e.target.value)}
            label="Category"
          >
            {categoryList.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {errors.category && <span>This field is required</span>}
        <TextField
          id="outlined-basic"
          label="£"
          variant="outlined"
          onChange={(e) => setValue('amount', e.target.value)}
        />
        {errors.amount && <span>This field is required</span>}
        <input
          type="submit"
          className="submit-input"
          value="+"
          aria-label="submit-input"
        />
      </form>
    </div>
  );
};
