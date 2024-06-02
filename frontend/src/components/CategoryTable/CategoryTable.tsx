import { FC } from "react"
import "./CategoryTable.css"
import { fetchBudgets } from "../../services/budgetApiService"
import { useEffect } from "react"

interface CategoryTableProps {
  title: string
}

export const CategoryTable: FC<CategoryTableProps> = (props: CategoryTableProps) => {
  const { title } = props;

useEffect(() => {
  const budget_data = fetchBudgets()
  console.log('budget_data:', budget_data)
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