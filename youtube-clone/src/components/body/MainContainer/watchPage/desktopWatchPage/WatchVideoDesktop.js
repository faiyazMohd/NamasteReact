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
import SendIcon from "../../../../../assets/icons/svgs/SvgComponents/VideoPage/SendIcon";
import CommentsList from "../CommentsList";
import ProfileIcon from "../../../../../assets/icons/svgs/SvgComponents/ProfileIcon";
import Description from "./Description";
import ShimmerRecommendation from "./ShimmerRecommendation";
import ShimmerVideoInfo from "./ShimmerVideoInfo";
import ShimmerChannelInfo from "./ShimmerChannelInfo";
import LiveChat from "./LiveChat";
const WatchVideoDesktop = ({
  videoId,
  recommendations,
  videoDetails,
  channelDetails,
  comments,
  topComments,
  setTopComments,
  nextCommentsToken,
  getMoreComments,
}) => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  // console.log(window.innerWidth);
  // console.log(channelDetails);
  // console.log(videoDetails?.snippet?.description);
  console.log(recommendations);
  return (
    <div
      className={`watchPage flex w-full min-h-screen  pt-20   ${
        darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
      } `}
    >
      <div className="leftContainer w-8/12 2xl:w-9/12 flex justify-end">
        <div className="left w-[87%] xl:w-[91%] 2xl:w-[92.5%]  mr-8 ">
          {/* video Container */}
          <div className="videoContainer w-full h-[30.05vw] xl:h-[31.77vw] 2xl:h-[33.5vw] ">
            <iframe
              className="w-full h-full rounded-xl  shadow-[-5px_2px_66px_7px_#e2e8f020] "
              src={
                "https://www.youtube.com/embed/" +
                videoId +
                "?autoplay=1&mute=0&showinfo=0&rel=0"
              }
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          {/* video Title */}
          {videoDetails ? (
            <div className="videoTitle w-full  line-clamp-2 text-xl font-medium mt-3 ">
              {videoDetails?.snippet?.title}
            </div>
          ) : (
            <ShimmerVideoInfo />
          )}

          {/* channel info */}
          {channelDetails ? (
            <div className="channelInfo w-full h-14 flex justify-between items-center   mt-2 ">
              <div className="left flex w-1/2  gap-5">
                <div className="flex items-center gap-3">
                  <div className="channelImg ">
                    <Link to={"/channel/" + channelDetails?.id}>
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
                      <Link to={"/channel/" + channelDetails?.id}>
                        {channelDetails?.snippet?.title}
                      </Link>
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
          ) : (
            <ShimmerChannelInfo />
          )}

          {/* description */}
          {videoDetails ? (
            <Description
              videoDetails={videoDetails}
              channelDetails={channelDetails}
            />
          ) : (
            ""
          )}

          {/* comments */}
          {comments ? (
            <CommentsList
              videoDetails={videoDetails}
              comments={comments}
              topComments={topComments}
              setTopComments={setTopComments}
              nextCommentsToken={nextCommentsToken}
              getMoreComments={getMoreComments}
            />
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="rightContainer w-4/12 2xl:w-[3/12] flex justify-start ">
        <div className="right w-full max-w-[402px] ">
          <LiveChat />
          <div className="recommendationVideosContainer w-full mt-6 ">
            {recommendations ? (
              <>
                {recommendations?.map((item) => {
                  if (item?.id?.videoId === videoDetails?.id) {
                    return "";
                  } else {
                    return (
                      <>
                        <RecommendationVideoCard
                          key={item?.id?.videoId}
                          item={item}
                        />
                      </>
                    );
                  }
                })}
              </>
            ) : (
              Array(10)
                .fill("")
                .map((card, index) => {
                  return <ShimmerRecommendation key={index} />;
                })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchVideoDesktop;
