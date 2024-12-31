import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Pages/Home";
import Main from "../Layout/Main";
import OurMenu from "../components/Pages/OurMenu";
import OrderFood from "../components/Pages/OrderFood";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/our-menu',
          element:<OurMenu></OurMenu>
        },
        {
          path:'/order-now',
          element:<OrderFood></OrderFood>
        }
      ]
    },
  ]);