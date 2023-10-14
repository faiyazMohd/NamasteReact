import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  preetifyDuration,
  preetifySubcribers,
} from "../../../../utils/helper/helper";

const ChannelCard = ({ item }) => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  const [channelDetails, setChannelDetails] = useState(null);
  const getChannelData = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CtopicDetails%2Cstatus%2CcontentDetails%2Clocalizations%2Cstatistics%2CtopicDetails%2CbrandingSettings%2CcontentOwnerDetails&id=${item?.snippet?.channelId}&key=` +
        process.env.REACT_APP_GOOGLE_API_KEY
    );
    const json = await data.json();
    console.log(json);
    setChannelDetails(json.items[0]);
  };
  useEffect(() => {
    getChannelData();
  }, [item.id.videoId]);
  return channelDetails ? (
    <>
      <div
        className={`w-full my-1 h-[127px] border-y-[6px]    ${
          darkTheme ? "border-[#ffffff33]" : "border-[#0000001a]"
        } flex  items-center   md:hidden`}
      >
        <div className="w-full h-[95px] flex items-center ">
          <div className="channelImg w-40 flex items-center justify-center  h-full">
            <Link to={"/channel/" + item?.snippet?.channelId}>
              <img
                className="w-[67px] h-[67px] rounded-full"
                src={channelDetails?.snippet?.thumbnails?.default?.url}
                alt="channelName"
                srcset=""
              />
            </Link>
          </div>
          <div className="channelInfo  h-full  w-[calc(100%-160px)]">
            <div className="channelNameContainer  pb-2">
              <div className="channelName line-clamp-1 text-sm leading- font-medium">
                <Link to={"/channel/" + item?.snippet?.channelId}>
                  {channelDetails?.snippet?.title}
                </Link>
              </div>
              <div
                className={`subcribers viewCount  ${
                  darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
                } font-medium text-xs leading-3 line-clamp-1`}
              >
                {channelDetails?.snippet?.customUrl}
              </div>
              <div className="subcribersCount">
                <div
                  className={`subcribers viewCount  ${
                    darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
                  } font-medium text-xs leading-3 line-clamp-1`}
                >
                  {preetifySubcribers(
                    channelDetails?.statistics?.subscriberCount
                  )}{" "}
                  subscribers
                </div>
              </div>
            </div>
            <div
              className={`subscribeBtn w-24 h-9  font-medium text-sm cursor-pointer  rounded-full flex items-center justify-center ${
                darkTheme
                  ? "bg-white hover:bg-[#e9e7e7] active:bg-[#c7c5c5] text-black"
                  : "bg-black hover:bg-[#232323] active:bg-[#3f3f3f] text-white"
              }`}
            >
              Subscribe
            </div>
          </div>
        </div>
      </div>

      {/* from medium devices */}
      <div
        className={` md:w-full  lg:w-[1024px] xl:w-[1096px] my-2 h-[180px] border-y-[1px]    ${
          darkTheme ? "border-[#ffffff33]" : "border-[#0000001a]"
        } items-center hidden  md:flex`}
      >
        <div className="w-full h-[136px] flex items-center justify-between ">
          <div className="channelImg md:w-[360px] xl:w-[384px] flex items-center justify-center   h-full">
            <Link to={"/channel/" + item?.snippet?.channelId}>
              <img
                className="w-[136px] h-[136px] rounded-full"
                src={channelDetails?.snippet?.thumbnails?.default?.url}
                alt="channelName"
                srcset=""
              />
            </Link>
          </div>
          <div className="channelInfo  h-full  md:w-[calc(100%-370px)]  xl:w-[720px] flex ">
            <div className="channelNameContainer h-full w-[625.44px] ">
              <div className="channelName line-clamp-1 text-base  font-medium">
                <Link to={"/channel/" + item?.snippet?.channelId}>
                  {channelDetails?.snippet?.title}
                </Link>
              </div>
              <div className="viewsContainer mt-2 flex">
                <div
                  className={`viewCount  ${
                    darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
                  } font-medium text-xs `}
                >
                  <Link to={"/channel/" + item?.snippet?.channelId}>
                    {channelDetails?.snippet?.customUrl}
                  </Link>
                </div>
                <div
                  className={`mx-1 ${
                    darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
                  } font-medium text-xs`}
                >
                  •
                </div>
                <div
                  className={`daysago  ${
                    darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
                  } font-medium text-xs`}
                >
                  <Link to={"/channel/" + item?.snippet?.channelId}>
                    {preetifySubcribers(
                      channelDetails?.statistics?.subscriberCount
                    )}{" "}
                    subscribers
                  </Link>
                </div>
              </div>
              <div
                className={`channelDescription   line-clamp-2 h-8 font-medium  my-2  ${
                  darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
                }   text-xs `}
              >
                <Link to={"/channel/" + item?.snippet?.channelId}>
                  {item?.snippet?.description}
                </Link>
              </div>
            </div>
            <div className=" xl:w-[94.56px] h-full  flex justify-center items-center">
              <div
                className={`subscribeBtn w-24 h-9  font-medium text-sm cursor-pointer  rounded-full flex items-center justify-center ${
                  darkTheme
                    ? "bg-white hover:bg-[#e9e7e7] active:bg-[#c7c5c5] text-black"
                    : "bg-black hover:bg-[#232323] active:bg-[#3f3f3f] text-white"
                }`}
              >
                Subscribe
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div
        className={`w-full h-[127px] border-y-[6px]    ${
          darkTheme ? "border-[#ffffff33]" : "border-[#0000001a]"
        } flex  items-center   md:hidden`}
      >
        <div className="w-full h-[95px] flex items-center ">
          <div className="channelImg w-40 flex items-center justify-center   h-full">
            <div
              className={`w-[67px] h-[67px] rounded-full ${
                darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
              }   animate-pulse`}
            ></div>
          </div>
          <div className="channelInfo  h-full  w-[calc(100%-160px)]">
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
        </div>
      </div>

      <div
        className={`w-[1096px] h-[180px] border-y-[1px]    ${
          darkTheme ? "border-[#ffffff33]" : "border-[#0000001a]"
        } items-center hidden  md:flex`}
      >
        <div className="w-full h-[136px] flex items-center justify-between ">
          <div className="channelImg w-[384px] flex items-center justify-center   h-full">
            <div
              className={`w-[136px] h-[136px] rounded-full ${
                darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
              }   animate-pulse`}
            ></div>
          </div>
          <div className="channelInfo  h-full  w-[720px] flex ">
            <div className="channelNameContainer h-full w-[625.44px] ">
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
            <div className="w-[94.56px] h-full  flex justify-center items-center">
              <div
                className={`subscribeBtn w-24 h-9  font-medium text-sm cursor-pointer  rounded-full flex items-center justify-center ${
                  darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
                }   animate-pulse`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChannelCard;
