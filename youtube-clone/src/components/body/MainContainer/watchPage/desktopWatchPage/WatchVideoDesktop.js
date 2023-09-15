import React, { useState } from "react";
import { useSelector } from "react-redux";
import RecommendationVideoCard from "./RecommendationVideoCard";
import { Link } from "react-router-dom";
import {
  daysAgo,
  preetifySubcribers,
  preetifyViews,
} from "../../../../../utils/helper/helper";
import DislikeIcon from "../../../../../assets/icons/svgs/SvgComponents/VideoPage/DislikeIcon";
import LikeIcon from "../../../../../assets/icons/svgs/SvgComponents/VideoPage/LikeIcon";
import ShareIcon from "../../../../../assets/icons/svgs/SvgComponents/VideoPage/ShareIcon";
import MoreSettingIcon from "../../../../../assets/icons/svgs/SvgComponents/MoreSettingIcon";

import SortIcon from "../../../../../assets/icons/svgs/SvgComponents/VideoPage/SortIcon";
import AboutIcon from "../../../../../assets/icons/svgs/SvgComponents/VideoPage/AboutIcon";
import VideosIcon from "../../../../../assets/icons/svgs/SvgComponents/VideoPage/VideosIcon";
import CommentsList from "../CommentsList";
import ProfileIcon from "../../../../../assets/icons/svgs/SvgComponents/ProfileIcon";
import Description from "./Description";
const WatchVideoDesktop = ({
  videoId,
  recommendations,
  videoDetails,
  channelDetails,
  comments,
  topComments, setTopComments
}) => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);

  
  // console.log(channelDetails);
  // console.log(videoDetails?.snippet?.description);

  return (
    <div
      className={`watchPage w-full min-h-screen flex pt-20  border  border-green-600  ${
        darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
      } `}
    >
      <div className="leftContainer w-8/12 2xl:w-9/12   border border-red-700 flex justify-end">
        <div className="left w-[87%] xl:w-[91%] 2xl:w-[92.5%]  mr-8 ">
          {/* video Container */}
          <div className="videoContainer w-full h-[30.05vw] xl:h-[31.77vw] 2xl:h-[33.5vw] ">
            <iframe
              className="w-full h-full rounded-xl"
              src={
                "https://www.youtube-nocookie.com/embed/" +
                videoId +
                "?autoplay=0&mute=0 "
              }
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          {/* video Title */}
          <div className="videoTitle w-full  line-clamp-2 text-xl font-medium mt-3 ">
            {videoDetails?.snippet?.title}
          </div>
          {/* channel info */}
          <div className="channelInfo w-full h-14 flex justify-between items-center   mt-2 ">
            <div className="left flex w-1/2  gap-5">
              <div className="flex items-center gap-3">
                <div className="channelImg ">
                  <Link to={""}>
                    <img
                      className="w-10  rounded-full "
                      src={channelDetails?.snippet?.thumbnails?.medium?.url}
                      alt="channelImg"
                      srcset=""
                    />
                  </Link>
                </div>
                <div className="channelNameContainer ">
                  <div className="channelName line-clamp-1 text-base font-medium">
                    {channelDetails?.snippet?.title}
                  </div>
                  <div className="subcribersCount">
                    <div
                      className={`subcribers viewCount  ${
                        darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
                      } font-medium text-xs `}
                    >
                      {preetifySubcribers(
                        channelDetails?.statistics?.subscriberCount
                      )}{" "}
                      subscribers
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex items-center">
                <div
                  className={`subscribeBtn w-24 h-9  font-medium text-sm cursor-pointer  rounded-full flex items-center justify-center ${
                    darkTheme
                      ? "bg-white hover:bg-[#e9e7e7] active:bg-[#c7c5c5] text-black"
                      : "bg-black hover:bg-[#232323] active:bg-[#3f3f3f] text-white"
                  }`}
                >
                  Subscribe
                </div>
              </div>
            </div>
            <div className="right w-1/2 flex items-end justify-end gap-2">
              <div className="flex">
                <div
                  className={` ${
                    darkTheme
                      ? "bg-[#272727] hover:bg-[#3a3a3a]  active:bg-[#575656]"
                      : "bg-[#0000000d] hover:bg-[#e9e7e7]  active:bg-[#e5e3e3]"
                  } cursor-pointer rounded-full rounded-r-none p-2   h-9 w-[88px] flex justify-center items-center`}
                >
                  <div className={"flex items-center justify-center"}>
                    <LikeIcon color={darkTheme ? "#fff" : "#000"} />
                    <span className="text-sm font-medium ml-1">
                      {preetifyViews(videoDetails?.statistics?.likeCount)}
                    </span>
                  </div>
                </div>
                <div
                  className={`  ${
                    darkTheme
                      ? "bg-[#272727] hover:bg-[#3a3a3a]  active:bg-[#575656]"
                      : "bg-[#0000000d] hover:bg-[#e9e7e7]  active:bg-[#e5e3e3]"
                  } flex h-9 items-center justify-center`}
                >
                  <div
                    className={`border-r h-7  ${
                      darkTheme ? "border-[#514e4e]" : "border-[#ccc]"
                    }`}
                  ></div>
                </div>
                <div
                  className={` ${
                    darkTheme
                      ? "bg-[#272727] hover:bg-[#3a3a3a]  active:bg-[#575656]"
                      : "bg-[#0000000d] hover:bg-[#e9e7e7]  active:bg-[#e5e3e3]"
                  } cursor-pointer rounded-full rounded-l-none p-2   h-9 w-[52px] flex justify-center items-center`}
                >
                  <DislikeIcon color={darkTheme ? "#fff" : "#000"} />
                </div>
              </div>
              <div
                className={` ${
                  darkTheme
                    ? "bg-[#272727] hover:bg-[#3a3a3a]  active:bg-[#575656]"
                    : "bg-[#0000000d] hover:bg-[#e9e7e7]  active:bg-[#e5e3e3]"
                } cursor-pointer rounded-full  p-2   h-9 w-[92px] flex justify-center items-center`}
              >
                <div className="flex items-center justify-center gap-2">
                  <ShareIcon color={darkTheme ? "#fff" : "#000"} />
                  <span className="text-sm font-medium">Share</span>
                </div>
              </div>
              <div
                className={` ${
                  darkTheme
                    ? "bg-[#272727] hover:bg-[#3a3a3a]  active:bg-[#575656]"
                    : "bg-[#0000000d] hover:bg-[#e9e7e7]  active:bg-[#e5e3e3]"
                } cursor-pointer rounded-full  p-2 w-9  h-9  flex justify-center items-center rotate-90`}
              >
                <MoreSettingIcon color={darkTheme ? "#fff" : "#000"} />
              </div>
            </div>
          </div>
          
          {/* description */}
          <Description videoDetails={videoDetails} channelDetails={channelDetails} />

          {/* comments */}
          <CommentsList videoDetails={videoDetails} comments={comments} topComments={topComments} setTopComments={setTopComments}/>
        </div>
      </div>
      <div className="rightContainer w-4/12 2xl:w-[3/12]  border border-yellow-500 flex justify-start">
        <div className="right w-[402px]">
          <div
            className={`chatContainer text-center w-[392px] h-9 p-4 text-base font-medium flex justify-center items-center m-auto rounded-full cursor-pointer ${
              darkTheme
                ? " bg-[#121212] hover:bg-[#272727]  active:bg-[#3a3a3a] text-white  border border-[#514e4e]"
                : "bg-white hover:bg-[#f2f2f2]  active:bg-[#e5e3e3] text-[#0f0f0f]  border border-[#ccc]"
            } `}
          >
            Show chat replay
          </div>
          <div className="recommendationVideosContainer w-full mt-6">
            {recommendations.length !== 0 ? (
              <>
                {recommendations.map((item) => {
                  if (item?.id.videoId === videoDetails.id) {
                    return "";
                  } else {
                    return (
                      // <RecommendationVideoCard
                      //   key={item?.id?.videoId}
                      //   item={item}
                      // />
                      <></>
                    );
                  }
                })}
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchVideoDesktop;