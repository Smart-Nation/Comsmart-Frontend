import { createBrowserRouter } from "react-router";
import { Landing } from "../pages/Landing/Landing";
import { Login } from "../pages/Auth/Login";
import { Register } from "../pages/Auth/Register";
import EventsList from "../pages/Auth/Events/EventsList";
import EventDetails from "../pages/Auth/Events/EventDetails";
import EventsLayout from "../pages/Auth/Events/EventsLayout";
import AnnouncementsList from "../pages/Auth/Announcements/AnnouncementsList";
import AnnouncementDetails from "../pages/Auth/Announcements/AnnouncementDetails";
import AnnouncementsLayout from "../pages/Auth/Announcements/AnnouncementsLayout";
import ResourcesList from "../pages/Auth/Resources/ResourcesList";
import ResourceDetails from "../pages/Auth/Resources/ResourceDetails";
import ResourcesLayout from "../pages/Auth/Resources/ResourcesLayout";
import MainLayout from "../layouts/MainLayout";



/**
 * @type {import("react-router").RouteObject[]}
 */
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      {
        path: "events",
        element: <EventsLayout />,
        children: [
          { index: true, element: <EventsList /> },
          { path: ":id", element: <EventDetails /> }
        ]
      },
      {
        path: "announcements",
        element: <AnnouncementsLayout />,
        children: [
          { index: true, element: <AnnouncementsList /> },
          { path: ":id", element: <AnnouncementDetails /> }
        ]
      },
      {
        path: "resources",
        element: <ResourcesLayout />,
        children: [
          { index: true, element: <ResourcesList /> },
          { path: ":id", element: <ResourceDetails /> }
        ]
      }
    ]
  }
]);