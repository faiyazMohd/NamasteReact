import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Body from "./components/Body";
// import About from "./components/About";
import Cart from "./components/Cart";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Offer from "./components/Offer";
import SignIn from "./components/SignIn";
import RestaurantMenu from "./components/RestaurantMenu";
import ShimmerMenu from "./components/ShimmerMenu";
import UserContext from "./utils/contexts/UserContext";
import UserProfileState from "./utils/contexts/userProfile/UserProfileState";
import { Provider } from "react-redux";
import store from "./utils/store/store";

const About = lazy(() => import("./components/About"));
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
        <UserProfileState>
          <Outlet />
          {/* <Footer /> */}
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
          <Suspense fallback={<ShimmerMenu />}>
            {" "}
            <About />
          </Suspense>
        ),
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
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
