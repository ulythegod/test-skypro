import type { TableProps } from "antd";
import type { Expense } from "../../store/expenses";
import type { TableDataColumn } from "../../../pages/my-expenses/expenses-table";

export interface TableLayoutProps {
  data: Expense[];
  columns: TableProps<TableDataColumn>['columns'];
}
