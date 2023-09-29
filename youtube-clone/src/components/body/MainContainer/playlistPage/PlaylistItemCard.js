import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MoreSettingIcon from "../../../../assets/icons/svgs/SvgComponents/MoreSettingIcon";
import {
  daysAgo,
  preetifyDuration,
  preetifyViews,
} from "../../../../utils/helper/helper";
import { useSelector } from "react-redux";
import ShimmerRecommendation from "../watchPage/desktopWatchPage/ShimmerRecommendation";

const PlaylistItemCard = ({ item, index }) => {
  const [videoDetails, setVideoDetails] = useState(null);
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  const [isHover, setIsHover] = useState(false);
  console.log(item);
  console.log(item?.contentDetails?.videoId);
  console.log(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cstatus&id=${item?.contentDetails?.videoId}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
  );
  console.log(videoDetails);
  const getVideoData = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cstatus&id=${item?.contentDetails?.videoId}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    );
    console.log(data);
    const json = await data.json();
    setVideoDetails(json?.items[0]);
    console.log(json);
  };
  useEffect(() => {
    getVideoData();
  }, []);

  return (
    <>
      {videoDetails ? (
        <>
          {/* for mobile devices */}
          <div
            className={`w-full h-[90px] md:hidden  cursor-pointer mt-4 flex`}
          >
            <div className={`thumbnail w-[160px]  h-full  relative `}>
              <div className="w-full h-full">
                <Link to={"/watch?v=" + item?.contentDetails?.videoId}>
                  <img
                    className="w-full rounded-lg object-cover"
                    src={item?.snippet?.thumbnails?.medium?.url}
                    alt="thumbnail"
                  />
                </Link>
                <Link to={"/watch?v=" + item?.contentDetails?.videoId}>
                  <div className="duration bg-[rgba(0,0,0,0.8)] rounded text-white h-3 right-1 bottom-1 w-fit flex justify-center items-center absolute px-1 py-2">
                    <span className=" text-xs font-medium tracking-wide">
                      {preetifyDuration(videoDetails?.contentDetails?.duration)}
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            <div className="infoContainer w-[calc(100%-160px)] h-full flex">
              <div className="w-[85%]">
                <Link to={"/watch?v=" + item?.contentDetails?.videoId}>
                  <div
                    className={`title pl-1.5    line-clamp-3  text-sm  font-medium 
       ${darkTheme ? "text-[#f1f1f1]" : "text-[#4e4e4e]"}   `}
                  >
                    {item?.snippet?.title}
                  </div>
                </Link>

                {/* from medium devices */}

                <div
                  className={`channelName pl-1.5  block line-clamp-1 font-medium  mt-1  ${
                    darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
                  }   text-xs `}
                >
                  <Link to={"/channel/" + item?.snippet?.channelId}>{item?.snippet?.channelTitle}</Link>
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
          
          {/* for large devices */}
          <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className={`hidden md:flex w-full  h-[106px]  mb-3  ${
              darkTheme
                ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
            }  rounded-lg flex items-center`}
          >
            <div
              className={`w-9 h-full ${
                darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
              } font-medium text-sm flex justify-center items-center`}
            >
              {index + 1}
            </div>
            <div className={`w-full h-[90px]  cursor-pointer  flex `}>
              <div className={`thumbnail w-[160px]  h-full  relative `}>
                <div className="w-full h-full">
                  <Link to={"/watch?v=" + item?.contentDetails?.videoId}>
                    <img
                      className="w-full rounded-lg object-cover"
                      src={item?.snippet?.thumbnails?.medium?.url}
                      alt="thumbnail"
                    />
                  </Link>
                  <Link to={"/watch?v=" + item?.contentDetails?.videoId}>
                    <div className="duration bg-[rgba(0,0,0,0.8)] rounded text-white h-3 right-1 bottom-1 w-fit flex justify-center items-center absolute px-1 py-2">
                      <span className=" text-xs font-medium tracking-wide">
                        {preetifyDuration(
                          videoDetails?.contentDetails?.duration
                        )}
                      </span>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="infoContainer w-[calc(100%-160px)] h-full flex  justify-between ">
                <div className="w-[calc(100%-44px)] ">
                  <Link to={"/watch?v=" + item?.contentDetails?.videoId}>
                    <div
                      className={`title pl-1.5    line-clamp-3  text-sm  font-medium 
       ${darkTheme ? "text-[#f1f1f1]" : "text-[#4e4e4e]"}   `}
                    >
                      {item?.snippet?.title}
                    </div>
                  </Link>

                  {/* from medium devices */}
                  <div className="flex mt-2.5  line-clamp-1">
                    <div
                      className={`channelName pl-1.5  block line-clamp-1 font-medium    ${
                        darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
                      }   text-xs `}
                    >
                      <Link to={"/channel/" + item?.snippet?.channelId}>{item?.snippet?.channelTitle}</Link>
                    </div>
                    <div
                      className={`mx-1 ${
                        darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
                      } font-medium text-xs`}
                    >
                      •
                    </div>
                    <div
                      className={`viewCount pl-1.5  ${
                        darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
                      } font-medium text-xs `}
                    >
                      <Link to={"/watch?v=" + item?.id?.videoId}>
                        {preetifyViews(videoDetails?.statistics?.viewCount) +
                          " views"}
                      </Link>
                    </div>
                    <div
                      className={`mx-1 ${
                        darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
                      } font-medium text-xs`}
                    >
                      •
                    </div>
                    <div
                      className={`daysago  ${
                        darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
                      } font-medium text-xs`}
                    >
                      <Link to={"/watch?v=" + item?.id?.videoId}>
                        {daysAgo(item?.snippet?.publishedAt)}
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="w-10  flex justify-center self-center">
                  {isHover ? (
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className={`rounded-full px-[5px]   py-[5px]  h-9 cursor-pointer ${
                        darkTheme
                          ? "active:bg-[#ffffff1a]"
                          : "active:bg-[#f2f2f2]"
                      } `}
                    >
                      <MoreSettingIcon color={darkTheme ? "#fff" : "#000"} />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <ShimmerRecommendation />
      )}
    </>
  );
};

export default PlaylistItemCard;
