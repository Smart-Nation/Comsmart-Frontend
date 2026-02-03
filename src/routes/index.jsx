import { createBrowserRouter } from "react-router";
import { Landing } from "../pages/Landing/Landing";

/**
 * @type {import("react-router").RouteObject[]}
 */
export const routes = createBrowserRouter([
  {
    index: true,
    Component: Landing,
  },
]);
