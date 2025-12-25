import type { ExpensesState } from "./types";

export const initialState: ExpensesState = {
  expenses: [
    {
      index: 0,
      description: "Пятерочка",
      category: "food",
      date: new Date (2025, 30, 7),
      summ: 3500,
    },
    {
      index: 1,
      description: "Яндекс такси",
      category: "transport",
      date: new Date (2025, 12, 7),
      summ: 730,
    },
    {
      index: 2,
      description: "Аптека",
      category: "other",
      date: new Date (2025, 25, 5),
      summ: 1200,
    },
  ]
};
