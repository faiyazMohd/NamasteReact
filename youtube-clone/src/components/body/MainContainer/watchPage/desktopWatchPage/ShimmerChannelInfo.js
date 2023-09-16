import React from "react";
import { useSelector } from "react-redux";

const ShimmerChannelInfo = () => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);

  return (
    <div className={`infoContainer w-full flex mt-3 pb-2`}>
      <div className="w-[70%] flex gap-3 items-center md:items-start">
        <div
          className={`channelImg  flex justify-center  w-[20%] md:w-[12%] items-center md:items-start `}
        >
          <div
            className={`w-12 h-12 ${
              darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
            }  rounded-full animate-pulse`}
          ></div>
        </div>
        <div className="w-[80%] m:w-[88%] items-center md:items-start">
          <div
            className={`w-[80%] m:w-[55%] ${
              darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
            } h-6 md:h-5   mt-1 animate-pulse rounded-xl`}
          ></div>
          <div
            className={`w-[55%] hidden md:block ${
              darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
            } h-5   mt-3 animate-pulse rounded-xl`}
          ></div>
        </div>
      </div>
      <div className="w-[30%] flex items-center justify-center ">
        <div
          className={`w-[70%] ${
            darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
          } h-10 md:h-12   mt-3 animate-pulse rounded-lg`}
        ></div>
      </div>
    </div>
  );
};

export default ShimmerChannelInfo;
