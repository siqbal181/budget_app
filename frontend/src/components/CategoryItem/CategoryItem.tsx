import { FC } from "react";
import { CategoryItemProps } from "../types";

export const CategoryItem: FC<CategoryItemProps> = (props: CategoryItemProps) => {
  const { category, amount } = props;

  return (
    <div>
      <span>{category}</span>
      <span>{amount}</span>
    </div>
  )
}