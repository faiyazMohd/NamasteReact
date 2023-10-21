import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import PlaylistDescription from "./PlaylistDescription";
import PlaylistItemCard from "./PlaylistItemCard";
import ShimmerRecommendation from "../watchPage/desktopWatchPage/ShimmerRecommendation";
import { modifyPlaylistName } from "../../../../utils/store/contentSlice";
import ShimmerVideoInfo from "../watchPage/desktopWatchPage/ShimmerVideoInfo";

const PlaylistPage = () => {
  const [searchParams] = useSearchParams();
  const playlistId = searchParams.get("list");
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  const showSidebar = useSelector((store) => store.app.showSidebar);

  const [playlistItems, setPlaylistItems] = useState(null);
  const [playlistDetails, setPlaylistDetails] = useState(null);
  const [showPlaylistDesc, setShowPlaylistDesc] = useState(false);
  const dispatch = useDispatch();
  const getPlaylistItemsData = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cstatus&maxResults=50&playlistId=${playlistId}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    );
    const json = await data.json();
    setPlaylistItems(json);
    console.log(json);
  };
  const getPlaylistData = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails%2Cstatus&id=${playlistId}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    );
    const json = await data.json();
    dispatch(modifyPlaylistName(json?.items[0]?.snippet?.title));
    document.title = json?.items[0]?.snippet?.title + " - YouTube";
    setPlaylistDetails(json?.items[0]);
    console.log(json);
  };
  useEffect(() => {
    getPlaylistData();
    getPlaylistItemsData();
  }, [playlistId]);
  return (
    <>
      {/* for small devices */}
      <div
        className={`playlistPageMobile md:hidden w-full min-h-screen  pb-16  ${
          darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
        } `}
      >
        {playlistDetails ? (
          <>
            <div className="w-full h-[120vw] sm:h-[95vw]  relative text-white">
              <div
                className={`w-full h-full ${
                  darkTheme ? "" : "overflow-hidden"
                } `}
              >
                <img
                  className={`w-[200%]   ${
                    darkTheme
                      ? "opacity-70 blur-[30px] brightness-[65%] "
                      : "opacity-80 blur-[30px] brightness-[65%] scale-125"
                  }   h-full `}
                  src={playlistDetails?.snippet?.thumbnails?.medium?.url}
                  alt=""
                />
              </div>
              <div className="w-[92%]  mt-5 m-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-full h-[52vw] ">
                  <img
                    className="w-full h-full object-cover rounded-xl"
                    src={playlistDetails?.snippet?.thumbnails?.medium?.url}
                    alt=""
                  />
                </div>
                <div className="playlistTitle w-full  text-2xl font-bold mt-3 line-clamp-2">
                  {playlistDetails?.snippet?.title}
                </div>
                <div className="playlistTitle w-full  text-base font-medium mt-3 line-clamp-1">
                  <Link to={"/channel/" + playlistDetails?.snippet?.channelId}>
                    {playlistDetails?.snippet?.channelTitle}
                  </Link>
                </div>
                <div className="mt-1 w-full flex gap-2">
                  <div className={` font-medium text-[#d5d2d2] text-sm`}>
                    {playlistDetails?.contentDetails?.itemCount + " videos"}
                  </div>
                  <div className={` font-medium text-[#d5d2d2] text-sm`}>
                    published on &nbsp;
                    {new Date(
                      playlistDetails?.snippet?.publishedAt
                    ).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </div>
                </div>

                {playlistDetails?.snippet?.description?.length > 110 ? (
                  <div className="playlistDescription mt-3 w-full flex">
                    <pre className="text-sm font-sans line-clamp-2 whitespace-pre-wrap">
                      {playlistDetails?.snippet?.description?.slice(0, 110)}
                    </pre>
                    <span
                      className={`font-medium text-sm self-end ml-1 ${
                        darkTheme
                          ? " active:bg-[#575656]"
                          : "  active:bg-[#e5e3e3]"
                      }}  `}
                      onClick={() => setShowPlaylistDesc(true)}
                    >
                      ...more
                    </span>
                  </div>
                ) : (
                  <div className="playlistDescription mt-3 w-full flex">
                    <pre className="text-sm font-sans line-clamp-2 whitespace-pre-wrap">
                      {playlistDetails?.snippet?.description}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="w-full h-[120vw]  relative text-white">
            <div className="w-[92%] mt-5 m-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div
                className={`w-full h-[52vw] ${
                  darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
                }    animate-pulse rounded-xl`}
              ></div>
              <ShimmerVideoInfo />
            </div>
          </div>
        )}

        <div
          className={`w-full z-10  ${
            darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
          }`}
        >
          {playlistItems ? (
            <div className={`playlistItemsContainer  mt-5   w-[92%] m-auto`}>
              {playlistItems.items?.map((item) => {
                return (
                  <PlaylistItemCard
                    key={item.contentDetails?.videoId}
                    item={item}
                  />
                );
              })}
            </div>
          ) : (
            <div className="w-[95%] m-auto">
              {Array(10)
                .fill("")
                .map((shimmer, index) => {
                  return <ShimmerRecommendation key={index} />;
                })}
            </div>
          )}
        </div>
      </div>

      {/* for large devices */}
      <div
        className={`playlistPageDesktop  hidden md:flex w-full ${
          showSidebar ? "xl:w-[88%]" : ""
        } min-h-screen pl-16  justify-end  ${
          darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
        } `}
      >
        {playlistDetails ? (
          <>
            <div
              className={`w-[360px]  h-[83vh]  text-white rounded-xl fixed lg:top-20 xl:top-24   
            ${
              showSidebar ? "xl:left-[20%] 2xl:left-[17%]" : "left-24"
            }  overflow-y-auto`}
            >
              {/* <div className=" relative w-full h-full text-white "> */}
              <div
                className={`w-full h-full overflow-hidden sticky top-0 right-0 left-0 bottom-0 `}
              >
                <img
                  className={`w-[200%]   ${
                    darkTheme
                      ? "opacity-70 blur-[30px] brightness-[85%] scale-125"
                      : "opacity-90 blur-[30px] brightness-[65%] scale-125"
                  }   h-full `}
                  src={playlistDetails?.snippet?.thumbnails?.medium?.url}
                  alt=""
                />
              </div>
              <div className="w-[88%]  m-auto absolute top-5 left-1/2 -translate-x-1/2 ">
                <div className="w-full h-[175.5px] ">
                  <img
                    className="w-full h-full object-cover rounded-xl"
                    src={playlistDetails?.snippet?.thumbnails?.medium?.url}
                    alt=""
                  />
                </div>
                <div className="playlistTitle w-full  text-2xl font-bold mt-3 line-clamp-2">
                  {playlistDetails?.snippet?.title}
                </div>
                <div className="playlistTitle w-full  text-base font-medium mt-3 line-clamp-1">
                  <Link to={"/channel/" + playlistDetails?.snippet?.channelId}>
                    {playlistDetails?.snippet?.channelTitle}
                  </Link>
                </div>
                <div className="mt-1 w-full flex gap-2">
                  <div className={` font-medium text-[#d5d2d2] text-sm`}>
                    {playlistDetails?.contentDetails?.itemCount + " videos"}
                  </div>
                  <div className={` font-medium text-[#d5d2d2] text-sm`}>
                    published on &nbsp;
                    {new Date(
                      playlistDetails?.snippet?.publishedAt
                    ).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </div>
                </div>
                <div className="playlistDescription my-3 w-full flex">
                  <pre className="text-sm font-sans  whitespace-pre-wrap">
                    {playlistDetails?.snippet?.description}
                  </pre>
                </div>
              </div>
              {/* </div> */}
            </div>
          </>
        ) : (
          <div
            className={`w-[360px]  h-[83vh] text-white rounded-xl fixed lg:top-20 xl:top-24 ${
              showSidebar ? "xl:left-[20%] 2xl:left-[17%]" : "left-24"
            }   overflow-y-auto`}
          >
            <div className="w-[95%]  m-auto absolute top-0 left-1/2 -translate-x-1/2">
              <div
                className={`w-full h-[175.5px] ${
                  darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
                }    animate-pulse rounded-xl`}
              ></div>
              <ShimmerVideoInfo />
            </div>
          </div>
        )}
        {/* <div className="w-[360px] h-[83vh] rounded-xl fixed top-24  left-24 bg-red-500"></div> */}
        <div className="w-[calc(100%-455px)] min-h-screen mt-16 lg:mt-20 xl:mt-24 mr-8  ">
          {playlistItems ? (
            <div className={`playlistItemsContainer  w-full`}>
              {playlistItems.items?.map((item, index) => {
                return (
                  <PlaylistItemCard
                    key={item.contentDetails?.videoId}
                    index={index}
                    item={item}
                  />
                );
              })}
            </div>
          ) : (
            Array(10)
              .fill("")
              .map((shimmer, index) => {
                return <ShimmerRecommendation key={index} />;
              })
          )}
        </div>
      </div>

      {showPlaylistDesc ? (
        <PlaylistDescription
          description={playlistDetails?.snippet?.description}
          setShowPlaylistDesc={setShowPlaylistDesc}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default PlaylistPage;
