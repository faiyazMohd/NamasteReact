import React from 'react'
import { useSelector } from 'react-redux';

const ChannelPageShimmer = () => {
    const darkTheme = useSelector((store) => store.theme.darkTheme);

  return (
    <div
    className={`channelPage  w-full min-h-screen  pt-12 md:pt-16  ${
      darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
    } md:flex md:justify-end`}
  >
    <div className="w-full md:w-[calc(100%-78px)] h-w-[calc(100%-70px)]  ">
      <div
        className={`channelBanner w-full h-[16.5vw] md:h-[16.1vw]  xl:h-[205px] ${
          darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
        }  animate-pulse`}
      ></div>

      <div className=" flex flex-col w-full md:w-[90%] m-auto ">
        <div
          className={`channelInfo w-full flex items-center md:items-start md:mt-5 flex-col  sm:flex-row `}
        >
          <div className="left sm:w-[20%] md:w-[15%] sm:flex sm:justify-end ">
            <div className="w-14 h-14 sm:w-32 sm:h-32  mt-3 sm:mt-0">
              <div
                className={`w-full h-full rounded-full  ${
                  darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
                }  animate-pulse`}
              ></div>
            </div>
          </div>
          <div className="right   w-full  sm:w-[80%] md:w-[85%]  flex items-center sm:items-start md:items-center  flex-col md:flex-row sm:pl-4">
            <div className="innerLeft w-[80%] flex items-center sm:items-start md:w-[85%] flex-col">
              <div
                className={` ${
                  darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
                }  animate-pulse h-7 rounded-xl text-2xl mt-2 sm:mt-3 w-[50%] flex justify-center sm:justify-start font-bold`}
              ></div>
              <div
                className={`w-[90%]  ${
                  darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
                }  animate-pulse h-5 rounded-md flex justify-center sm:justify-start gap-2 mt-2 sm:mt-3`}
              ></div>
              <div
                className={`w-full  ${
                  darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
                }  animate-pulse h-12 rounded-lg flex  mt-2 sm:mt-3  items-center`}
              ></div>
            </div>
            <div className="innerRight w-full md:w-[15%] flex items-center justify-center sm:justify-start md:justify-center">
              <div
                className={`subscribeBtn w-[90%] sm:w-48 md:w-24 h-9 mt-2  font-medium text-sm cursor-pointer  rounded-full flex items-center justify-center my-2  ${
                  darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
                }  animate-pulse`}
              ></div>
            </div>
          </div>
        </div>
        <div
          className={`w-full pt-2 ${
            darkTheme ? "bg-[#272727] md:bg-[#0f0f0f]" : "bg-white"
          }`}
        >
          <div
            className={`w-full h-12 flex ${
              darkTheme
                ? "border-b md:border-y-2 border-[rgba(255,255,255,0.2)]"
                : "border-b md:border-y-2 border-[rgba(0,0,0,0.1)]"
            }  ${
              darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
            }  animate-pulse`}
          ></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ChannelPageShimmer
