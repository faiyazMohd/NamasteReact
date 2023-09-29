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
import ChannelPage from "./components/body/MainContainer/channelPage/ChannelPage";
import AboutSection from "./components/body/MainContainer/channelPage/AboutSection";
import PlaylistSection from "./components/body/MainContainer/channelPage/PlaylistSection";
import HomeSection from "./components/body/MainContainer/channelPage/HomeSection";

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
        path: "channel/:channelId",
        element: <ChannelPage />,
        children: [
          {
            path: "",
            element: <HomeSection/>,
          },
          {
            path: "playlist",
            element: <PlaylistSection />,
          },
          {
            path: "about",
            element: <AboutSection />,
          },
        ],
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
