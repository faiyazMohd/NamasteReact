import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { modifyChannelDetails } from "../../../../utils/store/contentSlice";
import {
  preetifySubcribers,
  preetifyViews,
} from "../../../../utils/helper/helper";
import DownArrowIcon from "../../../../assets/icons/svgs/SvgComponents/DownArrowIcon";
import YouTubeLogo from "../../../../assets/icons/svgs/SvgComponents/YouTubeLogo";

const ChannelPage = () => {
  const [channelDetails, setChannelDetails] = useState(null);
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  const showSidebar = useSelector((store) => store.app.showSidebar);

  const channelId = useParams().channelId;
  const path = useLocation();
  const dispatch = useDispatch();
  console.log(channelId);

  useEffect(() => {
    getChannelData();
  }, [channelId]);
  const getChannelData = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CtopicDetails%2Cstatus%2CcontentDetails%2Clocalizations%2Cstatistics%2CtopicDetails%2CbrandingSettings%2CcontentOwnerDetails&id=${channelId}&key=` +
        process.env.REACT_APP_GOOGLE_API_KEY
    );
    const json = await data.json();
    console.log(json);
    console.log(json?.items[0]?.contentDetails?.relatedPlaylists?.uploads);
    document.title = json?.items[0]?.snippet?.title + " - YouTube";
    dispatch(modifyChannelDetails(json?.items[0]));
    setChannelDetails(json?.items[0]);
  };
  console.log(channelDetails?.brandingSettings?.image?.bannerExternalUrl);
  const regexPlaylist = /\/playlist$/;
  const regexAbout = /\/about$/;

  return channelDetails ? (
    <div
      className={`channelPage  w-full min-h-screen  pt-12 md:pt-16 pb-16  ${
        darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
      } md:flex md:justify-end  ${showSidebar ? "xl:w-[88%]" : ""}`}
    >
      <div className="w-full md:w-[calc(100%-78px)] h-w-[calc(100%-70px)]  ">
        {channelDetails?.brandingSettings?.image ? (
          <div className="channelBanner w-full h-[16.5vw] md:h-[16.1vw]  xl:h-[205px]">
            <img
              className="w-full h-full object-cover"
              src={channelDetails?.brandingSettings?.image?.bannerExternalUrl}
              alt=""
            />
          </div>
        ) : (
          ""
        )}

        <div className=" flex flex-col w-full md:w-[90%] m-auto ">
          <div
            className={`channelInfo w-full flex items-center md:items-start md:mt-5 flex-col  sm:flex-row ${
              darkTheme ? "bg-[#272727] md:bg-[#0f0f0f]" : "bg-white"
            }`}
          >
            <div className="left sm:w-[20%] md:w-[15%] sm:flex sm:justify-end ">
              <div className="w-14 sm:w-32  mt-3 sm:mt-0">
                <img
                  className="w-full rounded-full"
                  src={channelDetails?.snippet?.thumbnails?.default?.url}
                  alt=""
                />
              </div>
            </div>
            <div className="right sm:w-[80%] md:w-[85%]  flex items-center sm:items-start md:items-center  flex-col md:flex-row sm:pl-4">
              <div className="innerLeft flex items-center sm:items-start md:w-[85%] flex-col">
                <div className="text-2xl mt-2 sm:mt-3 w-[90%] flex justify-center sm:justify-start font-bold">
                  {channelDetails?.snippet?.title}
                </div>
                <div className="w-[90%] flex justify-center sm:justify-start gap-2 mt-2 sm:mt-3">
                  <div
                    className={`subcribers viewCount  ${
                      darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
                    } font-medium text-sm leading-3 line-clamp-1`}
                  >
                    {channelDetails?.snippet?.customUrl}
                  </div>
                  <div className="subcribersCount">
                    <div
                      className={`subcribers viewCount  ${
                        darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
                      } font-medium text-sm leading-3 line-clamp-1`}
                    >
                      {preetifySubcribers(
                        channelDetails?.statistics?.subscriberCount
                      )}{" "}
                      subscribers
                    </div>
                  </div>
                  <div className="subcribersCount">
                    <div
                      className={`subcribers viewCount  ${
                        darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
                      } font-medium text-sm leading-3 line-clamp-1`}
                    >
                      {channelDetails?.statistics?.videoCount == 0
                        ? "No "
                        : preetifyViews(
                            channelDetails?.statistics?.videoCount
                          )}{" "}
                      videos
                    </div>
                  </div>
                </div>
                <div className="w-[90%] cursor-pointer flex  mt-2 sm:mt-3  items-center">
                  <div className="w-[90%]  flex items-center">
                    <Link to="about">
                      <pre
                        className={`text-sm font-sans ${
                          darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
                        } font-medium line-clamp-2 sm:line-clamp-1 whitespace-pre-wrap`}
                      >
                        {channelDetails?.snippet?.description.length === 0
                          ? "More about this channel"
                          : channelDetails?.snippet?.description}
                      </pre>
                    </Link>
                  </div>
                  <div
                    className={`font-medium text-sm  w-[10%] flex justify-center items-center  ${
                      darkTheme
                        ? " active:bg-[#575656]"
                        : "  active:bg-[#e5e3e3]"
                    }}  `}
                  >
                    <Link to="about">
                      <div className="-rotate-90">
                        <DownArrowIcon color={darkTheme ? "#fff" : "#000"} />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="innerRight w-full md:w-[15%] flex items-center justify-center sm:justify-start md:justify-center">
                <div
                  className={`subscribeBtn w-[90%] sm:w-48 md:w-24 h-9 mt-2  font-medium text-sm cursor-pointer  rounded-full flex items-center justify-center ${
                    darkTheme
                      ? "bg-white hover:bg-[#e9e7e7] active:bg-[#c7c5c5] text-black"
                      : "bg-black hover:bg-[#232323] active:bg-[#3f3f3f] text-white"
                  }`}
                >
                  <div className=" w-6 mr-1 md:hidden">
                    <YouTubeLogo color={!darkTheme ? "#fff" : "#000"} />
                  </div>

                  <div className="">Subscribe</div>
                </div>
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
                  ? "border-b md:border-b-2 border-[rgba(255,255,255,0.2)]"
                  : "border-b md:border-b-2 border-[rgba(0,0,0,0.1)]"
              }`}
            >
              <Link
                to={""}
                className={`w-1/3 md:w-32  h-full ${
                  !regexPlaylist.test(path.pathname) &&
                  !regexAbout.test(path.pathname)
                    ? darkTheme
                      ? "border-b md:border-b-2 border-white"
                      : "border-b md:border-b-2 border-black"
                    : ""
                }  flex justify-center items-center font-medium`}
              >
                Home
              </Link>
              <Link
                to={"playlist"}
                className={`w-1/3 md:w-32 h-full ${
                  regexPlaylist.test(path.pathname)
                    ? darkTheme
                      ? "border-b md:border-b-2 border-white"
                      : "border-b md:border-b-2 border-black"
                    : ""
                }  flex justify-center items-center font-medium`}
              >
                Playlist
              </Link>
              <Link
                to={"about"}
                className={`w-1/3 md:w-32 h-full ${
                  regexAbout.test(path.pathname)
                    ? darkTheme
                      ? "border-b md:border-b-2 border-white"
                      : "border-b md:border-b-2 border-black"
                    : ""
                }  flex justify-center items-center font-medium`}
              >
                About
              </Link>
            </div>
          </div>
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  ) : (
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
  );
};

export default ChannelPage;
