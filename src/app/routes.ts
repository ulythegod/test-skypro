import {
  type RouteConfig,
  route,
} from "@react-router/dev/routes";

export default [
  route("/", "../pages/authorization-page"),
  route("/login", "../pages/authorization-page"),
  route("/registration", "../pages/registration-page"),
] satisfies RouteConfig;