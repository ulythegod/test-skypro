import { useCallback, useState, type FC } from "react";
import { ChipsButtonBlock, StyledButton, StyledChipsButton, StyledForm, StyledInput, StyledTableFormWrapper, StyledTitle } from "./styles";
import { Form, Typography } from "antd";
import { categoryItems, DATE_FORMAT, ERROR_MESSAGE } from "./consts";
import { addExpense, type Expense, type ExpenseCategory, type ExpenseInitialValue } from "../../store/expenses";
import moment from "moment";
import { useAppDispatch } from "../../hooks";

export const TableForm: FC = () => {
  const { Text } = Typography;
  const dispatch = useAppDispatch();

  const [category, setCategory] = useState<ExpenseCategory>();
  const [categoryHasError, setCategoryHasError] = useState<boolean>(false);

  const onFinish = useCallback((values: any) => {
    if (!category) {
      setCategoryHasError(true);
      return;
    }

    setCategoryHasError(false);

    const momentObj = moment(values.date, DATE_FORMAT);

    const expense: Expense = {
      ...values,
      date: momentObj.toDate(),
      category,
      id: Math.random(),
      summ: Number(values.summ)
    };

    setCategoryHasError(false);
    dispatch(addExpense(expense));
  }, [category]);

  return <StyledTableFormWrapper>
    <StyledTitle level={2}>Новый расход</StyledTitle>
    <StyledForm
      onFinish={onFinish}
      initialValues={{ 
        description: "",
        date: moment().format(DATE_FORMAT),
        summ: 0, 
      }}
    >
      <StyledTitle level={4}>Описание</StyledTitle>
      <Form.Item<ExpenseInitialValue>
        label={null}
        name="description"
        rules={[{ required: true, message: ERROR_MESSAGE }]}
      >
        <StyledInput placeholder="Введите описание" />
      </Form.Item>      
      <StyledTitle level={4}>Категория</StyledTitle>
      <ChipsButtonBlock>
        {
          categoryItems.map((category) => {
            return <StyledChipsButton 
              key={category.code} 
              onClick={() => setCategory(category.code as ExpenseCategory)}
            >
              {category.icon} {category.name}
            </StyledChipsButton>
          })
        }
      </ChipsButtonBlock>
      {categoryHasError && <Text type="danger">{ERROR_MESSAGE}</Text>}
      <StyledTitle level={4}>Дата</StyledTitle>
      <Form.Item<ExpenseInitialValue>
        label={null}
        name="date"
        rules={[{ required: true, message: ERROR_MESSAGE }]}
      >
        <StyledInput placeholder="Введите дату" />
      </Form.Item>
      <StyledTitle level={4}>Сумма</StyledTitle>
      <Form.Item<ExpenseInitialValue>
        label={null}
        name="summ"
        rules={[{ required: true, message: ERROR_MESSAGE }]}
      >
        <StyledInput placeholder="Введите сумму" />
      </Form.Item>
      <Form.Item label={null}>
        <StyledButton type="primary" htmlType="submit">
          Добавить новый расход
        </StyledButton>
      </Form.Item>
    </StyledForm>
  </StyledTableFormWrapper>;
};
