import { createBrowserRouter } from "react-router";
import { HelloWorld } from "../pages/HelloWorld/HelloWorld";

/**
 * @type {import("react-router").RouteObject[]}
 */
export const routes = createBrowserRouter([
  {
    index: true,
    Component: HelloWorld,
  },
]);
