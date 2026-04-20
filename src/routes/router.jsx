import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/home/Home";
import Coverage from "../pages/Coverage/Coverage";
import NotFound from "../pages/404/NotFound";
import About from "../pages/about/About";
import Login from "../pages/Auth/login/Login";
import Register from "../pages/Auth/Register/Register";
import AuthLayout from "../layouts/AuthLayout";
import Rider from "../pages/rider/Rider";
import PrivateRoute from "./PrivateRoute";
import SendParcel from "../pages/sendParcel/SendParcel";

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
        path: 'rider',
        element: <PrivateRoute><Rider></Rider></PrivateRoute>
      },
      {
        path: 'sendParcel',
        element: <PrivateRoute><SendParcel></SendParcel></PrivateRoute>,
        loader: () => fetch('../../public/serviceCenters.json')
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
  {
    path:"/",
    Component: AuthLayout,
    children: [
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/register',
        Component: Register
      }
    ]
  }
]);