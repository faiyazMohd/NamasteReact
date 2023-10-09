import React from "react";
import { useSelector } from "react-redux";
import CrossIcon from "../../../../../assets/icons/svgs/SvgComponents/CrossIcon";
import { preetifyViews } from "../../../../../utils/helper/helper";
import CommentsList from "../CommentsList";
import Comment from "../Comment";
const CommentsMobile = ({
  showAllComments,
  setShowAllComments,
  channelDetails,
  comments,
  topComments,
  setTopComments,
  videoDetails,
  nextCommentsToken,
  getMoreComments,
}) => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);

  return (
    <div
      className={`overflow-auto  md:hidden fixed top-[calc(56.25vw+48px)]  bottom-0 left-0  ${
        darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
      }  h-[calc(100%-(56.25vw+48px))]   w-full  z-30 transition-transform ease-out  duration-[225ms] ${
        showAllComments ? "translate-y-0" : "translate-y-[130%]"
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
        <div className="w-[95%]  flex items-center m-auto  h-12">
          <div className="text-lg  w-11/12 flex items-center">
            <div className="totalComments text-lg font-medium">
              {"Comments " +
                preetifyViews(videoDetails?.statistics?.commentCount)}
            </div>
          </div>
          <div
            className="closeAccount   w-1/12 "
            onClick={() => setShowAllComments(false)}
          >
            <CrossIcon color={darkTheme ? "#fff" : "#000"} />
          </div>
        </div>
        <div className="w-[95%] flex items-center m-auto gap-3 mb-2">
          <div
            onClick={() => setTopComments(true)}
            className={`subscribeBtn w-16 h-8    font-medium text-sm cursor-pointer  rounded-full flex items-center justify-center ${
              topComments
                ? darkTheme
                  ? "bg-white  text-black"
                  : "bg-black  text-white"
                : darkTheme
                ? "bg-[#272727]  text-white"
                : "bg-[#0000000d]  text-black"
            }`}
          >
            Top
          </div>
          <div
            onClick={() => setTopComments(false)}
            className={`subscribeBtn w-20 h-8  font-medium text-sm cursor-pointer  rounded-full flex items-center justify-center ${
              !topComments
                ? darkTheme
                  ? "bg-white  text-black"
                  : "bg-black  text-white"
                : darkTheme
                ? "bg-[#272727]  text-white"
                : "bg-[#0000000d]  text-black"
            }`}
          >
            Newest
          </div>
        </div>
      </div>

      <div className="w-[95%]  m-auto ">
        <div className="comments w-full ">
          {comments?.map((comment) => {
            return (
              <Comment
                key={comment?.id}
                comment={comment}
                snippet={comment?.snippet?.topLevelComment?.snippet}
                totalReplies={comment?.snippet?.totalReplyCount}
              />
            );
          })}
        </div>
        {nextCommentsToken ? (
          <div
            onClick={() => getMoreComments()}
            className={`chatContainer whitespace-nowrap  text-center w-[50%] max-w-[200px] h-9 p-4 my-4 text-base font-medium flex justify-center items-center m-auto rounded-full cursor-pointer ${
              darkTheme
                ? " bg-[#121212] hover:bg-[#272727]  active:bg-[#3a3a3a] text-white  border border-[#514e4e]"
                : "bg-white hover:bg-[#f2f2f2]  active:bg-[#e5e3e3] text-[#0f0f0f]  border border-[#ccc]"
            } `}
          >
            Show more comments
          </div>
        ) : (
          <div
            className={`chatContainer whitespace-nowrap  text-center w-[50%] max-w-[200px] h-9 p-4 my-4 text-base font-medium flex justify-center items-center m-auto rounded-full cursor-pointer  `}
          >
            No more comments
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentsMobile;
