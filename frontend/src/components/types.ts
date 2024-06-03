export interface DataItem {
  amount: string;
  category: string;
  date: string;
  id: string;
}

export interface CategoryTableProps {
  data: DataItem[];
  title: string;
}

export interface CategoryItemProps {
  category: string;
  amount: string;
}
