import type { RouteObject } from "react-router";

import { AuthorizationPage } from "../pages/authorization-page";
import { RegistrationPage } from "../pages/registration-page";

export const routes: RouteObject[] = [
  {
    path: "",
    element: <AuthorizationPage />
  },
  { path: "login", element: <AuthorizationPage /> },
  { path: "register", element: <RegistrationPage /> }
];
