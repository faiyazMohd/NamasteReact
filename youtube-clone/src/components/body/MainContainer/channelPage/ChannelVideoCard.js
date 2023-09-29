import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MoreSettingIcon from "../../../../assets/icons/svgs/SvgComponents/MoreSettingIcon";
import {
  daysAgo,
  preetifyDuration,
  preetifyViews,
} from "../../../../utils/helper/helper";
import { useSelector } from "react-redux";

const ChannelVideoCard = ({ item }) => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  const [videoDetails, setVideoDetails] = useState(null);
  const [isHoverTitle, setIsHoverTitle] = useState(false);
  const [isHoverThumbnail, setIsHoverThumbnail] = useState(false);
  const [timer, setTimer] = useState(null);
  const showSidebar = useSelector((store) => store.app.showSidebar);

  console.log(item);
  const getVideoData = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cstatus&id=${item?.contentDetails?.videoId}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    );
    const json = await data.json();
    setVideoDetails(json?.items[0]);
    console.log(json);
  };
  useEffect(() => {
    getVideoData();
  }, []);
  return videoDetails ? (
    <>
    {/* small devices */}
      <div className={`w-full h-[90px] md:hidden  cursor-pointer mt-4 flex`}>
        <div className={`thumbnail w-[160px]  h-full  relative `}>
          <div className="w-full h-full">
            <Link to={"/watch?v=" + item?.contentDetails?.videoId}>
              <img
                className="w-full rounded-lg object-cover"
                src={item?.snippet?.thumbnails?.medium?.url}
                alt="thumbnail"
              />
            </Link>
            {videoDetails ? (
              <Link to={"/watch?v=" + item?.contentDetails?.videoId}>
                <div className="duration bg-[rgba(0,0,0,0.8)] rounded text-white h-3 right-1 bottom-1 w-fit flex justify-center items-center absolute px-1 py-2">
                  <span className=" text-xs font-medium tracking-wide">
                    {preetifyDuration(videoDetails?.contentDetails?.duration)}
                  </span>
                </div>
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="infoContainer w-[calc(100%-160px)] h-full flex">
          <div className="w-[85%]">
            <Link to={"/watch?v=" + item?.contentDetails?.videoId}>
              <div
                className={`title pl-1.5    line-clamp-3  text-sm   font-medium 
${darkTheme ? "text-[#f1f1f1]" : "text-[#4e4e4e]"}   `}
              >
                {item?.snippet?.title}
              </div>
            </Link>

            <div
              className={`pl-1.5  line-clamp-1 font-medium  mt-1  ${
                darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
              }   text-xs flex`}
            >
              <div
                className={`viewCount   ${
                  darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
                } font-medium text-xs `}
              >
                <Link to={"/watch?v=" + item?.contentDetails?.videoId}>
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
                <Link to={"/watch?v=" + item?.contentDetails?.videoId}>
                  {daysAgo(item?.snippet?.publishedAt)}
                </Link>
              </div>
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
        className={`w-full   md:w-[23%]  2xl:w-[23.69%] hidden md:block   cursor-pointer `}
      >
        <div
          onMouseEnter={() => {
            setTimer(
              setTimeout(() => {
                setIsHoverThumbnail(true);
              }, 1000)
            );
          }}
          onMouseLeave={() => {
            clearTimeout(timer);
            setIsHoverThumbnail(false);
          }}
          className={`thumbnail w-full   md:h-[10.4vw]  ${
            showSidebar
              ? "xl:h-[9vw] 2xl:h-[9vw]"
              : "xl:h-[10.6vw] 2xl:h-[10.5vw]"
          } relative `}
        >
          {isHoverThumbnail ? (
            <div className="w-full h-full hidden md:block">
              <iframe
                className="w-full h-full rounded-xl"
                src={
                  "https://www.youtube-nocookie.com/embed/" +
                  item?.contentDetails?.videoId +
                  "?autoplay=1&mute=1"
                }
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          ) : (
            <div className="hidden md:block">
              <Link to={"watch?v=" + item?.contentDetails?.videoId}>
                <img
                  className="w-full h-fit  sm:rounded-xl object-cover"
                  src={item?.snippet?.thumbnails?.medium?.url}
                  alt="thumbnail"
                  srcset=""
                />
              </Link>
              <Link to={"watch?v=" + item?.contentDetails?.videoId}>
                <div className="duration bg-[rgba(0,0,0,0.8)] rounded text-white h-3 right-1 bottom-1.5 w-fit flex justify-center items-center absolute px-1.5 py-2">
                  <span className=" text-xs font-medium tracking-wide">
                    {preetifyDuration(videoDetails?.contentDetails?.duration)}
                  </span>
                </div>
              </Link>
            </div>
          )}
        </div>

        <div
          onMouseOver={() => setIsHoverTitle(true)}
          onMouseOut={() => setIsHoverTitle(false)}
          className="infoContainer my-2 mt-3 flex"
        >
          <div className="w-[80%] md:w-[80%] ">
            <Link to={"watch?v=" + item?.contentDetails?.videoId}>
              <div
                className={`title ml-3 text-base leading-5  line-clamp-2 md:text-base font-medium 
           ${darkTheme ? "text-[#f1f1f1]" : "text-[#4e4e4e]"}   `}
              >
                {item?.snippet?.title}
              </div>
            </Link>

            {/* from medium devices */}

            <div className="viewsContainer  hidden md:flex">
              <div
                className={`viewCount ml-3 ${
                  darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
                } font-medium text-[.9rem] `}
              >
                <Link to={"watch?v=" + item?.contentDetails?.videoId}>
                  {preetifyViews(videoDetails?.statistics?.viewCount) +
                    " views"}
                </Link>
              </div>
              <div
                className={`mx-1 ${
                  darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
                } font-medium text-[.9rem]`}
              >
                •
              </div>
              <div
                className={`daysago  ${
                  darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
                } font-medium text-[.9rem]`}
              >
                <Link to={"watch?v=" + item?.contentDetails?.videoId}>
                  {daysAgo(item?.snippet?.publishedAt)}
                </Link>
              </div>
            </div>
          </div>
          {/* from medium devices */}
          <div className="hidden md:block w-[8%] md:w-[10%] overflow-visible">
            {isHoverTitle && (
              <div
                onClick={(e) => e.stopPropagation()}
                className={`rounded-full px-[6px]   py-[5px] cursor-pointer ${
                  darkTheme ? "active:bg-[#ffffff1a]" : "active:bg-[#f2f2f2]"
                } `}
              >
                <MoreSettingIcon color={darkTheme ? "#fff" : "#000"} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  ) : (
    ""
  );
};

export default ChannelVideoCard;
