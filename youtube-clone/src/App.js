// import Body from "./components/body/MainContainer/videosContainer/Body";
import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import store from "./utils/store/store";
import "./app.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import VideosContainer from "./components/body/MainContainer/videosContainer/VideosContainer";
// import WatchVideoPage from "./components/body/MainContainer/watchPage/WatchVideoPage";
import Body from "./components/body/Body";
// import ShortsPage from "./components/body/MainContainer/shorts/ShortsPage";
// import SubscriptionsPage from "./components/body/MainContainer/subscriptions/SubscriptionsPage";
// import LibraryPage from "./components/body/MainContainer/libraryPage/LibraryPage";
// import HistoryPage from "./components/body/MainContainer/history/HistoryPage";
// import SearchResultPage from "./components/body/MainContainer/searchResultsPage/SearchResultPage";
// import PlaylistPage from "./components/body/MainContainer/playlistPage/PlaylistPage";
// import ChannelPage from "./components/body/MainContainer/channelPage/ChannelPage";
import HomeSection from "./components/body/MainContainer/channelPage/HomeSection";
// import PlaylistSection from "./components/body/MainContainer/channelPage/PlaylistSection";
// import AboutSection from "./components/body/MainContainer/channelPage/AboutSection";

import LoadingSpin from "./components/others/LoadingSpin";
import WatchPageShimmer from "./components/others/WatchPageShimmer";
import PlaylistPageShimmer from "./components/others/PlaylistPageShimmer";
import ChannelPageShimmer from "./components/others/ChannelPageShimmer";

const ShortsPage = lazy(() =>
  import("./components/body/MainContainer/shorts/ShortsPage")
);
const SubscriptionsPage = lazy(() =>
  import("./components/body/MainContainer/subscriptions/SubscriptionsPage")
);
const LibraryPage = lazy(() =>
  import("./components/body/MainContainer/libraryPage/LibraryPage")
);
const HistoryPage = lazy(() =>
  import("./components/body/MainContainer/history/HistoryPage")
);
const SearchResultPage = lazy(() =>
  import("./components/body/MainContainer/searchResultsPage/SearchResultPage")
);
const WatchVideoPage = lazy(() =>
  import("./components/body/MainContainer/watchPage/WatchVideoPage")
);
const PlaylistPage = lazy(() =>
  import("./components/body/MainContainer/playlistPage/PlaylistPage")
);

const ChannelPage = lazy(() =>
  import("./components/body/MainContainer/channelPage/ChannelPage")
);

const PlaylistSection = lazy(() =>
  import("./components/body/MainContainer/channelPage/PlaylistSection")
);

const AboutSection = lazy(() =>
  import("./components/body/MainContainer/channelPage/AboutSection")
);

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
        element: (
          <Suspense fallback={<WatchPageShimmer />}>
            <WatchVideoPage />
          </Suspense>
        ),
      },
      {
        path: "results",
        element: (
          <Suspense fallback={<LoadingSpin />}>
            <SearchResultPage />
          </Suspense>
        ),
      },
      {
        path: "playlist",
        element: (
          <Suspense fallback={<PlaylistPageShimmer />}>
            <PlaylistPage />
          </Suspense>
        ),
      },
      {
        path: "channel/:channelId",
        element: (
          <Suspense fallback={<ChannelPageShimmer />}>
            <ChannelPage />
          </Suspense>
        ),
        children: [
          {
            path: "",
            element: (
              <Suspense fallback={<LoadingSpin top={true} />}>
                <HomeSection />
              </Suspense>
            ),
          },
          {
            path: "playlist",
            element: (
              <Suspense fallback={<LoadingSpin top={true} />}>
                <PlaylistSection />
              </Suspense>
            ),
          },
          {
            path: "about",
            element: (
              <Suspense fallback={<LoadingSpin top={true} />}>
                <AboutSection />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "shorts",
        element: (
          <Suspense fallback={<LoadingSpin />}>
            <ShortsPage />
          </Suspense>
        ),
      },
      {
        path: "subscriptions",
        element: (
          <Suspense fallback={<LoadingSpin />}>
            <SubscriptionsPage />
          </Suspense>
        ),
      },
      {
        path: "library",
        element: (
          <Suspense fallback={<LoadingSpin />}>
            <LibraryPage />
          </Suspense>
        ),
      },
      {
        path: "history",
        element: (
          <Suspense fallback={<LoadingSpin />}>
            <HistoryPage />
          </Suspense>
        ),
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
