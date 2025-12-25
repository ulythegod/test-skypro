import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Expense } from "./types";
import { initialState } from "./consts";

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense(state, action: PayloadAction<Expense>) {
      state.expenses.push(action.payload);
    },
    removeExpense(state, action: PayloadAction<number>) {
      state.expenses = state.expenses.filter(item => item.index !== action.payload);
    }
  }
});

export const { addExpense, removeExpense } = expensesSlice.actions;
export default expensesSlice.reducer;
