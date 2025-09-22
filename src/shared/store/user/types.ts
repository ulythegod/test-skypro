import type { User } from "../../api/auth";

export interface UserSliceState {
  currentUser?: User;
}
