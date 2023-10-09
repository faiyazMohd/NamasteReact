import React, { useState } from "react";
import { useSelector } from "react-redux";
import SortIcon from "../../../../assets/icons/svgs/SvgComponents/VideoPage/SortIcon";
import Comment from "./Comment";
const CommentsList = ({
  videoDetails,
  comments,
  topComments,
  setTopComments,
  nextCommentsToken,
  getMoreComments,
}) => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  const [showSortPopper, setShowSortPopper] = useState(false);
  // console.log(comments);
  return (
    <>
      {comments ? (
        videoDetails?.statistics?.commentCount == "0" ? (
          <div className="commentsContainer w-full  mt-2  ">
            <div className="w-full  flex justify-start items-center gap font-medium my-5">
              No comments yet
            </div>
          </div>
        ) : (
          <div className="commentsContainer w-full  mt-2  ">
            <div className="w-full  flex items-center gap-7 font-medium my-5">
              <div className="totalComments">
                {Number(videoDetails?.statistics?.commentCount).toLocaleString(
                  "en-us"
                ) + " Comments"}
              </div>
              <div className=" relative">
                <div
                  onClick={() => setShowSortPopper(true)}
                  className=" text-sm sortBy  flex  gap-2 cursor-pointer"
                >
                  <SortIcon color={darkTheme ? "#fff" : "#000"} />
                  <div>Sort by</div>
                </div>
                {showSortPopper ? (
                  <>
                    <div
                      onClick={() => setShowSortPopper(false)}
                      className="fixed top-0 bottom-0 left-0 right-0 z-30 w-full h-full bg-transparent"
                    ></div>
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className={`w-[128px] h-[112px] absolute top-7 rounded-xl backdrop-blur  shadow-[0px_4px_32px_0px_#0000001a]  ${
                        darkTheme
                          ? "bg-[#272727] text-white"
                          : "bg-white text-black"
                      }  z-40`}
                    >
                      <div className="Container w-full my-2">
                        <div
                          onClick={() => {
                            setTopComments(true);
                            setShowSortPopper(false);
                          }}
                          className={` h-12 mt-1 px-4 py-2 cursor-pointer  whitespace-nowrap ${
                            darkTheme
                              ? !topComments
                                ? " hover:bg-[#3a3a3a]  active:bg-[#575656]"
                                : "bg-[#4f4d4d]  active:bg-[#575656]"
                              : !topComments
                              ? " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                              : " bg-[#d3d1d1]  active:bg-[#e5e3e3]"
                          }
                         flex  items-center   text-sm`}
                        >
                          Top comments
                        </div>
                        <div
                          onClick={() => {
                            setTopComments(false);
                            setShowSortPopper(false);
                          }}
                          className={` h-12 w-full px-4 py-2 cursor-pointer  whitespace-nowrap 
                          ${
                            darkTheme
                              ? topComments
                                ? " hover:bg-[#3a3a3a]  active:bg-[#575656]"
                                : "bg-[#4f4d4d]  active:bg-[#575656]"
                              : topComments
                              ? " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                              : " bg-[#d3d1d1]  active:bg-[#e5e3e3]"
                          }
                          flex  items-center   text-sm`}
                          // className={` h-12 w-full px-4 py-2 cursor-pointer  whitespace-nowrap ${
                          //   darkTheme
                          //     ? " hover:bg-[#3a3a3a]  active:bg-[#575656]"
                          //     : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                          // }
                          // flex  items-center   text-sm`}
                        >
                          Newest first
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="comments w-full">
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
        )
      ) : (
        <div className="commentsContainer w-full  mt-2  ">
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
      )}
    </>
  );
};

export default CommentsList;
