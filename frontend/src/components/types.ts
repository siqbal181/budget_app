export interface DataItem {
  amount: string;
  category: string;
  date: string;
  id: string;
  item_type: string;
}

export interface CategoryTableProps {
  data: DataItem[];
  title: string;
}

export interface CategoryItemProps {
  category: string;
  amount: string;
  id: string;
  itemType: string;
  handleDeleteItem: (id: string, itemType: string) => void;
}
