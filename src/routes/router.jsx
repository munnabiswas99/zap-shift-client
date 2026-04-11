import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/home/Home";
import Coverage from "../pages/Coverage/Coverage";
import NotFound from "../pages/404/NotFound";
import About from "../pages/about/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children : [
      {
        index: true,
        Component: Home
      },
      {
        path: '/coverage',
        Component: Coverage,
        loader: () => fetch('../../public/serviceCenters.json')
      },
      {
        path: '/about',
        Component: About
      },
      {
        path: "*",
        Component: NotFound
      }
    ]
  },
]);