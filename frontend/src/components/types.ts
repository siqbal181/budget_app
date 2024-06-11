export interface DataItem {
  amount: string;
  category: string;
  date: string;
  itemId: string;
}

export interface CategoryTableProps {
  data: DataItem[];
  title: string;
}

export interface CategoryItemProps {
  category: string;
  amount: string;
  itemId: string;
  handleDeleteItem: (itemId: string) => void;
}
