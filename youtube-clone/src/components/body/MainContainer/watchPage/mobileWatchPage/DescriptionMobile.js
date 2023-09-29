import React, { useState } from "react";
import { useSelector } from "react-redux";
import CrossIcon from "../../../../../assets/icons/svgs/SvgComponents/CrossIcon";
import {
  preetifySubcribers,
  preetifyViews,
} from "../../../../../utils/helper/helper";
import { Link } from "react-router-dom";
import AboutIcon from "../../../../../assets/icons/svgs/SvgComponents/VideoPage/AboutIcon";
import VideosIcon from "../../../../../assets/icons/svgs/SvgComponents/VideoPage/VideosIcon";

const DescriptionMobile = ({
  videoDetails,
  channelDetails,
  showDescripton,
  setShowDescripton,
}) => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <div
      className={`overflow-auto  md:hidden fixed top-[calc(56.25vw+48px)]  bottom-0 left-0  ${
        darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
      }  h-[calc(100%-(56.25vw+48px))]   w-full  z-30 transition-transform ease-out  duration-[225ms] ${
        showDescripton ? "translate-y-0" : "translate-y-[130%]"
      } `}
    >
      <div
        className={`w-full ${
          darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
        }  sticky top-0 right-0 left-0  z-30 ${
          darkTheme
            ? "border-b border-[rgba(255,255,255,0.2)]"
            : "border-b border-[rgba(0,0,0,0.1)]"
        } `}
      >
        <div className="w-[95%]  flex items-center m-auto  h-16 ">
          <div className="text-lg  w-11/12 flex items-center">
            <div className="totalComments text-lg font-semibold">
              Description
            </div>
          </div>
          <div
            className="closeAccount   w-1/12 "
            onClick={() => setShowDescripton(false)}
          >
            <CrossIcon color={darkTheme ? "#fff" : "#000"} />
          </div>
        </div>
      </div>
      <div className="w-[92%] m-auto">
        <div className="w-full ">
          <div className="videoTitle w-full  text-lg font-bold leading-5 mt-3 ">
            {videoDetails?.snippet?.title}
          </div>
        </div>
        <div className="w-full ">
          <div className="channelInfo  flex items-center h-10   gap-2 mt-3">
            <div className="channelImg  ">
              <Link to={"/channel/" + channelDetails?.id}>
                <img
                  className="w-6  rounded-full "
                  src={channelDetails?.snippet?.thumbnails?.medium?.url}
                  alt="channelImg"
                  srcset=""
                />
              </Link>
            </div>
            <div className="channelName line-clamp-1 text-sm font-medium  ">
              <Link to={"/channel/" + channelDetails?.id}>
                {channelDetails?.snippet?.title}
              </Link>
            </div>
          </div>
          <div
            className={`videoStatistic ${
              darkTheme
                ? "border-b border-[rgba(255,255,255,0.2)]"
                : "border-b border-[rgba(0,0,0,0.1)]"
            }  flex h-16   justify-between`}
          >
            <div className="likes w-1/3  h-full flex items-center justify-center">
              <div className="h-11 flex flex-col justify-center items-center">
                <div className="h-6 font-bold text-lg">1.4M</div>
                <div
                  className={`h-4 text-sm ${
                    darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
                  }`}
                >
                  Likes
                </div>
              </div>
            </div>
            <div className="views w-fit  h-full flex items-center justify-center">
              <div className="h-11 flex flex-col justify-center items-center">
                <div className="h-6 font-bold text-lg">
                  {" "}
                  {Number(videoDetails?.statistics?.viewCount).toLocaleString(
                    "en-us"
                  )}
                </div>
                <div
                  className={`h-4 text-sm ${
                    darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
                  }`}
                >
                  Views
                </div>
              </div>
            </div>
            <div className="date w-1/3  h-full flex items-center justify-center">
              <div className="h-11 flex flex-col justify-center items-center">
                <div className="h-6 font-bold text-lg">
                  {new Date(
                    videoDetails?.snippet?.publishedAt
                  ).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                  })}
                </div>
                <div
                  className={`h-4 text-sm ${
                    darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
                  }`}
                >
                  {new Date(
                    videoDetails?.snippet?.publishedAt
                  ).toLocaleDateString("en-US", {
                    year: "numeric",
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className={`description  mt-3`}>
            {showFullDescription ? (
              <pre className="text-sm font-sans whitespace-pre-wrap">
                {videoDetails?.snippet?.description}
              </pre>
            ) : (
              <div className="flex">
                <pre className="text-sm font-sans line-clamp-5">
                  {videoDetails?.snippet?.description.slice(0, 150)}
                </pre>
                <span
                  className={`font-medium text-sm self-end ml-1 ${
                    darkTheme ? " active:bg-[#575656]" : "  active:bg-[#e5e3e3]"
                  }}  `}
                  onClick={() => setShowFullDescription(true)}
                >
                  ...more
                </span>
              </div>
            )}
          </div>

          <div
            className={`channelInfo h-40 border-t-[6px] my-5     ${
              darkTheme ? "border-[#ffffff33]" : "border-[#0000001a]"
            } `}
          >
            <Link to={"/channel/" + channelDetails?.id}>
              <div className="channelName my-4 h-[72px] flex w-full items-center ">
                {/* <div className="flex items-center gap-3"> */}
                <div className="channelImg mr-3">
                  <img
                    className="w-[72px]  rounded-full "
                    src={channelDetails?.snippet?.thumbnails?.medium?.url}
                    alt="channelImg"
                    srcset=""
                  />
                </div>
                <div className="channelNameContainer ">
                  <div className="channelName line-clamp-1 text-lg font-bold">
                    {channelDetails?.snippet?.title}
                  </div>
                  <div className="subcribersCount">
                    <div
                      className={`subcribers viewCount  font-medium text-sm `}
                    >
                      {preetifySubcribers(
                        channelDetails?.statistics?.subscriberCount
                      )}{" "}
                      subscribers
                    </div>
                  </div>
                </div>
                {/* </div> */}
              </div>
            </Link>

            <div className="channelAbout w-full  h-9 flex justify-between gap-3">
              <div className="videos w-[49%]">
                <Link to={"/channel/" + channelDetails?.id}>
                  <div
                    className={` w-full h-9 flex justify-center items-center pl-[8px] pr-[12px] py-[5px] rounded-full cursor-pointer
                          ${
                            darkTheme
                              ? "border border-[#616060] hover:bg-[#3a3a3a]  active:bg-[#575656] "
                              : "border border-[#ccc] hover:bg-[#e9e7e7]  active:bg-[#e5e3e3] "
                          }   `}
                  >
                    <div className="profileIcon">
                      <VideosIcon color={darkTheme ? "#fff" : "#000"} />
                    </div>
                    <div
                      className={` ml-2 text-sm font-semibold whitespace-nowrap`}
                    >
                      Videos
                    </div>
                  </div>
                </Link>
              </div>
              <div className="about w-[49%]">
                <Link to={"/channel/" + channelDetails?.id+"/about"}>
                  <div
                    className={` w-full h-9 flex justify-center items-center pl-[8px] pr-[12px] py-[5px] rounded-full cursor-pointer
                          ${
                            darkTheme
                              ? "border border-[#616060] hover:bg-[#3a3a3a]  active:bg-[#575656] "
                              : "border border-[#ccc] hover:bg-[#e9e7e7]  active:bg-[#e5e3e3] "
                          }   `}
                  >
                    <div className="profileIcon">
                      <AboutIcon color={darkTheme ? "#fff" : "#000"} />
                    </div>
                    <div
                      className={` ml-2 text-sm font-semibold whitespace-nowrap`}
                    >
                      About
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionMobile;
