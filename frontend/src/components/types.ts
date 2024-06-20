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
  newCat: NewCategory;
  dateFilterModalOpen: boolean;
  handleDeleteItem: (dataItem: string, dateItemType: string) => void;
}

export interface CategoryItemProps {
  category: string;
  amount: string;
  itemId: string;
  itemType: string;
  handleDeleteItem: (id: string, itemType: string) => void;
}

export interface NewCategory {
  category: string;
  amount: string;
}
