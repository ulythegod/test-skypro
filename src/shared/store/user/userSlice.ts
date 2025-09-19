import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { cloneDeep } from "lodash";

import type { User } from "../../api/auth";
import type { UserSliceState } from "./types";

const initialState: UserSliceState = {
  currentUser: undefined
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<User>) {
      state.currentUser = cloneDeep(action.payload);
    }
  }
});

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
