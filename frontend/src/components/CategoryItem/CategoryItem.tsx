import { FC } from "react";
import { CategoryItemProps } from "../types";

export const CategoryItem: FC<CategoryItemProps> = (props: CategoryItemProps) => {
  const { name, amount } = props;

  return (
    <div>
      <span>{name}</span>
      <span>{amount}</span>
    </div>
  )
}