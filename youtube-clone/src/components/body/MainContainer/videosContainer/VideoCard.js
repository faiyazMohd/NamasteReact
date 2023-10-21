import React, { useState, useEffect } from "react";
import MoreSettingIcon from "../../../../assets/icons/svgs/SvgComponents/MoreSettingIcon";
import {
  preetifyViews,
  daysAgo,
  preetifyDuration,
} from "../../../../utils/helper/helper";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { YOUTUBE_API_CHANNEL_DETAILS } from "../../../../utils/constants/constants";
const VideoCard = ({ item }) => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  const showSidebar = useSelector((store) => store.app.showSidebar);
  const [isHoverTitle, setIsHoverTitle] = useState(false);
  const [isHoverThumbnail, setIsHoverThumbnail] = useState(false);
  const [timer, setTimer] = useState(null);
  const [channelDetails, setchannelDetails] = useState(null);
  const { id, snippet, statistics, contentDetails } = item;
  const { title, thumbnails, channelTitle, publishedAt, channelId } = snippet;
  const { viewCount } = statistics;
  const { duration } = contentDetails;
  // console.log(duration);
  // const channelImgUrl =
  //   "https://yt3.ggpht.com/D8uGTY8fLYo42IK9S_ahqO2u9NAkWEdbAswFM-OcCVNHVmgo0lYx0Pgq6WimdNvxDbw31U-6cA=s88-c-k-c0x00ffffff-no-nd-rj";
  // const channelImgUrl = channelDetails?.snippet?.thumbnails?.default?.url
  // console.log(item);
  const getChannelData = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CtopicDetails%2Cstatus%2CcontentDetails%2Clocalizations%2Cstatistics%2CtopicDetails%2CbrandingSettings%2CcontentOwnerDetails&id=${channelId}&key=` +
        process.env.REACT_APP_GOOGLE_API_KEY
    );
    const json = await data.json();
    // console.log(json);
    setchannelDetails(json.items[0]);
  };
  useEffect(() => {
    getChannelData();
  }, []);
  return (
    <div
      className={`w-full  sm:w-[45%]  md:w-[31.69%]  2xl:w-[23.69%]    cursor-pointer `}
    >
      <div
        onMouseEnter={() => {
          setTimer(
            setTimeout(() => {
              setIsHoverThumbnail(true);
            }, 1000)
          );
          // console.log("Mouse over img");
        }}
        onMouseLeave={() => {
          clearTimeout(timer);
          setIsHoverThumbnail(false);
          // console.log("Mouse out img");
        }}
        className={`thumbnail  w-full h-[56vw] sm:h-[25.5vw] md:h-[16.5vw] ${
          showSidebar
            ? "xl:h-[14.5vw] 2xl:h-[11vw]"
            : "xl:h-[16.6vw] 2xl:h-[12.5vw]"
        } relative `}
      >
        <div className=" md:hidden">
          <Link to={"watch?v=" + id}>
            <img
              className="w-full h-fit  sm:rounded-xl object-cover"
              src={thumbnails?.medium?.url}
              loading="lazy"
              alt="thumbnail"
              srcset=""
            />
          </Link>
          <Link to={"watch?v=" + id}>
            <div className="duration bg-[rgba(0,0,0,0.8)] rounded text-white h-3 right-1 bottom-1.5 w-fit flex justify-center items-center absolute px-1.5 py-2">
              <span className=" text-xs font-medium tracking-wide">
                {preetifyDuration(duration)}
              </span>
            </div>
          </Link>
        </div>
        {isHoverThumbnail ? (
          <div className="w-full h-full hidden md:block">
            <iframe
              className="w-full h-full"
              src={
                "https://www.youtube-nocookie.com/embed/" +
                id +
                "?autoplay=1&mute=1"
              }
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        ) : (
          <div className="hidden md:block">
            <Link to={"watch?v=" + id}>
              <img
                className="w-full h-fit  sm:rounded-xl object-cover"
                src={thumbnails?.medium?.url}
                alt="thumbnail"
                loading="lazy"
                srcset=""
              />
            </Link>
            <Link to={"watch?v=" + id}>
              <div className="duration bg-[rgba(0,0,0,0.8)] rounded text-white h-3 right-1 bottom-1.5 w-fit flex justify-center items-center absolute px-1.5 py-2">
                <span className=" text-xs font-medium tracking-wide">
                  {preetifyDuration(duration)}
                </span>
              </div>
            </Link>
          </div>
        )}
      </div>

      <div
        onMouseOver={() => setIsHoverTitle(true)}
        onMouseOut={() => setIsHoverTitle(false)}
        className="infoContainer my-2 mt-3 flex"
      >
        <div className="channelImg pt-1 flex justify-end items-start md:block w-[12%]  md:w-[10%]">
          <Link to={"channel/" + channelId}>
            {channelDetails ? (
              <img
                className="w-10 rounded-full"
                src={channelDetails?.snippet?.thumbnails?.default?.url}
                alt="channelName"
                srcset=""
                loading="lazy"
              />
            ) : (
              <div
                className={`w-10 h-10 ${
                  darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
                }  rounded-full animate-pulse`}
              ></div>
            )}
          </Link>
        </div>
        <div className="w-[80%] md:w-[80%] ">
          <Link to={"watch?v=" + id}>
            <div
              className={`title ml-3 text-base leading-5  line-clamp-2 md:text-base font-medium 
           ${darkTheme ? "text-[#f1f1f1]" : "text-[#4e4e4e]"}   `}
            >
              {title}
            </div>
          </Link>
          {/* for small divice */}
          <div className="line-clamp-2  pl-3 md:hidden w-full mt-1">
            {/* <Link to={"watch?v=" + id}> */}
            <div
              className={`leading-4  line-clamp-2 ${
                darkTheme ? "text-[#969696]" : "text-[#737373]"
              }  text-[.8rem] flex`}
            >
              <Link
                className={`leading-4  line-clamp-2 ${
                  darkTheme ? "text-[#969696]" : "text-[#737373]"
                }  text-[.8rem] mr-1`}
                to={"channel/" + channelId}
              >
                {channelTitle}
              </Link>
              <Link
                className={`leading-4  line-clamp-2 ${
                  darkTheme ? "text-[#969696]" : "text-[#737373]"
                }  text-[.8rem] flex`}
                to={"watch?v=" + id}
              >
                {" "}
                • {preetifyViews(viewCount) + " views "} •{" "}
                {daysAgo(publishedAt)}
              </Link>
            </div>
            {/* </Link> */}
          </div>

          {/* from medium devices */}

          <div
            className={`channelName ml-3 hidden md:block md:line-clamp-1  md:mt-1  ${
              darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
            } md:font-medium md:text-[.9rem] leading-4`}
          >
            <Link to={"channel/" + channelId}>{channelTitle}</Link>
          </div>

          <div className="viewsContainer  hidden md:flex">
            <div
              className={`viewCount ml-3 ${
                darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
              } font-medium text-[.9rem] `}
            >
              <Link to={"watch?v=" + id}>
                {preetifyViews(viewCount) + " views"}
              </Link>
            </div>
            <div
              className={`mx-1 ${
                darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
              } font-medium text-[.9rem]`}
            >
              •
            </div>
            <div
              className={`daysago  ${
                darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
              } font-medium text-[.9rem]`}
            >
              <Link to={"watch?v=" + id}>{daysAgo(publishedAt)}</Link>
            </div>
          </div>
        </div>

        {/* for small devices */}
        <div className="  md:hidden w-[8%] md:w-[10%] overflow-visible">
          <div
            className={`rounded-full p-[3px]  ${
              darkTheme ? "active:bg-[#ffffff1a]" : "active:bg-[#f2f2f2]"
            } `}
          >
            <MoreSettingIcon color={darkTheme ? "#fff" : "#000"} />
          </div>
        </div>
        {/* from medium devices */}
        <div className="hidden md:block w-[8%] md:w-[10%] overflow-visible">
          {isHoverTitle && (
            <div
              onClick={(e) => e.stopPropagation()}
              className={`rounded-full px-[6px]   py-[5px] cursor-pointer ${
                darkTheme ? "active:bg-[#ffffff1a]" : "active:bg-[#f2f2f2]"
              } `}
            >
              <MoreSettingIcon color={darkTheme ? "#fff" : "#000"} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
