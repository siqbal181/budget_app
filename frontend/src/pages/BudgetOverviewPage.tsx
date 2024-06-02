import { FC } from "react"
import { CategoryTable } from "../components/CategoryTable/CategoryTable"


interface BudgetOverviewPageProps {

}

export const BudgetOverviewPage: FC<BudgetOverviewPageProps> = () => {

return (
  <>
    <CategoryTable title="Please enter your budgets here"/>
  </>
  )
}