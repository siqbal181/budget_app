export interface DataItem {
  amount: string;
  category: string;
  date: string;
  id: string;
}

export interface CategoryTableProps {
  data: DataItem[];
  title: string;
  categoryItem: CategoryItemProps;
}

export interface CategoryItemProps {
  name: string;
  amount: number;
}
