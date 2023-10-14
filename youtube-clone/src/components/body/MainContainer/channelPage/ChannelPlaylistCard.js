import React, { useEffect, useState } from "react";
import MoreSettingIcon from "../../../../assets/icons/svgs/SvgComponents/MoreSettingIcon";
import ShimmerRecommendation from "../watchPage/desktopWatchPage/ShimmerRecommendation";
import {
  daysAgo,
  preetifyDuration,
  preetifyViews,
} from "../../../../utils/helper/helper";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ShimmerVideoCard from "../videosContainer/ShimmerVideoCard";
import PlaylistIcon from "../../../../assets/icons/svgs/SvgComponents/PlaylistIcon";
import PlayIcon from "../../../../assets/icons/svgs/SvgComponents/PlayIcon";

const ChannelPlaylistCard = ({ item }) => {
  const [playlistItems, setPlaylistItems] = useState(null);
  const [isHover, setIsHover] = useState(false);
  console.log(item);
  console.log(item?.snippet?.thumbnails?.medium?.url);
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  const showSidebar = useSelector((store) => store.app.showSidebar);
  const path = useLocation();

  return (
    <>
      {/* for small to medium devices */}

      <div className={`w-full h-[90px] md:hidden  cursor-pointer mt-4 flex`}>
        <div className={`thumbnail w-[160px]  h-full  relative `}>
          <div className="relative w-full h-full">
            <Link to={"/playlist?list=" + item?.id} className="w-full h-full">
              <img
                className="w-full h-full rounded-lg  object-cover"
                src={item?.snippet?.thumbnails?.medium?.url}
                alt="thumbnail"
                srcset=""
              />
            </Link>
            <div className="w-full h-6  bg-[#000000] flex justify-center items-center bg-opacity-60 text-white right-0 left-0 absolute bottom-0">
              <div className="ml-3">
                <PlaylistIcon color={"#fff"} />
              </div>
              <div className="text-xs mr-3 font-medium">
                {item?.contentDetails?.itemCount}
              </div>
            </div>
          </div>
        </div>

        <div className="infoContainer w-[calc(100%-160px)] h-full flex">
          <div className="w-[85%]">
            <Link to={"/playlist?list=" + item?.id}>
              <div
                className={`title pl-1.5    line-clamp-3  text-sm  font-medium 
       ${darkTheme ? "text-[#f1f1f1]" : "text-[#4e4e4e]"}   `}
              >
                {item?.snippet?.title}
              </div>
            </Link>

            <div
              className={`channelName pl-1.5  block line-clamp-1 font-medium  mt-1  ${
                darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
              }   text-xs `}
            >
              <Link to={""}>{item?.snippet?.channelTitle}</Link>
            </div>
          </div>

          {/* from medium devices */}
          <div className="w-[15%] flex justify-center ">
            <div
              onClick={(e) => e.stopPropagation()}
              className={`rounded-full px-[5px]   py-[5px]  h-9 cursor-pointer ${
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
        className={`w-full  md:w-[23%]  2xl:w-[23.69%] hidden md:flex md:flex-col   cursor-pointer `}
      >
        <div
          className={`thumbnail w-full   md:h-[10.4vw]  ${
            showSidebar
              ? "xl:h-[9vw] 2xl:h-[9vw]"
              : "xl:h-[10.6vw] 2xl:h-[10.5vw]"
          } relative `}
        >
          {/* <div className={`thumbnail md:w-[360px] h-[202px]   `}> */}
          <div className="w-full h-full relative">
            <Link to={"/playlist?list=" + item?.id} className="w-full h-full">
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
                {item?.contentDetails?.itemCount}
                {" videos"}
              </div>
            </div>
            {isHover ? (
              <Link to={"/playlist?list=" + item?.id}>
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
          {/* </div> */}
        </div>

        <div className="infoContainer w-full h-full flex">
          <div className="w-full">
            <div className="w-full mt-1 flex justify-between">
              <div className="w-full">
                <Link to={"/playlist?list=" + item?.id}>
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
              <Link to={""}>{item?.snippet?.channelTitle}</Link>
            </div>
            <div className="w-full mt-1">
              <Link to={"/playlist?list=" + item?.id}>
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
  );
};

export default ChannelPlaylistCard;
