import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Projects from "./../pages/Projects";
import HowIBuild from "../pages/HowIBuild";
import AboutMe from "./../pages/AboutMe";
import HireMe from "./../pages/HireMe";
import Blogs from "./../pages/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <AboutMe></AboutMe>,
      },
      {
        path: "projects",
        element: <Projects></Projects>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "howibuild",
        element: <HowIBuild></HowIBuild>,
      },
      {
        path: "hireMe",
        element: <HireMe></HireMe>,
      },
    ],
  },
]);
