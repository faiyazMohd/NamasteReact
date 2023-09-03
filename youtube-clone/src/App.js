import Body from "./components/Body";
import SideBar from "./components/SideBar";
import MobileHeader from "./components/MobileHeader";
import { Provider } from "react-redux";
import store from "./utils/store/store";
import "./app.css";
import Header from "./components/Header";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import VideosContainer from "./components/VideosContainer";
import WatchVideoPage from "./components/WatchVideoPage";
import MobileAccount from "./components/MobileAccount";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <VideosContainer />,
      },
      {
        path: "watch",
        element: <WatchVideoPage />,
      },
    ],
  },
]);
const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
};

export default App;
