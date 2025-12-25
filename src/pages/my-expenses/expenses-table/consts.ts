import { type TableProps } from "antd";
import type { TableDataColumn } from "./types";

export const columns: TableProps<TableDataColumn>['columns'] = [
  {
    title: 'Описание',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Каегория',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Дата',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Сумма',
    dataIndex: 'summ',
    key: 'summ',
  }
];
