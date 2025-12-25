import { Dropdown, Table } from "antd";
import { useCallback, useMemo, useState, type FC } from "react";
import type { TableLayoutProps } from "./types";
import moment from "moment";
import { formatCategory } from "../../../pages/my-expenses/expenses-table/utils";
import { StyledButton, StyledFilterButton, StyledLabel, StyledTableHeaderWithActions, StyledTableWrapper, StyledTitle } from "./styles";
import { CaretDownOutlined } from '@ant-design/icons';
import { CaretUpOutlined } from '@ant-design/icons';
import type { Expense, ExpenseCategory } from "../../store/expenses";
import { categoryItems } from "../table-form/consts";
import { orderBy } from "lodash";

export const TableLayout: FC<TableLayoutProps> = ({
  columns,
  data
}) => {
  const [dateSort, setDateSort] = useState<"asc" | "desc">();
  const [filteredCategory, setFilteredCategory] = useState<ExpenseCategory>();

  const sortByDate = useCallback((data: Expense[], dateSort: "asc" | "desc") => {
    const dataForSort = [...data];

    return orderBy(
      dataForSort,
      [(item) => new Date(item.date)],
      [dateSort]
    );
  }, []);

  const makeTableRow = useCallback((dataItem: Expense) => {
      const date = moment(dataItem.date);
      const formattedDate = date.format('DD.MM.YYYY');

      return {
        ...dataItem,
        date: formattedDate,
        category: formatCategory(dataItem.category),
      };
  }, []);

  const handleOnSort = useCallback(() => {
    setDateSort((prevSortValue) => {
      if (prevSortValue === "asc") {
        return "desc";
      }

      return "asc";
    });
  }, []);

  const handleCategorySelected = useCallback((category: ExpenseCategory) => {
    setFilteredCategory((prevCategory) => {      
      return prevCategory === category ? undefined : category;
    });
  }, []);

  const categoryItemsForFilter = useMemo(() => {
    return categoryItems.map((item) => {
      return {
        key: item.code,
        label: <StyledFilterButton 
          type="text"
          onClick={() => handleCategorySelected(item.code as ExpenseCategory)}
        >
          {item.name}
        </StyledFilterButton>
      }
    })
  }, []);

  const tableData = useMemo(() => {
    const sortedData = dateSort ? [...sortByDate(data, dateSort)] : [...data];
    
    if (filteredCategory) {
      return sortedData.filter((dataItem) => {        
        return dataItem.category === filteredCategory;
      }).map(makeTableRow);
    }
    
    return sortedData.map(makeTableRow);
  }, [data, dateSort, filteredCategory, makeTableRow, sortByDate]);

  return <StyledTableWrapper>
    <StyledTableHeaderWithActions>
      <StyledTitle level={2}>Таблица расходов</StyledTitle>
      <div>
        <Dropdown menu={{ items: categoryItemsForFilter }} placement="bottom" arrow={{ pointAtCenter: true }}>
          <StyledButton type="text">
            Фильтровать по категории<CaretDownOutlined />
          </StyledButton>
        </Dropdown>
        <StyledButton type="text" onClick={handleOnSort}>
          Сортировать по <StyledLabel>дате</StyledLabel>
          {dateSort === "asc" ? <CaretDownOutlined /> : <CaretUpOutlined />}
        </StyledButton>
      </div>
    </StyledTableHeaderWithActions>
    <Table columns={columns} dataSource={tableData} pagination={false} size="small" />
  </StyledTableWrapper>;
}