import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_URl } from "../../consts";
import type { CreateAuthCreditalsProps, CreateAuthCreditalsResult } from "./types";

const authBaseUrl = `${BASE_URl}auth/jwt`;

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URl }),
  endpoints: (build) => ({
    createAuthCreditals: build.mutation<CreateAuthCreditalsResult, CreateAuthCreditalsProps>({
      query: (body) => {
        return {
          url: authBaseUrl,
          method: "POST",
          body
        };
      }
    })
  })
});

export const {
  useCreateAuthCreditalsMutation
} = authApi;