import React, { useState } from "react";
import MoreSettingIcon from "../assets/icons/svgs/SvgComponents/MoreSettingIcon";
import { preetifyViews, daysAgo } from "../utils/helper/helper";
const VideoCard = ({ item }) => {
  const [isHover, setIsHover] = useState(false);
  const { snippet, statistics } = item;
  const { title, thumbnails, channelTitle, publishedAt } = snippet;
  const { viewCount } = statistics;
  const channelImgUrl =
    "https://yt3.ggpht.com/D8uGTY8fLYo42IK9S_ahqO2u9NAkWEdbAswFM-OcCVNHVmgo0lYx0Pgq6WimdNvxDbw31U-6cA=s88-c-k-c0x00ffffff-no-nd-rj";
  // console.log(item);
  return (
    <div className={`w-full sm:w-[45%]  md:w-[31.69%]  2xl:w-[23.69%]    cursor-pointerf `}>
      <div className="thumbnail w-full ">
        
        <img
          className="w-full sm:rounded-xl object-cover"
          src={thumbnails?.medium?.url}
          alt="thumbnail"
          srcset=""
        />
      </div>
      <div
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
        className="infoContainer my-2 mt-3 flex"
      >
        <div className="channelImg pt-1 flex justify-end items-start md:block w-[12%]  md:w-[10%]">
          <img
            className="w-10 rounded-full"
            src={channelImgUrl}
            alt="channelName"
            srcset=""
          />
        </div>
        <div className="w-[80%] md:w-[80%] ">
          <div className="title ml-3 text-base leading-5  line-clamp-2 md:text-base font-medium text-[#4e4e4e]  ">
            {title}
          </div>
          {/* for small divice */}
          <div className="line-clamp-2  pl-3 md:hidden w-full mt-1">
            <div className="leading-4  line-clamp-2 text-[#737373]  text-[.8rem]">
              {channelTitle} • {preetifyViews(viewCount) + " views"} •{" "}
              {daysAgo(publishedAt)}
            </div>
          </div>

          {/* from medium devices */}
          <div className="channelName ml-3 hidden md:block md:line-clamp-1  md:mt-1 text-[#737373] md:font-medium md:text-[.9rem] leading-4">
            {channelTitle}
          </div>

          <div className="viewsContainer  hidden md:flex">
            <div className="viewCount ml-3 text-[#737373] font-medium text-[.9rem] ">
              {preetifyViews(viewCount) + " views"}
            </div>
            <div className="mx-1 text-[#737373] font-medium text-[.9rem]">•</div>
            <div className="daysago  text-[#737373] font-medium text-[.9rem]">
              {daysAgo(publishedAt)}
            </div>
          </div>
        </div>

        {/* for small devices */}
        <div className="  md:hidden w-[8%] md:w-[10%] overflow-visible">
          <div className="rounded-full p-[3px]  active:bg-[#f2f2f2]">
            <MoreSettingIcon />
          </div>
        </div>
        {/* from medium devices */}
        <div className="hidden md:block w-[8%] md:w-[10%] overflow-visible">
          {isHover && (
            <div className="rounded-full p-[5px] cursor-pointer active:bg-[#f2f2f2]">
              <MoreSettingIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
