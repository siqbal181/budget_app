import { FC } from "react"
import "./CategoryTable.css"
import { fetchBudgets } from "../../services/budgetApiService"
import { useEffect, useState } from "react"
import { BudgetDataItem, CategoryTableProps } from "../types"

export const CategoryTable: FC<CategoryTableProps> = (props: CategoryTableProps) => {
  const { title } = props;
  const [budgetData, setBudgetData] = useState<BudgetDataItem[]>([])

  async function fetchBudgetData() {
    try {
      const budget_data = await fetchBudgets()
      setBudgetData(budget_data);
    } catch {
      throw new Error("Error fetching budgets")
    }
  }

useEffect( () => {
  fetchBudgetData();
}, [])

  return (
    <div className="category-box">
      <p className="category-box-title">{title}</p>
      <div className="add-more-section">
        <div className="add-more-button">+</div>
        <span className="add-more-text">Add more categories</span>
      </div>
    </div>
  )
}