import Body from "./components/body/Main Container/videosContainer/Body";
import { Provider } from "react-redux";
import store from "./utils/store/store";
import "./app.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import VideosContainer from "./components/body/Main Container/videosContainer/VideosContainer";
import WatchVideoPage from "./components/body/Main Container/watchPage/WatchVideoPage";


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
