// import Body from "./components/body/MainContainer/videosContainer/Body";
import { Provider } from "react-redux";
import store from "./utils/store/store";
import "./app.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import VideosContainer from "./components/body/MainContainer/videosContainer/VideosContainer";
import WatchVideoPage from "./components/body/MainContainer/watchPage/WatchVideoPage";
import Body from "./components/body/Body";
import ShortsPage from "./components/body/MainContainer/shorts/ShortsPage";
import SubscriptionsPage from "./components/body/MainContainer/subscriptions/SubscriptionsPage";
import LibraryPage from "./components/body/MainContainer/libraryPage/LibraryPage";
import HistoryPage from "./components/body/MainContainer/history/HistoryPage";
import SearchResultPage from "./components/body/MainContainer/searchResultsPage/SearchResultPage";
import PlaylistPage from "./components/body/MainContainer/playlistPage/PlaylistPage";

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
      {
        path: "results",
        element: <SearchResultPage />,
      },
      {
        path: "playlist",
        element: <PlaylistPage />,
      },
      {
        path: "shorts",
        element: <ShortsPage />,
      },
      {
        path: "subscriptions",
        element: <SubscriptionsPage />,
      },
      {
        path: "library",
        element: <LibraryPage />,
      },
      {
        path: "history",
        element: <HistoryPage />,
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
