import { FC } from 'react';
import "./AddCategory.css"
import { NewCategory } from '../types';
import { useForm, SubmitHandler } from 'react-hook-form';

interface AddCategoryProps {
}

export const AddCategory: FC<AddCategoryProps> = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm<NewCategory>();
  const onSubmit: SubmitHandler<NewCategory> = (data) => console.log(data)

  return (
    <div className="add-more-input-box" aria-label="add-more-input-box">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("category", {required: true})} placeholder='Category' className='category-input' aria-label='category-input'/>
        <input {...register("amount", {required: true})}placeholder='£' className='amount-input' aria-label='amount-input'/>
        <input type="submit" className='submit-input' value="+" aria-label='submit-input'/>
        {errors.category && <span>This field is required</span>}
        {errors.amount && <span>This field is required</span>}
      </form>
    </div>
  );
};
