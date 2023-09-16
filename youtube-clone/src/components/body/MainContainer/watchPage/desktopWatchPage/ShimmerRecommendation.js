import React from "react";
import { useSelector } from "react-redux";

const ShimmerRecommendation = () => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);

  return (
    <div className={`w-full h-[94px]  mt-3 flex`}>
      <div className={`thumbnail w-[168px] h-full  relative `}>
        <div
          className={`w-full h-full rounded-lg animate-pulse ${
            darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
          }`}
        ></div>
      </div>

      <div className="infoContainer w-[226px] h-full flex">
        <div className="w-[202px]">
          <div className="w-[100%]  ">
            <div
              className={`w-[90%] ${
                darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
              } h-5  ml-4 rounded-xl  mt-1 animate-pulse `}
            ></div>
            <div
              className={`w-[55%] ${
                darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
              } h-5  ml-4 rounded-xl  mt-3 animate-pulse`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerRecommendation;
