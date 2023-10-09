import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const ShimmerVideoCard = () => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  const path = useLocation();
  return path.pathname === "/results" ? (
    <div className={`w-full   cursor-pointer `}>
      {/* for small device */}
      <div className="md:hidden">
        <div
          className={`thumbnail md:hidden ${
            darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
          }  h-52  animate-pulse`}
        ></div>
        <div className="infoContainer md:hidden my-3 mt-3">
          <div
            className={`w-[85%] ${
              darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
            } h-5  ml-4   mt-1 animate-pulse `}
          ></div>
          <div
            className={`w-[38%] ${
              darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
            } h-5  ml-4   mt-3 animate-pulse`}
          ></div>
        </div>
      </div>

      {/* from medium device */}
      <div className="w-[1096px] h-[206px] hidden  mt-3 m-auto md:flex gap-3">
        <div
          className={`thumbnail hidden md:block ${
            darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
          }   w-[384px] h-full rounded-lg animate-pulse`}
        ></div>

        <div className=" infoContainer w-[720px] h-full hidden md:block ">
          <div className="w-[80%]  ">
            <div
              className={`w-[85%] ${
                darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
              } h-4  ml-4   mt-1 animate-pulse `}
            ></div>
            <div
              className={`w-[38%] ${
                darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
              } h-4  ml-4   mt-3 animate-pulse`}
            ></div>
          </div>
          <div className={`channelImg pt-1 mt-3 flex gap-4 items-start `}>
            <div
              className={`w-10 h-10 ${
                darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
              }  rounded-full ml-4 mate-pulse`}
            ></div>
            <div
              className={`w-[20%] ${
                darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
              } h-4    mt-3 animate-pulse`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      className={`shimmerVideoCard w-full  sm:w-[45%]  md:w-[31.69%]  2xl:w-[23.69%]   cursor-pointer `}
    >
      <div
        className={`thumbnail ${
          darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
        }  h-52 sm:rounded-xl animate-pulse`}
      ></div>

      {/* for small device */}
      <div className="infoContainer sm:hidden my-3 mt-3">
        <div
          className={`w-[85%] ${
            darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
          } h-5  ml-4   mt-1 animate-pulse `}
        ></div>
        <div
          className={`w-[38%] ${
            darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
          } h-5  ml-4   mt-3 animate-pulse`}
        ></div>
      </div>

      {/* from medium device */}
      <div className="infoContainer hidden sm:flex my-3 mt-3 ">
        <div
          className={`channelImg pt-1  flex justify-end items-start md:block w-[12%]  md:w-[12%]`}
        >
          <div
            className={`w-10 h-10 ${
              darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
            }  rounded-full animate-pulse`}
          ></div>
        </div>

        <div className="w-[80%]  ">
          <div
            className={`w-[85%] ${
              darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
            } h-4  ml-4   mt-1 animate-pulse `}
          ></div>
          <div
            className={`w-[38%] ${
              darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
            } h-4  ml-4   mt-3 animate-pulse`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerVideoCard;
