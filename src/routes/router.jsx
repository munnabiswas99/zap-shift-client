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
import DashBoardLayout from "../layouts/DashBoardLayout";
import MyParcels from "../pages/dashboard/myParcels/MyParcels";
import PayNow from "../pages/dashboard/payment/PayNow";
import PaymentSuccess from "../pages/dashboard/payment/PaymentSuccess";
import PaymentCancel from "../pages/dashboard/payment/PaymentCancel";
import PaymentHistory from "../pages/dashboard/paymentHisstory/PaymentHistory";
import ApproveRiders from "../pages/dashboard/approveRiders/ApproveRiders";

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
        element: <PrivateRoute><Rider></Rider></PrivateRoute>,
        loader: () => fetch('../../public/serviceCenters.json')
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
  },
  {
    path:'/dashboard',
    element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
    children: [
      {
        path: 'my-parcels',
        Component: MyParcels
      },
      {
        path: 'payNow/:parcelId',
        Component: PayNow
      },
      {
        path: 'payment-history',
        Component: PaymentHistory
      },
      {
        path: 'approve-riders',
        Component: ApproveRiders
      },
     {
        path: 'payment-success',
        Component: PaymentSuccess
     },
     {
        path: 'payment-canceled',
        Component: PaymentCancel
     }
      
    ]
  }
]);