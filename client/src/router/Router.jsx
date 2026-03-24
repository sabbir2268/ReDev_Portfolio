import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import HowIBuild from "../pages/HowIBuild";
import AboutMe from "./../pages/AboutMe";
import HireMe from "./../pages/HireMe";
import AllProjects from "./../pages/AllProjects";
import AdminLogin from "../pages/loginAsAdmin/LoginAsAdmin";
import DashBoard from "../pages/dashBoard/DashBoard";
import PrivateRoute from "./PrivateRoute";
import DashHome from "../pages/dashBoard/dashHome/DashHome";
import AddProjects from "../pages/dashBoard/addProjects/AddProjects";
import Messages from "./../pages/dashBoard/messages/Messages";
import ManageProjects from "../pages/dashBoard/manageProjects/ManageProjects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutMe />,
      },
      {
        path: "allProjects",
        element: <AllProjects />,
      },
      {
        path: "howIBuild",
        element: <HowIBuild />,
      },
      {
        path: "hireMe",
        element: <HireMe />,
      },
    ],
  },
  {
    path: "/loginAsAdmin",
    element: <AdminLogin></AdminLogin>,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoard />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DashHome />,
      },
      {
        path: "addProjects",
        element: <AddProjects />,
      },
      {
        path: "manageProjects",
        element: <ManageProjects />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
    ],
  },
]);
