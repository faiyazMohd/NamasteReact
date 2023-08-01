import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Cart from "./components/Cart"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Offer from "./components/Offer";
import SignIn from "./components/SignIn"
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import { useEffect } from "react";


const AppLayout = () => {
  // console.log("AppLayout Rendered");
  // useEffect( () => {
  //   console.log("AppLayout useEffect");
  // })
  
  return (
    <>
      <Header />
      <Outlet/>
      {/* <Footer /> */}
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement:<Error/>,
    children:[
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children:[
          {
            path:"profile",
            element:<Profile/>
          }
        ]
      },
      {
        path: "/offer",
        element: <Offer />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },

    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
