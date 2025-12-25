import { useCallback, useMemo, type FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks";
import { StyledEditFilled, StyleDeleteFilled, StyledTableContainer } from "./styles";
import { TableLayout } from "../../../shared/ui/table";
import { columns } from "./consts";
import { Button, Space } from "antd";
import { cloneDeep } from "lodash";
import { TableForm } from "../../../shared/ui/table-form";
import { removeExpense } from "../../../shared/store/expenses";

export const ExpensesTable: FC = () => {
  const dispatch = useAppDispatch();

  const data = useAppSelector((state) => state.expenses.expenses);

  const handleRemoveExpense = useCallback((recordIndex: number) => {
    dispatch(removeExpense(recordIndex));
  }, []);

  const tableColumns = useMemo(() => {
    const columnsData = cloneDeep(columns);

    columnsData?.push({
      title: '',
      key: 'action',
      render: (_, record) => (
        <Space size={"small"}>
          <Button type="text" icon={<StyledEditFilled />} shape="circle" />
          <Button type="text" icon={<StyleDeleteFilled />} shape="circle" onClick={() => handleRemoveExpense(record.index)}/>
        </Space>
      ),
    });

    return columnsData;
  }, []);

  return <StyledTableContainer>
    <TableLayout data={data} columns={tableColumns} />
    <TableForm />
  </StyledTableContainer>;
}
