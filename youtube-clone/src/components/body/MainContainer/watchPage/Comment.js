import React, { useState, useTransition } from "react";
import {
  daysAgo,
  daysAgoForComment,
  preetifyViews,
} from "../../../../utils/helper/helper";
import { useSelector } from "react-redux";
import DislikeIcon from "../../../../assets/icons/svgs/SvgComponents/VideoPage/DislikeIcon";
import LikeIcon from "../../../../assets/icons/svgs/SvgComponents/VideoPage/LikeIcon";
import DownTriangleIcon from "../../../../assets/icons/svgs/SvgComponents/VideoPage/DownTriangleIcon";

const Comment = ({
  comment,
  totalReplies,
  snippet,

}) => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  const [showReplies, setShowReplies] = useState(false);
  const [showMore, setShowMore] = useState(false);
  // console.log(totalReplies);
  return (
    <div className="w-full flex justify-between my-3">
      <div className="userProfileContainer w-[10%]   md:w-[8%]">
        <img
          className="w-10  rounded-full "
          src={snippet?.authorProfileImageUrl}
          alt="channelImg"
          srcset=""
        />
      </div>
      <div className="commentsContainer  w-[88%]   md:w-[92%]">
        <div className="heading flex items-center gap-2 h-5">
          <div className="userName text-sm font-medium ">
            @{snippet?.authorDisplayName}
          </div>
          <div
            className={`daysago  ${
              darkTheme ? "text-[#a4a3a3]" : "text-[#565555]"
            }  text-xs font-medium`}
          >
            {daysAgoForComment(snippet?.publishedAt)}
          </div>
        </div>
        <div className="comment w-full my-2">
          <pre
            className={`text-sm font-sans ${
              showMore
                ? ""
                : snippet?.textOriginal.length > 250
                ? "line-clamp-4"
                : ""
            } whitespace-pre-wrap break-words`}
          >
            {snippet?.textOriginal}
          </pre>
          {snippet?.textOriginal.length > 250 ? (
            <>
              {showMore ? (
                <div
                  onClick={() => setShowMore(false)}
                  className={`daysago my-2 cursor-pointer  ${
                    darkTheme ? "text-[#a4a3a3]" : "text-[#565555]"
                  }  text-xs font-medium`}
                >
                  Show more
                </div>
              ) : (
                <div
                  onClick={() => setShowMore(true)}
                  className={`daysago my-2 cursor-pointer   ${
                    darkTheme ? "text-[#a4a3a3]" : "text-[#565555]"
                  }  text-xs font-medium`}
                >
                  Read more
                </div>
              )}
            </>
          ) : (
            ""
          )}
        </div>
        <div className="commentStatistics flex gap-4 items-center h-8 ">
          <div className="likes flex  items-center">
            <div
              className={` 
                  ${
                    darkTheme
                      ? "hover:bg-[#3a3a3a]   md:active:bg-[#575656]"
                      : " hover:bg-[#e9e7e7]  md:active:bg-[#e5e3e3]"
                  }
                  cursor-pointer rounded-full -ml-1 p-1  flex justify-center items-center`}
            >
              <LikeIcon color={darkTheme ? "#fff" : "#000"} />
            </div>
            <div
              className={`count  ${
                darkTheme ? "text-[#bcb9b9]" : "text-[#565555]"
              }  text-xs mx-1 font-medium`}
            >
              {preetifyViews(snippet?.likeCount)}
            </div>
            <div
              className={` 
                  ${
                    darkTheme
                      ? "hover:bg-[#3a3a3a]  md:active:bg-[#575656]"
                      : " hover:bg-[#e9e7e7]  md:active:bg-[#e5e3e3]"
                  }
                  cursor-pointer rounded-full  p-1   flex justify-center items-center`}
            >
              <DislikeIcon color={darkTheme ? "#fff" : "#000"} />
            </div>
            <div
              className={` ${
                darkTheme
                  ? " hover:bg-[#3a3a3a]  md:active:bg-[#575656]"
                  : " hover:bg-[#e9e7e7]  md:active:bg-[#e5e3e3]"
              } cursor-pointer rounded-full  py-2 px-3 h-8 flex justify-center items-center`}
            >
              <span className="text-sm font-medium">Reply</span>
            </div>
          </div>
        </div>
        {totalReplies > 0 ? (
          <>
            <div
              onClick={() => setShowReplies(!showReplies)}
              className={`reply w-fit h-9 flex items-center pl-[8px] pr-[12px] py-[5px] rounded-full cursor-pointer
     ${
       darkTheme
         ? "md:active:bg-[#639ed263] md:hover:bg-[#3e8cd063] transition-colors ease "
         : " md:active:bg-blue-200 md:hover:bg-blue-100 transition-colors ease "
     }  `}
            >
              <div
                className={`icon ${showReplies ? "rotate-180" : "rotate-0"}`}
              >
                <DownTriangleIcon color={darkTheme ? "#4988dcf3" : "#065fd4"} />
              </div>
              <div
                className={`${
                  darkTheme ? "text-blue-400" : "text-[#065fd4]"
                }   text-sm font-semibold whitespace-nowrap`}
              >
                {preetifyViews(totalReplies) + " reply"}
              </div>
            </div>
            {showReplies
              ? comment?.replies?.comments.map((comment) => {
                  return (
                    <Comment
                      key={comment.id}
                      comment={comment}
                      snippet={comment.snippet}
                    />
                  );
                })
              : ""}

          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Comment;
