export interface BudgetDataItem {
  amount: string;
  category: string;
  date: string;
  id: string;
}

export interface CategoryTableProps {
  budgetData?: BudgetDataItem[];
  title: string;
}
