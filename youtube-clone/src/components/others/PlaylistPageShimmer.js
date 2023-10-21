import React from "react";
import { useSelector } from "react-redux";
import ShimmerVideoInfo from "../body/MainContainer/watchPage/desktopWatchPage/ShimmerVideoInfo";
import ShimmerRecommendation from "../body/MainContainer/watchPage/desktopWatchPage/ShimmerRecommendation";

const PlaylistPageShimmer = () => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  const showSidebar = useSelector((store) => store.app.showSidebar);

  return (
    <>
      {/* for small devices */}
      <div
        className={`playlistPageMobile md:hidden w-full min-h-screen  pb-16  ${
          darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
        } `}
      >
        <div className="w-full h-[120vw]  relative text-white">
          <div className="w-[92%] mt-5 m-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
              className={`w-full h-[52vw] ${
                darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
              }    animate-pulse rounded-xl`}
            ></div>
            <ShimmerVideoInfo />
          </div>
        </div>

        <div
          className={`w-full z-10  ${
            darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
          }`}
        >
          <div className="w-[95%] m-auto">
            {Array(10)
              .fill("")
              .map((shimmer, index) => {
                return <ShimmerRecommendation key={index} />;
              })}
          </div>
        </div>
      </div>

      {/* for large devices */}
      <div
        className={`playlistPageDesktop  hidden md:flex w-full ${
          showSidebar ? "xl:w-[88%]" : ""
        } min-h-screen pl-16  justify-end  ${
          darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
        } `}
      >
        <div
          className={`w-[360px]  h-[83vh] text-white rounded-xl fixed lg:top-20 xl:top-24 ${
            showSidebar ? "xl:left-[20%] 2xl:left-[17%]" : "left-24"
          }   overflow-y-auto`}
        >
          <div className="w-[95%]  m-auto absolute top-0 left-1/2 -translate-x-1/2">
            <div
              className={`w-full h-[175.5px] ${
                darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
              }    animate-pulse rounded-xl`}
            ></div>
            <ShimmerVideoInfo />
          </div>
        </div>

        <div className="w-[calc(100%-455px)] min-h-screen mt-16 lg:mt-20 xl:mt-24 mr-8  ">
          {Array(10)
            .fill("")
            .map((shimmer, index) => {
              return <ShimmerRecommendation key={index} />;
            })}
        </div>
      </div>
    </>
  );
};

export default PlaylistPageShimmer;
