import React from "react";
import { useSelector } from "react-redux";
import ShimmerVideoInfo from "../body/MainContainer/watchPage/desktopWatchPage/ShimmerVideoInfo";
import ShimmerChannelInfo from "../body/MainContainer/watchPage/desktopWatchPage/ShimmerChannelInfo";
import ShimmerVideoCard from "../body/MainContainer/videosContainer/ShimmerVideoCard";
import ShimmerRecommendation from "../body/MainContainer/watchPage/desktopWatchPage/ShimmerRecommendation";

const WatchPageShimmer = () => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);

  return (
    <>
      {/* for small devices */}
      <div
        className={`watchPage w-full min-h-screen md:hidden  pt-[calc(56.25vw+48px)] pb-16  ${
          darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
        } `}
      >
        {/* video Container */}
        <div
          className={`videoContainer z-20 w-full h-[56.25vw] fixed top-12 left-0 right-0  bg-black`}
        ></div>
        {/* video title */}
        <div className="w-full flex justify-center ">
          <div className="w-[92%] ">
            <div className="w-full ">
              <ShimmerVideoInfo />
            </div>
          </div>
        </div>

        {/* channel info */}
        <div className="w-full flex justify-center mt-3">
          <div className="w-[92%] ">
            <ShimmerChannelInfo />
          </div>
        </div>

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

        {/* divider */}
        <div
          className={`border-b w-full mt-5 ${
            darkTheme ? "border-[#ffffff33]" : "border-[#0000001a]"
          }`}
        ></div>

        {/* recommendations */}
        <div className="w-full flex justify-center sm:flex-wrap  md mt-3">
          <div className="w-full sm:flex sm:justify-center sm:gap-4 sm:flex-wrap">
            {Array(10)
              .fill("")
              .map((card, index) => {
                return <ShimmerVideoCard key={index} />;
              })}
          </div>
        </div>
      </div>
      {/* for large devices */}
      <div
        className={`watchPage hidden md:flex w-full min-h-screen  pt-20   ${
          darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
        } `}
      >
        <div className="leftContainer w-8/12 2xl:w-9/12 flex justify-end">
          <div className="left w-[87%] xl:w-[91%] 2xl:w-[92.5%]  mr-8 ">
            {/* video Container */}
            <div className="videoContainer w-full h-[30.05vw] xl:h-[31.77vw] 2xl:h-[33.5vw] bg-black"></div>

            <ShimmerVideoInfo />

            {/* channel info */}
            <ShimmerChannelInfo />
          </div>
        </div>

        <div className="rightContainer w-4/12 2xl:w-[3/12] flex justify-start ">
          <div className="right w-full max-w-[402px] ">
            <div className="recommendationVideosContainer w-full mt-6 ">
              {Array(10)
                .fill("")
                .map((card, index) => {
                  return <ShimmerRecommendation key={index} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchPageShimmer;
