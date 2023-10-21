import React, { useEffect, useState } from "react";
import MoreSettingIcon from "../../../../../assets/icons/svgs/SvgComponents/MoreSettingIcon";
import { Link, useFetcher, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  daysAgo,
  preetifyDuration,
  preetifyViews,
} from "../../../../../utils/helper/helper";
import ShimmerRecommendation from "./ShimmerRecommendation";

const RecommendationVideoCard = ({ item, searchFilters }) => {
  const [videoDetails, setVideoDetails] = useState(null);
  const [isHover, setIsHover] = useState(false);
  const [isHoverThumbnail, setIsHoverThumbnail] = useState(false);
  const [channelDetails, setchannelDetails] = useState(null);
  const [timer, setTimer] = useState(null);

  const path = useLocation();
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  // console.log(item?.id?.videoId);
  // console.log(videoDetails);
  // console.log(videoDetails?.snippet?.title);
  // console.log(videoDetails?.contentDetails?.duration);
  // console.log(item?.snippet?.thumbnails?.medium?.url);
  const getVideoData = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cstatus&id=${item?.id?.videoId}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    );
    const json = await data.json();
    setVideoDetails(json?.items[0]);
    // console.log(item?.snippet?.title);
    console.log(json);
  };
  // const channelImgUrl =
  //   "https://yt3.ggpht.com/D8uGTY8fLYo42IK9S_ahqO2u9NAkWEdbAswFM-OcCVNHVmgo0lYx0Pgq6WimdNvxDbw31U-6cA=s88-c-k-c0x00ffffff-no-nd-rj";
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
    getVideoData();
    getChannelData();
    return () => {
      // console.log("I am returning");
      // console.log(item?.id?.videoId);
      // console.log(videoDetails);
      // console.log(videoDetails?.snippet?.title);
      // console.log(videoDetails?.contentDetails?.duration);
    };
  }, [item.id.videoId]);
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
              <Link to={"/watch?v=" + item?.id?.videoId}>
                <img
                  className="w-full h-fit   object-cover"
                  src={item?.snippet?.thumbnails?.medium?.url}
                  alt="thumbnail"
                />
              </Link>
              {videoDetails?.snippet?.liveBroadcastContent === "live" ? (
                <div className="duration bg-[rgba(0,0,0,0.8)] rounded text-white h-3 absolute right-1.5  bottom-1   w-fit flex justify-center items-center py-2">
                  <div
                    className={`text-white bg-red-700 cursor-pointer rounded-sm  p-1 font-medium uppercase text-xs h-6 w-fit flex justify-center items-center`}
                  >
                    <div className="icon mr-1.5">
                      <svg
                        fill="#fff"
                        height="16"
                        viewBox="0 0 16 16"
                        width="16"
                        focusable="false"
                      >
                        <path d="M9 8c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Zm1.11 2.13.71.71C11.55 10.11 12 9.11 12 8c0-1.11-.45-2.11-1.18-2.84l-.71.71c.55.55.89 1.3.89 2.13 0 .83-.34 1.58-.89 2.13Zm-4.93.71.71-.71C5.34 9.58 5 8.83 5 8c0-.83.34-1.58.89-2.13l-.71-.71C4.45 5.89 4 6.89 4 8c0 1.11.45 2.11 1.18 2.84Zm7.05 1.41.71.71C14.21 11.69 15 9.94 15 8s-.79-3.69-2.06-4.96l-.71.71C13.32 4.84 14 6.34 14 8c0 1.66-.68 3.16-1.77 4.25Zm-9.17.71.71-.71C2.68 11.16 2 9.66 2 8c0-1.66.68-3.16 1.77-4.25l-.71-.71C1.79 4.31 1 6.06 1 8s.79 3.69 2.06 4.96Z"></path>
                      </svg>
                    </div>
                    Live
                  </div>
                </div>
              ) : (
                <Link to={"/watch?v=" + item?.id?.videoId}>
                  <div className="duration bg-[rgba(0,0,0,0.8)] rounded text-white h-3 absolute right-2 md:right-1  bottom-1  md:bottom-1.5 w-fit flex justify-center items-center  px-1.5 py-2">
                    <span className=" text-xs font-medium tracking-wide">
                      {preetifyDuration(videoDetails?.contentDetails?.duration)}
                    </span>
                  </div>
                </Link>
              )}
            </div>
          </div>

          <div className="infoContainer my-2 mt-3 flex">
            <div className="channelImg pt-1 flex justify-end items-start md:block w-[12%]  md:w-[10%]">
              <Link to={"/channel/" + item?.snippet?.channelId}>
                {channelDetails ? (
                  <img
                    className="w-10 rounded-full"
                    src={channelDetails?.snippet?.thumbnails?.default?.url}
                    alt="channelName"
                  />
                ) : (
                  <div
                    className={`w-10 h-10 ${
                      darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
                    }  rounded-full animate-pulse`}
                  ></div>
                )}
              </Link>
            </div>
            <div className="w-[80%] md:w-[80%] ">
              <Link to={"/watch?v=" + item?.id?.videoId}>
                <div
                  className={`title ml-3 text-base leading-5  line-clamp-2 md:text-base font-medium 
           ${darkTheme ? "text-[#f1f1f1]" : "text-[#4e4e4e]"}   `}
                >
                  {item.snippet.title}
                </div>
              </Link>
              {/* for small divice */}
              <div className="line-clamp-2  pl-3 md:hidden w-full mt-1">
                <Link to={"/watch?v=" + item?.id?.videoId}>
                  <div
                    className={`leading-4  line-clamp-2 ${
                      darkTheme ? "text-[#969696]" : "text-[#737373]"
                    }  text-[.8rem]`}
                  >
                    <Link
                      className="mr-1"
                      to={"/channel/" + item?.snippet?.channelId}
                    >
                      {item?.snippet?.channelTitle}
                    </Link>
                    •{" "}
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
              <Link to={"/watch?v=" + item?.id?.videoId}>
                <img
                  className="w-full h-fit  sm:rounded-xl object-cover"
                  src={item?.snippet?.thumbnails?.medium?.url}
                  alt="thumbnail"
                />
              </Link>
              <Link to={"/watch?v=" + item?.id?.videoId}>
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
              <Link to={"/channel/" + item?.snippet?.channelId}>
                {channelDetails ? (
                  <img
                    className="w-10 rounded-full"
                    src={channelDetails?.snippet?.thumbnails?.default?.url}
                    alt="channelName"
                  />
                ) : (
                  <div
                    className={`w-10 h-10 ${
                      darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
                    }  rounded-full animate-pulse`}
                  ></div>
                )}
              </Link>
            </div>
            <div className="w-[80%] md:w-[80%] ">
              <Link to={"/watch?v=" + item?.id?.videoId}>
                <div
                  className={`title ml-3 text-base leading-5  line-clamp-2 md:text-base font-medium 
           ${darkTheme ? "text-[#f1f1f1]" : "text-[#4e4e4e]"}   `}
                >
                  {item.snippet.title}
                </div>
              </Link>
              {/* for small divice */}
              <div className="line-clamp-2  pl-3 md:hidden w-full mt-1">
                <Link to={"/watch?v=" + item?.id?.videoId}>
                  <div
                    className={`leading-4  line-clamp-2 ${
                      darkTheme ? "text-[#969696]" : "text-[#737373]"
                    }  text-[.8rem]`}
                  >
                    <Link
                      className="mr-1"
                      to={"/channel/" + item?.snippet?.channelId}
                    >
                      {item?.snippet?.channelTitle}
                    </Link>
                    •{" "}
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
                      className="w-full h-full rounded-lg object-cover"
                      src={item?.snippet?.thumbnails?.medium?.url}
                      alt="thumbnail"
                    />
                  </Link>
                  {videoDetails?.snippet?.liveBroadcastContent === "live" ? (
                    ""
                  ) : (
                    <Link to={"/watch?v=" + item?.id?.videoId}>
                      <div className="duration bg-[rgba(0,0,0,0.8)] rounded text-white h-3 right-1 bottom-1 w-fit flex justify-center items-center absolute px-1 py-2">
                        <span className=" text-xs font-medium tracking-wide">
                          {preetifyDuration(
                            videoDetails?.contentDetails?.duration
                          )}
                        </span>
                      </div>
                    </Link>
                  )}
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
                      {/* {item?.id?.videoId}{"/"} */}
                      {/* {videoDetails?.snippet?.title} */}
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
                <Link to={"/channel/" + item?.snippet?.channelId}>
                  {channelDetails? 
                  <img
                    className="w-6 h-6  rounded-full object-cover"
                    src={channelDetails?.snippet?.thumbnails?.default?.url}
                    alt="channelImg"
                  />:<div
                  className={`w-6 h-6 ${
                    darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
                  }  rounded-full animate-pulse`}
                ></div>}
                </Link>
                <Link to={"/channel/" + item?.snippet?.channelId}>
                  {/* {item?.snippet?.channelTitle} */}
                  {videoDetails?.snippet?.channelTitle}
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
                {videoDetails?.snippet?.liveBroadcastContent === "live" ? (
                  <div
                    className={`text-white bg-red-700 cursor-pointer rounded-sm  p-1 font-medium uppercase text-xs h-6 w-fit flex justify-center items-center`}
                  >
                    <div className="icon mr-1.5">
                      <svg
                        fill="#fff"
                        height="16"
                        viewBox="0 0 16 16"
                        width="16"
                        focusable="false"
                      >
                        <path d="M9 8c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Zm1.11 2.13.71.71C11.55 10.11 12 9.11 12 8c0-1.11-.45-2.11-1.18-2.84l-.71.71c.55.55.89 1.3.89 2.13 0 .83-.34 1.58-.89 2.13Zm-4.93.71.71-.71C5.34 9.58 5 8.83 5 8c0-.83.34-1.58.89-2.13l-.71-.71C4.45 5.89 4 6.89 4 8c0 1.11.45 2.11 1.18 2.84Zm7.05 1.41.71.71C14.21 11.69 15 9.94 15 8s-.79-3.69-2.06-4.96l-.71.71C13.32 4.84 14 6.34 14 8c0 1.66-.68 3.16-1.77 4.25Zm-9.17.71.71-.71C2.68 11.16 2 9.66 2 8c0-1.66.68-3.16 1.77-4.25l-.71-.71C1.79 4.31 1 6.06 1 8s.79 3.69 2.06 4.96Z"></path>
                      </svg>
                    </div>
                    Live
                  </div>
                ) : (
                  ""
                )}
                {videoDetails?.contentDetails?.definition ? (
                  <Link to={"/watch?v=" + item?.id?.videoId}>
                    <div
                      className={` ${
                        darkTheme
                          ? "text-[#a4a3a3] bg-[#272727] hover:bg-[#3a3a3a]  active:bg-[#575656]"
                          : "text-[#737373] bg-[#0000000d] hover:bg-[#e9e7e7]  active:bg-[#e5e3e3]"
                      } cursor-pointer rounded-sm  p-1 font-medium uppercase text-xs h-6 w-7 flex justify-center items-center`}
                    >
                      {videoDetails?.contentDetails?.definition}
                    </div>
                  </Link>
                ) : (
                  ""
                )}
                {videoDetails?.contentDetails?.dimension ? (
                  <Link to={"/watch?v=" + item?.id?.videoId}>
                    <div
                      className={` ${
                        darkTheme
                          ? "text-[#a4a3a3] bg-[#272727] hover:bg-[#3a3a3a]  active:bg-[#575656]"
                          : "text-[#737373] bg-[#0000000d] hover:bg-[#e9e7e7]  active:bg-[#e5e3e3]"
                      } cursor-pointer rounded-sm font-medium  p-1 uppercase text-xs h-6 w-7 flex justify-center items-center`}
                    >
                      {videoDetails?.contentDetails?.dimension}
                    </div>
                  </Link>
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
          className={`w-full h-[80px] lg:h-[94px]  hidden cursor-pointer mt-3 md:flex `}
        >
          <div
            className={`thumbnail md:w-[130px] lg:w-[150px]  xl:w-[168px]  h-full  relative `}
          >
            <div className="w-full h-full">
              <Link to={"/watch?v=" + item?.id?.videoId}>
                <img
                  className="w-full h-full rounded-lg object-cover"
                  src={item?.snippet?.thumbnails?.medium?.url}
                  alt="thumbnail"
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

          <div className="infoContainer  md:w-[calc(100%-130px)] lg:w-[calc(100%-150px)] xl:w-[226px] h-full flex">
            <div className=" md:w-[calc(100%-26px)] lg:w-[calc(100%-26px)] xl:w-[202px] ">
              <Link to={"/watch?v=" + item?.id?.videoId}>
                <div
                  className={`title h-10 pl-1.5   line-clamp-2 text-sm  font-medium 
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
                <Link
                  to={"/channel/" + item?.snippet?.channelId}
                  className="line-clamp-1"
                >
                  {item?.snippet?.channelTitle}
                </Link>
              </div>

              <div className="viewsContainer  flex">
                <div
                  className={`viewCount pl-1.5 ${
                    darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
                  } font-medium text-[.59rem] lg:text-xs  `}
                >
                  <Link to={"/watch?v=" + item?.id?.videoId}>
                    {preetifyViews(videoDetails?.statistics?.viewCount) +
                      " views"}
                  </Link>
                </div>
                <div
                  className={`mx-1 ${
                    darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
                  } font-medium text-[.59rem] lg:text-xs`}
                >
                  •
                </div>
                <div
                  className={`daysago  ${
                    darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
                  } font-medium text-[.59rem] lg:text-xs`}
                >
                  <Link to={"/watch?v=" + item?.id?.videoId}>
                    {daysAgo(item?.snippet?.publishedAt)}
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-6 flex justify-center overflow-hidden xl:overflow-visible">
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
