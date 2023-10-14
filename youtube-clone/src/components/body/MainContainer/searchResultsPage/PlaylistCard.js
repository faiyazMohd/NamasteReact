import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ShimmerRecommendation from "../watchPage/desktopWatchPage/ShimmerRecommendation";
import { Link, useLocation } from "react-router-dom";
import ShimmerVideoCard from "../videosContainer/ShimmerVideoCard";
import {
  daysAgo,
  preetifyDuration,
  preetifyViews,
} from "../../../../utils/helper/helper";
import MoreSettingIcon from "../../../../assets/icons/svgs/SvgComponents/MoreSettingIcon";
import PlaylistIcon from "../../../../assets/icons/svgs/SvgComponents/PlaylistIcon";
import PlayIcon from "../../../../assets/icons/svgs/SvgComponents/PlayIcon";

const PlaylistCard = ({ item }) => {
  const [playlistItems, setPlaylistItems] = useState(null);
  const [isHover, setIsHover] = useState(false);
  console.log(item);
  const darkTheme = useSelector((store) => store.theme.darkTheme);

  const path = useLocation();

  const getPlaylistItemsData = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cstatus&maxResults=50&playlistId=${item?.id?.playlistId}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    );
    const json = await data.json();
    setPlaylistItems(json);
    console.log(json);
  };
  const getPlaylistData = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails%2Cstatus&id=${item?.id?.playlistId}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    );
    const json = await data.json();
    // setPlaylistDetails(json?.items[0]);
    console.log(json);
  };
  useEffect(() => {
    getPlaylistData();
    getPlaylistItemsData();
  }, [item?.id?.playlistId]);
  return playlistItems ? (
    <>
      {/* for small to medium devices */}
      <div className={`w-full md:hidden  mt-3    cursor-pointer `}>
        <div className={`thumbnail w-full h-[56vw]   `}>
          <div className="relative w-full h-full">
            <Link to={"/playlist?list=" + item?.id?.playlistId} className="w-full h-full">
              <img
                className="w-full h-full   object-cover"
                src={item?.snippet?.thumbnails?.medium?.url}
                alt="thumbnail"
                srcset=""
              />
            </Link>
            <div className="w-full h-6  bg-[#000000] flex justify-between items-center bg-opacity-60 text-white right-0 left-0 absolute bottom-0">
              <div className="ml-3">
                <PlaylistIcon color={"#fff"} />
              </div>
              <div className="text-xs mr-3 font-medium">
                {playlistItems?.pageInfo?.totalResults}
                {" videos"}
              </div>
            </div>
          </div>
        </div>

        <div className="infoContainer my-2 mt-3 flex w-full">
          <div className="w-[90%] ">
            <Link to={"/playlist?list=" + item?.id?.playlistId}>
              <div
                className={`title ml-3 text-base leading-5  line-clamp-2 md:text-base font-medium 
           ${darkTheme ? "text-[#f1f1f1]" : "text-[#4e4e4e]"}   `}
              >
                {item.snippet.title}
              </div>
            </Link>
            {/* for small divice */}
            <div className="line-clamp-2  pl-3 md:hidden w-full mt-1">
              <Link to={"/channel/" + item?.snippet?.channelId}>
                <div
                  className={`leading-4  line-clamp-2 ${
                    darkTheme ? "text-[#969696]" : "text-[#737373]"
                  }  text-[.8rem]`}
                >
                  {item?.snippet?.channelTitle}
                </div>
              </Link>
            </div>
          </div>

          {/* for small devices */}
          <div className="  md:hidden w-[10%]   overflow-visible">
            <div
              className={`rounded-full p-[3px]  ${
                darkTheme ? "active:bg-[#ffffff1a]" : "active:bg-[#f2f2f2]"
              } `}
            >
              <MoreSettingIcon color={darkTheme ? "#fff" : "#000"} />
            </div>
          </div>
        </div>
      </div>

      {/* from large divices */}
      <div
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
        className={`  md:w-full  lg:w-[1024px] xl:w-[1096px] h-[206px]  hidden cursor-pointer mt-3 md:flex justify-between items-center`}
      >
        <div className="thumbnailContainer md:w-[360px] xl:w-[384px] h-full flex flex-col items-center justify-center">
          <div className={`thumbnail md:w-[360px] h-[202px]   `}>
            <div className=" relative w-full h-full">
              <Link to={"/playlist?list=" + item?.id?.playlistId} className="w-full h-full"> 
                <img
                  className="w-full h-full rounded-lg object-cover"
                  src={item?.snippet?.thumbnails?.medium?.url}
                  alt="thumbnail"
                  srcset=""
                />
              </Link>
              <div className="w-full h-6 bg-[#000000] rounded-b-lg flex justify-between items-center bg-opacity-60 text-white right-0 left-0 absolute bottom-0">
                <div className="ml-3">
                  <PlaylistIcon color={"#fff"} />
                </div>
                <div className="text-xs mr-3 font-medium">
                  {playlistItems?.pageInfo?.totalResults}
                  {" videos"}
                </div>
              </div>
              {isHover ? (
                <Link to={"/playlist?list=" + item?.id?.playlistId}>
                  <div className="w-full h-full bg-[#000000] bg-opacity-60  rounded-b-lg flex justify-center items-center   text-white right-0 left-0 absolute bottom-0">
                    <div className="flex gap-1">
                      <PlayIcon color={"#fff"} />
                      <div className="font-medium text-sm uppercase">
                        View full playlist
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <div className="infoContainer  md:w-[calc(100%-370px)]  xl:w-[720px] h-full flex">
          <div className="w-full">
            <div className="w-full mt-1 flex justify-between">
              <div className="w-full">
                <Link to={"/playlist?list=" + item?.id?.playlistId}>
                  <div
                    className={`title    line-clamp-2 text-lg  font-medium 
       ${darkTheme ? "text-[#f1f1f1]" : "text-[#4e4e4e]"}   `}
                  >
                    {item.snippet.title}
                  </div>
                </Link>
              </div>
            </div>

            <div
              className={`channelName w-full  block line-clamp-1 font-medium  my-1  ${
                darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
              }   text-xs flex gap-3 items-center`}
            >
              <Link to={"/channel/" + item?.snippet?.channelId}>
                {item?.snippet?.channelTitle}
              </Link>
            </div>
            <div
              className={`channelName   line-clamp-1  font-medium  mt-3  text-xs `}
            >
              <Link to={"/playlist?list=" + item?.id?.playlistId}>
                <div className="w-full">
                  {playlistItems?.items[0]?.snippet?.title}
                </div>
              </Link>
            </div>
            <div
              className={`channelName   line-clamp-1  font-medium  mt-2  text-xs `}
            >
              <Link to={"/playlist?list=" + item?.id?.playlistId}>
                {playlistItems?.items[1] ? (
                  <div className="w-full">
                    {playlistItems?.items[1]?.snippet?.title}
                  </div>
                ) : (
                  ""
                )}
              </Link>
            </div>
            <div className="w-full mt-3">
              <Link to={"/playlist?list=" + item?.id?.playlistId}>
                <div
                  className={`title uppercase  text-xs  
                  ${
                    darkTheme
                      ? "text-[#a4a3a3] hover:text-white"
                      : "text-[#737373] hover:text-black"
                  }   `}
                >
                  View full playlist
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <ShimmerVideoCard />
  );
};

export default PlaylistCard;
