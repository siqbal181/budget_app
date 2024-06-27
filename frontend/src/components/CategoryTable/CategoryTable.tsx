import * as React from 'react';
import { FC, useState } from 'react';
import './CategoryTable.css';
import { CategoryItem } from '../CategoryItem/CategoryItem';
import { CategoryTableProps, NewCategory } from '../types';
import { postBudgetItem } from '../../services/budgetApiService';
import { useBudgetContext } from '../../hooks/useBudgetContext';
import { AddCategory } from '../AddMoreInput/AddCategory';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

export const CategoryTable: FC<CategoryTableProps> = ({
  title,
  data,
  dateFilterModalOpen,
  handleDeleteItem,
}) => {
  const { getBudgets } = useBudgetContext();
  const [addCategoryOpen, setAddCategoryOpen] = useState(false);
  const [dateFilter, setDateFiler] = React.useState<Dayjs | null>(dayjs());

  const handleAddCategory = async (newCat: NewCategory) => {
    try {
      await postBudgetItem(newCat);
      await getBudgets();
    } catch (error) {
      console.error('Error added budget item');
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const filterSpendByDate = () => {
    const dateValueFormat = `${dateFilter?.year()}-${dateFilter?.date()}-${dateFilter?.month()}`;
    return dateValueFormat;
    // 2024-20-5
  };

  return (
    <div className="category-box" aria-label="category-box">
      <p className="category-box-title" aria-label="category-box-title">
        {title}
      </p>
      {dateFilterModalOpen && (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={dateFilter}
            onChange={(newValue) => setDateFiler(newValue)}
          />
        </LocalizationProvider>
      )}
      {data.map((dataItem) => (
        <CategoryItem
          key={dataItem.id}
          category={dataItem.category}
          amount={dataItem.amount}
          itemId={dataItem.id}
          itemType={dataItem.item_type}
          handleDeleteItem={() =>
            handleDeleteItem(dataItem.id, dataItem.item_type)
          }
        />
      ))}
      {addCategoryOpen && (
        <AddCategory
          usedCategories={data}
          handleAddCategory={handleAddCategory}
        />
      )}
      <div className="bottom-row">
        <div
          className="add-more-section"
          aria-label="add-more-section"
          onClick={() => setAddCategoryOpen(true)}
        >
          <div className="add-more-button" aria-label="add-more-button">
            +
          </div>
          <span className="add-more-text" aria-label="add-more-text">
            Add more categories
          </span>
        </div>
        <div
          className="save-button"
          data-testid="save-button"
          aria-label="save-button"
        >
          Save
        </div>
      </div>
    </div>
  );
};
