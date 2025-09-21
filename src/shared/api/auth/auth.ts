import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_URl } from "../../consts";
import type {
  ActivateUserParams,
  ActivateUserResult,
  CreateUserParams,
  CreateUserResult,
  CreateUserTokenParams,
  CreateUserTokenResult,
  User
} from "./types";

const authBaseUrl = `${BASE_URl}/auth`;

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URl }),
  endpoints: (build) => ({
    createUserToken: build.mutation<CreateUserTokenResult, CreateUserTokenParams>({
      query: (body) => {
        return {
          url: `${authBaseUrl}/jwt/create`,
          method: "POST",
          body
        };
      }
    }),
    createUser: build.mutation<CreateUserResult, CreateUserParams>({
      query: (body) => {
        return {
          url: `${authBaseUrl}/users/`,
          method: "POST",
          body
        };
      }
    }),
    activateUser: build.mutation<ActivateUserResult, ActivateUserParams>({
      query: (body) => {
        return {
          url: `${authBaseUrl}/activation`,
          method: "POST",
          body
        };
      }
    }),
    getCurrentUser: build.query<User, void>({
      query: () => `${authBaseUrl}/users/me/`
    })
  })
});

export const {
  useCreateUserMutation,
  useCreateUserTokenMutation,
  useActivateUserMutation,
  useLazyGetCurrentUserQuery
} = authApi;