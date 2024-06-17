import { FC, useEffect, useState } from 'react';
import './AddCategory.css';
import { NewCategory } from '../types';
import { useForm, SubmitHandler } from 'react-hook-form';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { DataItem } from '../types';

interface AddCategoryProps {
  usedCategories: DataItem[];
  handleAddCategory: (newCat: NewCategory) => void;
}

export const AddCategory: FC<AddCategoryProps> = ({ usedCategories, handleAddCategory }) => {

  const {
    formState: { errors },
    handleSubmit: formSubmit,
    setValue,
    watch,
  } = useForm<NewCategory>({
    resolver: (data) => ({
      values: {
        ...data,
        amount: parseFloat(data.amount) || 0,
      },
      errors: {},
    })
  });
  const [categoriesList, setCategoriesList] = useState<string[]>([]);

  const categoryValue = watch('category');

  const onSubmit: SubmitHandler<NewCategory> = async (newCat) => {
    handleAddCategory(newCat)
  };

  useEffect(() => {
    const filteredCategories = () => {
      const usedCatNames = usedCategories.map((category) => (category.category))
      const catList = ['Rent', 'Shopping', 'Charity', 'Personal Care', 'Bills'];
      const filteredList = catList.filter((category) => ( !usedCatNames.includes(category)))
      setCategoriesList(filteredList)
    }
    filteredCategories();
  }, [usedCategories])

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
            {categoriesList.map((category) => (
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
          onChange={(e) => setValue('amount', (e.target.value))}
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
