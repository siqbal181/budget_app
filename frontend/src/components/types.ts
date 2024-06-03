export interface DataItem {
  amount: string;
  category: string;
  date: string;
  id: string;
}

// export interface SpendDataItem extends DataItem {}

// export interface BudgetDataItem extends DataItem {}

export interface CategoryTableProps {
  data: DataItem[];
  title: string;
}
