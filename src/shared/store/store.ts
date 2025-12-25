import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";

import expensesSlice from "./expenses/expensesSlice";

export const store = configureStore({
  reducer: {
    "expenses": expensesSlice
  },
});

setupListeners(store.dispatch);

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
