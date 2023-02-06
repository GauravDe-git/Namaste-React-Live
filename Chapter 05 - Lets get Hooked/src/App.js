import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";

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
      <BodyComponent />
      <FooterComponent />
    </>
  );
};

root.render(<AppLayout />);
