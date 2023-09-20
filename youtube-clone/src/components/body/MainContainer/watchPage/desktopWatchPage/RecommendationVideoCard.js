import React, { useEffect, useState } from "react";
import MoreSettingIcon from "../../../../../assets/icons/svgs/SvgComponents/MoreSettingIcon";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  daysAgo,
  preetifyDuration,
  preetifyViews,
} from "../../../../../utils/helper/helper";
import ShimmerRecommendation from "./ShimmerRecommendation";

const RecommendationVideoCard = ({ item }) => {
  const [videoDetails, setVideoDetails] = useState(null);
  const [isHover, setIsHover] = useState(false);
  const [isHoverThumbnail, setIsHoverThumbnail] = useState(false);
  const [channelDetails, setchannelDetails] = useState([]);
  const [timer, setTimer] = useState(null);

  const path = useLocation();
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  // console.log(item);
  // console.log(item?.snippet?.thumbnails?.medium?.url);
  const getVideoData = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cstatus&id=${item?.id?.videoId}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    );
    const json = await data.json();
    setVideoDetails(json?.items[0]);
    console.log(json);
  };
  const channelImgUrl =
    "https://yt3.ggpht.com/D8uGTY8fLYo42IK9S_ahqO2u9NAkWEdbAswFM-OcCVNHVmgo0lYx0Pgq6WimdNvxDbw31U-6cA=s88-c-k-c0x00ffffff-no-nd-rj";
  // const channelImgUrl = channelDetails?.snippet?.thumbnails?.default?.url
  // console.log(item);
  const getChannelData = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CtopicDetails%2Cstatus%2CcontentDetails%2Clocalizations%2Cstatistics%2CtopicDetails%2CbrandingSettings%2CcontentOwnerDetails&id=${item?.snippet?.channelId}&key=` +
        process.env.REACT_APP_GOOGLE_API_KEY
    );
    const json = await data.json();
    console.log(json);
    setchannelDetails(json.items[0]);
  };
  useEffect(() => {
    // getChannelData();
    getVideoData();
  }, []);

  return videoDetails ? (
    <>
      {/* for small to medium devices */}
      {path.pathname === "/results" ? (
        <div
          onMouseOver={() => setIsHover(true)}
          onMouseOut={() => setIsHover(false)}
          className={`w-full md:hidden mt-5    cursor-pointer `}
        >
          <div className={`thumbnail w-full h-[56vw]  relative `}>
            <div className=" md:hidden">
              <Link to={"watch?v=" + item?.id?.videoId}>
                <img
                  className="w-full h-fit   object-cover"
                  src={item?.snippet?.thumbnails?.medium?.url}
                  alt="thumbnail"
                  srcset=""
                />
              </Link>
              <Link to={"watch?v=" + item?.id?.videoId}>
                <div className="duration bg-[rgba(0,0,0,0.8)] rounded text-white h-3 right-2 md:right-1  bottom-1  md:bottom-1.5 w-fit flex justify-center items-center absolute px-1.5 py-2">
                  <span className=" text-xs font-medium tracking-wide">
                    {preetifyDuration(videoDetails?.contentDetails?.duration)}
                  </span>
                </div>
              </Link>
            </div>
          </div>

          <div className="infoContainer my-2 mt-3 flex">
            <div className="channelImg pt-1 flex justify-end items-start md:block w-[12%]  md:w-[10%]">
              <Link to={"watch?v=" + item?.id?.videoId}>
                <img
                  className="w-10 rounded-full"
                  src={channelImgUrl}
                  alt="channelName"
                  srcset=""
                />
              </Link>
            </div>
            <div className="w-[80%] md:w-[80%] ">
              <Link to={"watch?v=" + item?.id?.videoId}>
                <div
                  className={`title ml-3 text-base leading-5  line-clamp-2 md:text-base font-medium 
           ${darkTheme ? "text-[#f1f1f1]" : "text-[#4e4e4e]"}   `}
                >
                  {item.snippet.title}
                </div>
              </Link>
              {/* for small divice */}
              <div className="line-clamp-2  pl-3 md:hidden w-full mt-1">
                <Link to={"watch?v=" + item?.id?.videoId}>
                  <div
                    className={`leading-4  line-clamp-2 ${
                      darkTheme ? "text-[#969696]" : "text-[#737373]"
                    }  text-[.8rem]`}
                  >
                    {item?.snippet?.channelTitle} •{" "}
                    {preetifyViews(videoDetails?.statistics?.viewCount) +
                      " views"}{" "}
                    • {daysAgo(item?.snippet?.publishedAt)}
                  </div>
                </Link>
              </div>
            </div>

            {/* for small devices */}
            <div className="  md:hidden w-[8%] md:w-[10%] overflow-visible">
              <div
                className={`rounded-full p-[3px]  ${
                  darkTheme ? "active:bg-[#ffffff1a]" : "active:bg-[#f2f2f2]"
                } `}
              >
                <MoreSettingIcon color={darkTheme ? "#fff" : "#000"} />
              </div>
            </div>
            {/* from medium devices */}
            <div className="hidden md:block w-[8%] md:w-[10%] overflow-visible">
              {isHover && (
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
      ) : (
        <div
          onMouseOver={() => setIsHover(true)}
          onMouseOut={() => setIsHover(false)}
          className={`w-full md:hidden  sm:w-[43%] mt-5    cursor-pointer `}
        >
          <div className={`thumbnail w-full h-[56vw] sm:h-[25.5vw] relative `}>
            <div className=" md:hidden">
              <Link to={"watch?v=" + item?.id?.videoId}>
                <img
                  className="w-full h-fit  sm:rounded-xl object-cover"
                  src={item?.snippet?.thumbnails?.medium?.url}
                  alt="thumbnail"
                  srcset=""
                />
              </Link>
              <Link to={"watch?v=" + item?.id?.videoId}>
                <div className="duration bg-[rgba(0,0,0,0.8)] rounded text-white h-3 right-2 md:right-1  bottom-1  md:bottom-1.5 w-fit flex justify-center items-center absolute px-1.5 py-2">
                  <span className=" text-xs font-medium tracking-wide">
                    {preetifyDuration(videoDetails?.contentDetails?.duration)}
                  </span>
                </div>
              </Link>
            </div>
          </div>

          <div className="infoContainer my-2 mt-3 flex">
            <div className="channelImg pt-1 flex justify-end items-start md:block w-[12%]  md:w-[10%]">
              <Link to={"watch?v=" + item?.id?.videoId}>
                <img
                  className="w-10 rounded-full"
                  src={channelImgUrl}
                  alt="channelName"
                  srcset=""
                />
              </Link>
            </div>
            <div className="w-[80%] md:w-[80%] ">
              <Link to={"watch?v=" + item?.id?.videoId}>
                <div
                  className={`title ml-3 text-base leading-5  line-clamp-2 md:text-base font-medium 
           ${darkTheme ? "text-[#f1f1f1]" : "text-[#4e4e4e]"}   `}
                >
                  {item.snippet.title}
                </div>
              </Link>
              {/* for small divice */}
              <div className="line-clamp-2  pl-3 md:hidden w-full mt-1">
                <Link to={"watch?v=" + item?.id?.videoId}>
                  <div
                    className={`leading-4  line-clamp-2 ${
                      darkTheme ? "text-[#969696]" : "text-[#737373]"
                    }  text-[.8rem]`}
                  >
                    {item?.snippet?.channelTitle} •{" "}
                    {preetifyViews(videoDetails?.statistics?.viewCount) +
                      " views"}{" "}
                    • {daysAgo(item?.snippet?.publishedAt)}
                  </div>
                </Link>
              </div>
            </div>

            {/* for small devices */}
            <div className="  md:hidden w-[8%] md:w-[10%] overflow-visible">
              <div
                className={`rounded-full p-[3px]  ${
                  darkTheme ? "active:bg-[#ffffff1a]" : "active:bg-[#f2f2f2]"
                } `}
              >
                <MoreSettingIcon color={darkTheme ? "#fff" : "#000"} />
              </div>
            </div>
            {/* from medium devices */}
            <div className="hidden md:block w-[8%] md:w-[10%] overflow-visible">
              {isHover && (
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
      )}

      {/* from large devices */}
      {path.pathname === "/results" ? (
        <div
          onMouseEnter={() => {
            setIsHover(true);
            setTimer(
              setTimeout(() => {
                setIsHoverThumbnail(true);
              }, 1000)
            );
          }}
          onMouseLeave={() => {
            setIsHover(false);
            setIsHoverThumbnail(false);
            clearTimeout(timer);
          }}
          className={`  md:w-full  lg:w-[1024px] xl:w-[1096px]  h-[206px]  hidden cursor-pointer mt-3 md:flex justify-between items-center`}
        >
          <div className="thumbnailContainer md:w-[360px] xl:w-[384px]  h-full flex flex-col items-center justify-center">
            <div className={`thumbnail md:w-[360px] h-[202px]  relative `}>
              {isHoverThumbnail ? (
                <div className="w-full h-full hidden md:block">
                  <iframe
                    className="w-full h-full"
                    src={
                      "https://www.youtube-nocookie.com/embed/" +
                      item?.id?.videoId +
                      "?autoplay=1&mute=1"
                    }
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
              ) : (
                <div className="w-full h-full">
                  <Link to={"/watch?v=" + item?.id?.videoId}>
                    <img
                      className="w-full rounded-lg object-cover"
                      src={item?.snippet?.thumbnails?.medium?.url}
                      alt="thumbnail"
                      srcset=""
                    />
                  </Link>
                  <Link to={"/watch?v=" + item?.id?.videoId}>
                    <div className="duration bg-[rgba(0,0,0,0.8)] rounded text-white h-3 right-1 bottom-1 w-fit flex justify-center items-center absolute px-1 py-2">
                      <span className=" text-xs font-medium tracking-wide">
                        {preetifyDuration(
                          videoDetails?.contentDetails?.duration
                        )}
                      </span>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className="infoContainer md:w-[calc(100%-370px)]  xl:w-[720px] h-full flex">
            <div className="w-full">
              <div className="w-full mt-1 flex justify-between">
                <div className="md:w-[85%] xl:w-[672px]">
                  <Link to={"/watch?v=" + item?.id?.videoId}>
                    <div
                      className={`title    line-clamp-2 text-lg  font-medium 
       ${darkTheme ? "text-[#f1f1f1]" : "text-[#4e4e4e]"}   `}
                    >
                      {item.snippet.title}
                    </div>
                  </Link>
                </div>
                <div className="w-8 h-8  mr-1">
                  <div className=" flex justify-center ">
                    {isHover && (
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className={`rounded-full p-[8px]  cursor-pointer ${
                          darkTheme
                            ? "active:bg-[#ffffff1a]"
                            : "active:bg-[#f2f2f2]"
                        } `}
                      >
                        <MoreSettingIcon color={darkTheme ? "#fff" : "#000"} />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* from medium devices */}
              <div className="w-full">
                <div className="viewsContainer  flex">
                  <div
                    className={`viewCount  ${
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
              <div
                className={`channelName w-full  block line-clamp-1 font-medium  my-3  ${
                  darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
                }   text-xs flex gap-3 items-center`}
              >
                <Link to={"watch?v=" + item?.id?.videoId}>
                  <img
                    className="w-6 h-6  rounded-full object-cover"
                    src={channelImgUrl}
                    alt="channelImg"
                    srcset=""
                  />
                </Link>
                <Link to={"/watch?v=" + item?.id?.videoId}>
                  {item?.snippet?.channelTitle}
                </Link>
              </div>
              <Link to={"/watch?v=" + item?.id?.videoId}>
                <div
                  className={`discription   font-medium line-clamp-1 h-5  my-3  ${
                    darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
                  }   text-xs `}
                >
                  {item?.snippet?.description}
                </div>
              </Link>
              <div className="w-full flex gap-3">
                {videoDetails?.contentDetails?.definition ? (
                  <div
                    className={` ${
                      darkTheme
                        ? "text-[#a4a3a3] bg-[#272727] hover:bg-[#3a3a3a]  active:bg-[#575656]"
                        : "text-[#737373] bg-[#0000000d] hover:bg-[#e9e7e7]  active:bg-[#e5e3e3]"
                    } cursor-pointer rounded-sm  p-1 font-medium uppercase text-xs h-6 w-7 flex justify-center items-center`}
                  >
                    {videoDetails?.contentDetails?.definition}
                  </div>
                ) : (
                  ""
                )}
                {videoDetails?.contentDetails?.dimension ? (
                  <div
                    className={` ${
                      darkTheme
                        ? "text-[#a4a3a3] bg-[#272727] hover:bg-[#3a3a3a]  active:bg-[#575656]"
                        : "text-[#737373] bg-[#0000000d] hover:bg-[#e9e7e7]  active:bg-[#e5e3e3]"
                    } cursor-pointer rounded-sm font-medium  p-1 uppercase text-xs h-6 w-7 flex justify-center items-center`}
                  >
                    {videoDetails?.contentDetails?.dimension}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          onMouseOver={() => setIsHover(true)}
          onMouseOut={() => setIsHover(false)}
          className={`w-full h-[94px]  hidden cursor-pointer mt-3 md:flex`}
        >
          <div className={`thumbnail w-[168px] h-full  relative `}>
            <div className="w-full h-full">
              <Link to={"/watch?v=" + item?.id?.videoId}>
                <img
                  className="w-full rounded-lg object-cover"
                  src={item?.snippet?.thumbnails?.medium?.url}
                  alt="thumbnail"
                  srcset=""
                />
              </Link>
              <Link to={"/watch?v=" + item?.id?.videoId}>
                <div className="duration bg-[rgba(0,0,0,0.8)] rounded text-white h-3 right-1 bottom-1 w-fit flex justify-center items-center absolute px-1 py-2">
                  <span className=" text-xs font-medium tracking-wide">
                    {preetifyDuration(videoDetails?.contentDetails?.duration)}
                  </span>
                </div>
              </Link>
            </div>
          </div>

          <div className="infoContainer w-[226px] h-full flex">
            <div className="w-[202px]">
              <Link to={"/watch?v=" + item?.id?.videoId}>
                <div
                  className={`title h-10 pl-1.5   line-clamp-2 text-sm  font-medium 
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
                <Link to={"/watch?v=" + item?.id?.videoId}>
                  {item?.snippet?.channelTitle}
                </Link>
              </div>

              <div className="viewsContainer  flex">
                <div
                  className={`viewCount pl-1.5 ${
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

            {/* from medium devices */}
            <div className="w-6 flex justify-center ">
              {isHover && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className={`rounded-full px-[5px]   py-[5px]  h-9 cursor-pointer ${
                    darkTheme ? "active:bg-[#ffffff1a]" : "active:bg-[#f2f2f2]"
                  } `}
                >
                  <MoreSettingIcon color={darkTheme ? "#fff" : "#000"} />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  ) : path.pathname === "/results" ? (
    ""
  ) : (
    <ShimmerRecommendation />
  );
};

export default RecommendationVideoCard;
