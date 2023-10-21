import React, { useState } from "react";
import { useSelector } from "react-redux";
import ShimmerRecommendation from "../desktopWatchPage/ShimmerRecommendation";
import RecommendationVideoCard from "../desktopWatchPage/RecommendationVideoCard";
import CommentsList from "../CommentsList";
import Description from "../desktopWatchPage/Description";
import ShimmerChannelInfo from "../desktopWatchPage/ShimmerChannelInfo";
import MoreSettingIcon from "../../../../../assets/icons/svgs/SvgComponents/MoreSettingIcon";
import ShareIcon from "../../../../../assets/icons/svgs/SvgComponents/VideoPage/ShareIcon";
import SaveIcon from "../../../../../assets/icons/svgs/SvgComponents/VideoPage/SaveIcon";
import ReportHistoryIcon from "../../../../../assets/icons/svgs/SvgComponents/ReportHistoryIcon";
import DislikeIcon from "../../../../../assets/icons/svgs/SvgComponents/VideoPage/DislikeIcon";
import {
  daysAgo,
  daysAgoForComment,
  preetifySubcribers,
  preetifyViews,
} from "../../../../../utils/helper/helper";
import LikeIcon from "../../../../../assets/icons/svgs/SvgComponents/VideoPage/LikeIcon";
import { Link, redirect } from "react-router-dom";
import ShimmerVideoInfo from "../desktopWatchPage/ShimmerVideoInfo";
import VideoCard from "../../videosContainer/VideoCard";
import ShimmerVideoCard from "../../videosContainer/ShimmerVideoCard";
import CommentsMobile from "./CommentsMobile";
import DescriptionMobile from "./DescriptionMobile";

