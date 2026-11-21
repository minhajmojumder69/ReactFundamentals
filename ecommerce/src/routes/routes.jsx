import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import ProductDetails from "../pages/productDetails";
import Login from "../pages/Login";
import ProtectedRoutes from "./ProtectedRoutes";
// import { RouterProvider } from "react-router/dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
        {
            path:'/',
            element: <Home/>
        },
        {
            path:'about',
            element:<About/>,
            // Component: About
        },
        {
            path:'products',
            element: <Products />
        },
        {
            path: 'products/:id',
            element: <ProtectedRoutes> <ProductDetails /> </ProtectedRoutes>
        },
        {
            path: '/login',
            element: <Login/>
        }
    ]
  },
]);