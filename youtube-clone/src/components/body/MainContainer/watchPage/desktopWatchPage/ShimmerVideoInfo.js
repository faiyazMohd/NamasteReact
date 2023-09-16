import React from "react";
import { useSelector } from "react-redux";

const ShimmerVideoInfo = () => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);

  return (
    <div className={`infoContainer w-full flex mt-6 pb-4 ${
        darkTheme
          ? "border-b border-[rgba(255,255,255,0.2)]"
          : "border-b border-[rgba(0,0,0,0.1)]"
      }`}>
      <div className="w-[70%]">
        <div
          className={`w-[90%] ${
            darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
          } h-6   mt-1 animate-pulse rounded-xl`}
        ></div>
        <div
          className={`w-[48%] ${
            darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
          } h-6   mt-3 animate-pulse rounded-xl`}
        ></div>
      </div>
      <div className="w-[30%] flex items-end ">
        <div className={`w-[95%] hidden  h-6  md:flex gap-4`}>
          <div
            className={`w-6 h-full rounded-full animate-pulse ${
              darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
            }`}
          ></div>
          <div
            className={`w-6 h-full rounded-full animate-pulse ${
              darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
            }`}
          ></div>
          <div
            className={`w-6 h-full rounded-full animate-pulse ${
              darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
            }`}
          ></div>
          <div
            className={`w-6 h-full rounded-full animate-pulse ${
              darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
            }`}
          ></div>
          <div
            className={`w-6 h-full rounded-full animate-pulse ${
              darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerVideoInfo;
