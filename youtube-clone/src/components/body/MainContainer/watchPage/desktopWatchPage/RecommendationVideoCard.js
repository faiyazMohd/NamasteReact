import React, { useEffect, useState } from "react";
import MoreSettingIcon from "../../../../../assets/icons/svgs/SvgComponents/MoreSettingIcon";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  daysAgo,
  preetifyDuration,
  preetifyViews,
} from "../../../../../utils/helper/helper";
import ShimmerRecommendation from "./ShimmerRecommendation";

const RecommendationVideoCard = ({ item }) => {
  const [videoDetails, setVideoDetails] = useState(null);
  const [isHover, setIsHover] = useState(false);
  const [channelDetails, setchannelDetails] = useState([]);

  const darkTheme = useSelector((store) => store.theme.darkTheme);
  // console.log(item);
  // console.log(item?.snippet?.thumbnails?.medium?.url);
  const getVideoData = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${item?.id?.videoId}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    );
    const json = await data.json();
    setVideoDetails(json?.items[0]);
    // console.log(json);
  };
  const channelImgUrl =
    "https://yt3.ggpht.com/D8uGTY8fLYo42IK9S_ahqO2u9NAkWEdbAswFM-OcCVNHVmgo0lYx0Pgq6WimdNvxDbw31U-6cA=s88-c-k-c0x00ffffff-no-nd-rj";
  // const channelImgUrl = channelDetails?.snippet?.thumbnails?.default?.url
  // console.log(item);
  const getChannelData = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CtopicDetails%2Cstatus%2CcontentDetails%2Clocalizations%2Cstatistics%2CtopicDetails%2CbrandingSettings%2CcontentOwnerDetails&id=${item?.snippet?.channelId}&key=` +
        process.env.REACT_APP_GOOGLE_API_KEY
    );
    const json = await data.json();
    // console.log(json);
    setchannelDetails(json.items[0]);
  };
  useEffect(() => {
    // getChannelData();
    getVideoData();
  }, []);

  return videoDetails ? (
    <>
      <div
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
        className={`w-full h-[94px]  hidden cursor-pointer mt-3 md:flex`}
      >
        <div className={`thumbnail w-[168px] h-full  relative `}>
          <div className="w-full h-full">
            <Link to={"/watch?v=" + videoDetails?.id}>
              <img
                className="w-full rounded-lg object-cover"
                src={videoDetails?.snippet?.thumbnails?.medium?.url}
                alt="thumbnail"
                srcset=""
              />
            </Link>
            <Link to={"/watch?v=" + videoDetails?.id}>
              <div className="duration bg-[rgba(0,0,0,0.8)] rounded text-white h-3 right-1 bottom-1 w-fit flex justify-center items-center absolute px-1 py-2">
                <span className=" text-xs font-medium tracking-wide">
                  {preetifyDuration(videoDetails?.contentDetails?.duration)}
                </span>
              </div>
            </Link>
          </div>
        </div>

        <div className="infoContainer w-[226px] h-full flex">
          <div className="w-[202px]">
            <Link to={"/watch?v=" + videoDetails?.id}>
              <div
                className={`title h-10 pl-1.5   line-clamp-2 text-sm  font-medium 
       ${darkTheme ? "text-[#f1f1f1]" : "text-[#4e4e4e]"}   `}
              >
                {videoDetails.snippet.title}
              </div>
            </Link>

            {/* from medium devices */}

            <div
              className={`channelName pl-1.5  block line-clamp-1 font-medium  mt-1  ${
                darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
              }   text-xs `}
            >
              <Link to={"/watch?v=" + videoDetails?.id}>
                {videoDetails?.snippet?.channelTitle}
              </Link>
            </div>

            <div className="viewsContainer  flex">
              <div
                className={`viewCount pl-1.5 ${
                  darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
                } font-medium text-xs `}
              >
                <Link to={"/watch?v=" + item?.id}>
                  {preetifyViews(videoDetails?.statistics?.viewCount) +
                    " views"}
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
                <Link to={"/watch?v=" + videoDetails?.id}>
                  {daysAgo(videoDetails?.snippet?.publishedAt)}
                </Link>
              </div>
            </div>
          </div>

          {/* from medium devices */}
          <div className="w-6 flex justify-center ">
            {isHover && (
              <div
                onClick={(e) => e.stopPropagation()}
                className={`rounded-full px-[5px]   py-[5px]  h-9 cursor-pointer ${
                  darkTheme ? "active:bg-[#ffffff1a]" : "active:bg-[#f2f2f2]"
                } `}
              >
                <MoreSettingIcon color={darkTheme ? "#fff" : "#000"} />
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
        className={`w-full md:hidden  sm:w-[45%] mt-5    cursor-pointer `}
      >
        <div className={`thumbnail w-full h-[56vw] sm:h-[25.5vw] relative `}>
          <div className=" md:hidden">
            <Link to={"watch?v=" + videoDetails?.id}>
              <img
                className="w-full h-fit  sm:rounded-xl object-cover"
                src={videoDetails?.snippet?.thumbnails?.medium?.url}
                alt="thumbnail"
                srcset=""
              />
            </Link>
            <Link to={"watch?v=" + videoDetails?.id}>
              <div className="duration bg-[rgba(0,0,0,0.8)] rounded text-white h-3 right-1 bottom-1.5 w-fit flex justify-center items-center absolute px-1.5 py-2">
                <span className=" text-xs font-medium tracking-wide">
                  {preetifyDuration(videoDetails?.contentDetails?.duration)}
                </span>
              </div>
            </Link>
          </div>
        </div>

        <div className="infoContainer my-2 mt-3 flex">
          <div className="channelImg pt-1 flex justify-end items-start md:block w-[12%]  md:w-[10%]">
            <Link to={"watch?v=" + videoDetails?.id}>
              <img
                className="w-10 rounded-full"
                src={channelImgUrl}
                alt="channelName"
                srcset=""
              />
            </Link>
          </div>
          <div className="w-[80%] md:w-[80%] ">
            <Link to={"watch?v=" + videoDetails?.id}>
              <div
                className={`title ml-3 text-base leading-5  line-clamp-2 md:text-base font-medium 
           ${darkTheme ? "text-[#f1f1f1]" : "text-[#4e4e4e]"}   `}
              >
                {videoDetails.snippet.title}
              </div>
            </Link>
            {/* for small divice */}
            <div className="line-clamp-2  pl-3 md:hidden w-full mt-1">
              <Link to={"watch?v=" + videoDetails?.id}>
                <div
                  className={`leading-4  line-clamp-2 ${
                    darkTheme ? "text-[#969696]" : "text-[#737373]"
                  }  text-[.8rem]`}
                >
                  {videoDetails?.snippet?.channelTitle} • {preetifyViews(videoDetails?.statistics?.viewCount) + " views"} •{" "}
                  {daysAgo(videoDetails?.snippet?.publishedAt)}
                </div>
              </Link>
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
            {isHover && (
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
    </>
  ) : (
    <ShimmerRecommendation />
  );
};

export default RecommendationVideoCard;
