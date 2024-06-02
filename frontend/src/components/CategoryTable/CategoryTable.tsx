import { FC } from "react"
import "./CategoryTable.css"

interface CategoryTableProps {
  title: string
}

export const CategoryTable: FC<CategoryTableProps> = (props: CategoryTableProps) => {
  const { title } = props;

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