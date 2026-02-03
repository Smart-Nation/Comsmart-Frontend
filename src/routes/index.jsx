import { createBrowserRouter } from "react-router";
import { Landing } from "../pages/Landing/Landing";
import { Login } from "../pages/Auth/Login";
import { Register } from "../pages/Auth/Register";

/**
 * @type {import("react-router").RouteObject[]}
 */
export const routes = createBrowserRouter([
  {
    index: true,
    Component: Landing,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
]);
