export type ExpenseCategory = "food" | "transport" | "other" | "apartment" | "education" | "entertainment";

export interface Expense {
  index: number;
  description: string;
  category: ExpenseCategory;
  date: Date;
  summ: number;
}

export interface ExpenseInitialValue {
  description: string;
  date: Date;
  summ: number;
}

export interface ExpensesState {
  expenses: Expense[];
}
