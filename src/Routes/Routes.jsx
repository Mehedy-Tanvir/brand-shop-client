import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Error/Error";
import Register from "../Pages/Register/Register";
import Products from "../Pages/Products/Products";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import Details from "../Pages/Details/Details";
import PrivateRoutes from "./PrivateRoutes";
const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://brand-shop-server-ip8kypgr8-md-mehedy-hasan-tanvirs-projects.vercel.app/companies"
          ),
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoutes>
            <AddProduct></AddProduct>
          </PrivateRoutes>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoutes>
            <MyCart></MyCart>
          </PrivateRoutes>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/brands/:name",
        element: <Products></Products>,
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-ip8kypgr8-md-mehedy-hasan-tanvirs-projects.vercel.app/brands/${params.name}`
          ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoutes>
            <UpdateProduct></UpdateProduct>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-ip8kypgr8-md-mehedy-hasan-tanvirs-projects.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoutes>
            <Details></Details>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-ip8kypgr8-md-mehedy-hasan-tanvirs-projects.vercel.app/products/${params.id}`
          ),
      },
    ],
  },
]);

export default Routes;
