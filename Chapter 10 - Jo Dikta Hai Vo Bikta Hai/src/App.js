import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

// * App Layout
// * -Header - Logo, NavItems( right side), Cart
// * -Body - Search Bar
// *        RestaurantList
// *          -Card > Image,Name, Rating, Cusines
// * -Footer -Links, Copyright

const rootNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootNode);

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [{
      path: "/about",
      element: <About/>
    },
    {path: "/",
    element: <BodyComponent/>}]
  },
  {
    path: "/restaurant/:id",
    element: <RestaurantMenu/>,
  }
])

root.render(<RouterProvider router={appRouter}/>);
