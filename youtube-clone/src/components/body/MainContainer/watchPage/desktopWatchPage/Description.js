import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { daysAgo, preetifySubcribers, preetifyViews } from "../../../../../utils/helper/helper";
import VideosIcon from "../../../../../assets/icons/svgs/SvgComponents/VideoPage/VideosIcon";
import AboutIcon from "../../../../../assets/icons/svgs/SvgComponents/VideoPage/AboutIcon";

const Description = ({ videoDetails, channelDetails }) => {
  const [showDescription, setShowDescription] = useState(false);
  const darkTheme = useSelector((store) => store.theme.darkTheme);

  return (
    <>
    {showDescription ? (
            <div
              className={`description w-full p-3 overflow-hidden   ${
                darkTheme ? "bg-[#272727] " : "bg-[#0000000d] "
              }  mt-2 rounded-xl `}
            >
              <div className="flex gap-3">
                <div className="views  text-sm font-medium">
                  {Number(videoDetails?.statistics?.viewCount).toLocaleString(
                    "en-us"
                  ) + " views"}
                </div>
                <div className="views  text-sm font-medium">
                  {new Date(
                    videoDetails?.snippet?.publishedAt
                  ).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </div>
              </div>
              <pre className="text-sm font-sans whitespace-pre-wrap">
                {videoDetails?.snippet?.description}
              </pre>
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
              <span
                className={`text-sm ${
                  darkTheme ? "  active:bg-[#575656]" : " active:bg-[#e5e3e3]"
                }} cursor-pointer font-medium mt-3`}
                onClick={() => setShowDescription(false)}
              >
                Show less
              </span>
            </div>
          ) : (
            <div
              className={`description w-full p-2.5 h-[104px] overflow-hidden  ${
                darkTheme
                  ? "bg-[#272727] hover:bg-[#3a3a3a]  active:bg-[#575656]"
                  : "bg-[#0000000d] hover:bg-[#e9e7e7]  active:bg-[#e5e3e3]"
              }  mt-2 rounded-xl cursor-pointer`}
            >
              <div className="flex gap-3">
                <div className="views  text-sm font-medium">
                  {preetifyViews(videoDetails?.statistics?.viewCount) +
                    " views"}
                </div>
                <div className="views  text-sm font-medium">
                  {daysAgo(videoDetails?.snippet?.publishedAt)}
                </div>
              </div>
              <div className="flex">
                <pre className="text-sm font-sans line-clamp-3">
                  {videoDetails?.snippet?.description.slice(0, 95)}
                </pre>
                <span
                  className={`font-medium text-sm self-end ml-1 ${
                    darkTheme ? " active:bg-[#575656]" : "  active:bg-[#e5e3e3]"
                  }}  `}
                  onClick={() => setShowDescription(true)}
                >
                  ...more
                </span>
              </div>
            </div>
          )}
    </>
  )
};

export default Description;
