import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ServiceDetail from "../pages/ServiceDetail";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog";
import Purchased from "../pages/Purchased";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/services/:serviceId",
        element: (
          <PrivateRoute>
            <ServiceDetail />
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: (
          <PrivateRoute>
            <Blog />
          </PrivateRoute>
        ),
      },
      {
        path: "/purchased",
        element: (
          <PrivateRoute>
            <Purchased />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