const WatchVideoMobile = ({
  videoId,
  recommendations,
  videoDetails,
  channelDetails,
  comments,
  topComments,
  setTopComments,
  nextCommentsToken,
  getMoreComments

}) => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  const [showAllComments, setShowAllComments] = useState(false);
  const [showDescripton, setShowDescripton] = useState(false);
  console.log(channelDetails);
  const snippet = comments
    ? comments[0]?.snippet?.topLevelComment?.snippet
    : null;
  console.log(comments);
  return (
    <>
      <div
        className={`watchPage w-full min-h-screen   pt-[calc(56.25vw+48px)] pb-16  ${
          darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
        } `}
      >
        {/* video Container */}
        <div className="videoContainer z-20 w-full h-[56.25vw] fixed top-12 left-0 right-0 ">
          <iframe
            className="w-full h-full shadow-[-5px_2px_66px_7px_#e2e8f020]"
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
        {/* video title */}
        <div
          onClick={() => setShowDescripton(true)}
          className="w-full flex justify-center "
        >
          <div className="w-[92%] ">
            <div className="w-full ">
              {/* video Title */}
              {videoDetails ? (
                <>
                  <div className="videoTitle w-full  text-lg font-medium mt-3 ">
                    {videoDetails?.snippet?.title}
                  </div>
                  <div className="  w-full mt-1 flex  ">
                    <div
                      className={`  ${
                        darkTheme ? "text-[#969696]" : "text-[#737373]"
                      }  text-sm`}
                    >
                      {preetifyViews(videoDetails?.statistics?.viewCount) +
                        " views"}{" "}
                      • {daysAgo(videoDetails?.snippet?.publishedAt)}
                    </div>
                    <div
                      className={`font-medium text-sm ml-3 ${
                        darkTheme
                          ? " active:bg-[#575656]"
                          : "  active:bg-[#e5e3e3]"
                      }}  `}
                    >
                      ...more
                    </div>
                  </div>
                </>
              ) : (
                <ShimmerVideoInfo />
              )}
            </div>
          </div>
        </div>

        {/* channel info */}
        <div className="w-full flex justify-center mt-3">
          <div className="w-[92%] ">
            {/* channel info */}
            {channelDetails ? (
              <div className="channelInfoContainer w-full   mt-2 ">
                <div className="left flex w-full  justify-between items-center gap-2">
                  <div className="channelInfo w-[75%] flex items-center  gap-2">
                    <div className="channelImg  ">
                      <Link to={"/channel/" + channelDetails?.id}>
                        <img
                          className="w-9 h-9 rounded-full "
                          src={channelDetails?.snippet?.thumbnails?.medium?.url}
                          alt="channelImg"
                          srcset=""
                        />
                      </Link>
                    </div>
                    <div className="channelName line-clamp-1 max-w-[68%] text-sm font-medium  ">
                      <Link to={"/channel/" + channelDetails?.id}>
                        {channelDetails?.snippet?.title}
                      </Link>
                    </div>
                    <div
                      className={`subcribers viewCount  ${
                        darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
                      } font-medium text-xs `}
                    >
                      {preetifySubcribers(
                        channelDetails?.statistics?.subscriberCount
                      )}
                    </div>
                    {/* <div className="channelNameContainer flex items-center gap-1">
                  </div> */}
                  </div>

                  <div className="subscribe flex  w-[25%]">
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
                <div className="right overflow-auto hide-scrollbar w-full mt-3 flex items-end justify-start gap-2">
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
                    } cursor-pointer rounded-full  p-2   h-9 w-[92px] flex justify-center items-center`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <SaveIcon color={darkTheme ? "#fff" : "#000"} />
                      <span className="text-sm font-medium">Save</span>
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
                      <ReportHistoryIcon color={darkTheme ? "#fff" : "#000"} />
                      <span className="text-sm font-medium">Report</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <ShimmerChannelInfo />
            )}
          </div>
        </div>

        {/* comments */}
        {comments ? (
          comments?.error?.errors[0]?.reason === "commentsDisabled" ? (
            <div className="commentsContainer w-full  mt-3  ">
              <div className="w-full  flex justify-center text-sm items-center gap font-medium my-5">
                Comments are turned off.
                <div
                  className={`cursor-pointer ${
                    darkTheme ? "text-blue-400" : "text-[#065fd4]"
                  }   text-sm  `}
                >
                  &nbsp; Learn more.
                </div>
              </div>
            </div>
          ) : videoDetails?.statistics?.commentCount === "0" ? (
            <div className="w-full flex justify-center mt-3 ">
              <div className="w-[92%]">
                <div
                  className={`description w-full px-2.5 py-3    ${
                    darkTheme
                      ? "bg-[#272727] hover:bg-[#3a3a3a]  active:bg-[#575656]"
                      : "bg-[#0000000d] hover:bg-[#e9e7e7]  active:bg-[#e5e3e3]"
                  }  mt-2 rounded-xl cursor-pointer`}
                >
                  <div className="totalComments text-[.9rem] font-medium">
                    {"No comments yet"}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full flex justify-center mt-3">
              <div className="w-[92%]">
                <div
                  onClick={() => setShowAllComments(true)}
                  className={`description w-full px-2.5 py-1.5    ${
                    darkTheme
                      ? "bg-[#272727] hover:bg-[#3a3a3a]  active:bg-[#575656]"
                      : "bg-[#0000000d] hover:bg-[#e9e7e7]  active:bg-[#e5e3e3]"
                  }  mt-2 rounded-xl cursor-pointer`}
                >
                  <div className="totalComments text-[.9rem] font-medium">
                    {"Comments " +
                      preetifyViews(videoDetails?.statistics?.commentCount)}
                  </div>
                  <div className="w-full flex items-center gap-2">
                    <div className="userProfileContainer  w-[8%]">
                      <img
                        className="w-10  rounded-full "
                        src={snippet?.authorProfileImageUrl}
                        alt="channelImg"
                        srcset=""
                      />
                    </div>
                    <div className="commentsContainer self-start pt-1 pb-3 w-[92%] ">
                      <div className="comment w-full">
                        <pre className="text-sm font-sans  line-clamp-2 whitespace-pre-wrap break-words">
                          {snippet?.textOriginal}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        ) : (
          <div className="w-full flex justify-center mt-3">
            <div className="w-[92%] h-20">
              <div
                className={`description w-full px-2.5 py-1 h-20 animate-pulse  ${
                  darkTheme
                    ? "bg-[#272727] hover:bg-[#3a3a3a]  active:bg-[#575656]"
                    : "bg-[#0000000d] hover:bg-[#e9e7e7]  active:bg-[#e5e3e3]"
                }  mt-2 rounded-xl cursor-pointer`}
              ></div>
            </div>
          </div>
        )}

        {/* divider */}
        <div
          className={`border-b w-full mt-5 ${
            darkTheme ? "border-[#ffffff33]" : "border-[#0000001a]"
          }`}
        ></div>

        {/* recommendations */}
        <div className="w-full flex justify-center sm:flex-wrap  md mt-3">
          <div className="w-full sm:flex sm:justify-center sm:gap-4 sm:flex-wrap">
            {recommendations ? (
              <>
                {recommendations?.map((item) => {
                  if (item?.id.videoId === videoDetails.id) {
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
                  return <ShimmerVideoCard key={index} />;
                })
            )}
          </div>
        </div>
      </div>

      <CommentsMobile
        showAllComments={showAllComments}
        setShowAllComments={setShowAllComments}
        topComments={topComments}
        setTopComments={setTopComments}
        videoDetails={videoDetails}
        comments={comments}
        nextCommentsToken={nextCommentsToken}
        getMoreComments={getMoreComments}

      />
      <DescriptionMobile
        showDescripton={showDescripton}
        setShowDescripton={setShowDescripton}
        videoDetails={videoDetails}
        channelDetails={channelDetails}
      />
    </>
  );
};

export default WatchVideoMobile;
