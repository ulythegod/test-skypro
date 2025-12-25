import type { FC } from "react";
import { StyledContent, StyledTitle } from "./styles";
import { ExpensesTable } from "./expenses-table";

export const MyExpenses: FC = () => {
  return <StyledContent>
    <StyledTitle>Мои расходы</StyledTitle>
    <ExpensesTable />
  </StyledContent>;
};
