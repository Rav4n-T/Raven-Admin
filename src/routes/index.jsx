import AdminLayout from "@/components/layout/AdminLayout";
import App from "@/pages/App";
import Home from "@/pages/admin/Home";
import Login from "@/pages/admin/Login";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default routes;
