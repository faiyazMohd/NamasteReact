import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Body from "./components/Body";
// import About from "./components/About";
// import Cart from "./components/Cart";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
// import Offer from "./components/Offer";
import SignIn from "./components/SignIn";
// import RestaurantMenu from "./components/RestaurantMenu";
import ShimmerMenu from "./components/ShimmerMenu";
import UserContext from "./utils/contexts/UserContext";
import UserProfileState from "./utils/contexts/userProfile/UserProfileState";
import { Provider, useSelector } from "react-redux";
import store from "./utils/store/store";
import BottomNavbar from "./components/BottomNavbar";
import AddressSidebar from "./components/AddressSidebar";
import SignInSidebar from "./components/SignInSidebar";
import Spinner from "./components/Spinner";
const About = lazy(() => import("./components/About"));
const Offer = lazy(() => import("./components/Offer"));
const Cart = lazy(() => import("./components/Cart"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));
const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Faiyaz Mohd",
    email: "faiayz.b.mohd@gmail.com",
  });

  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <Header />
        <AddressSidebar />
        <SignInSidebar />
        <UserProfileState>
          <Outlet />
          <BottomNavbar />
        </UserProfileState>
      </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Spinner />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/offer",
        element: (
          <Suspense fallback={<Spinner />}>
            <Offer />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Spinner />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/restaurant/:id",
        element: (
          <Suspense fallback={<ShimmerMenu />}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
