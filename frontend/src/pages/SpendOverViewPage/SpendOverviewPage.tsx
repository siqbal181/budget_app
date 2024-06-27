import './SpendOverviewPage.css';
import { CategoryTable } from '../../components/CategoryTable/CategoryTable';
import { DataItem, NewCategory } from '../../components/types';
import { FC } from 'react';
import { useHandleDelete } from '../../hooks/useHandleDelete';

interface SpendOverviewPageProps {
  title: string;
  newCat: NewCategory;
  data: DataItem[];
}

const SpendOverviewPage: FC<SpendOverviewPageProps> = ({
  newCat,
  data,
  title,
}) => {
  const handleDeleteSpend = useHandleDelete();

  return (
    <div>
      <CategoryTable
        title={title}
        newCat={newCat}
        data={data}
        dateFilterModalOpen={true}
        handleDeleteItem={handleDeleteSpend}
      />
    </div>
  );
};

export default SpendOverviewPage;
