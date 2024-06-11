export interface DataItem {
  amount: string;
  category: string;
  date: string;
  itemId: string;
  itemType: string;
}

export interface CategoryTableProps {
  data: DataItem[];
  title: string;
}

export interface CategoryItemProps {
  category: string;
  amount: string;
  itemId: string;
  itemType: string;
  handleDeleteItem: (itemId: string) => void;
}
