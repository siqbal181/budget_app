import './SpendOverviewPage.css';
import { CategoryTable } from '../../components/CategoryTable/CategoryTable';
import { DataItem, NewCategory } from '../../components/types';
import { FC } from 'react';

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
  return (
    <div>
      <CategoryTable
        title={title}
        newCat={newCat}
        data={data}
        dateFilterModalOpen={true}
        handleDeleteItem={() => console.log('delete')}
      />
    </div>
  );
};

export default SpendOverviewPage;
