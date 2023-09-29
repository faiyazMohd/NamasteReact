import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import MoreSettingIcon from "../../../../assets/icons/svgs/SvgComponents/MoreSettingIcon";
import { preetifyDuration } from "../../../../utils/helper/helper";
import ChannelVideoCard from "./ChannelVideoCard";
import ShimmerRecommendation from "../watchPage/desktopWatchPage/ShimmerRecommendation";
import ShimmerVideoCard from "../videosContainer/ShimmerVideoCard";

const HomeSection = () => {
  const [channelVideos, setChannelVideos] = useState(null);
  const channelDetails = useSelector((store) => store.content.channelDetails);
  const darkTheme = useSelector((store) => store.theme.darkTheme);

  console.log(channelDetails);
  // console.log(channelDetails?.contentDetails?.relatedPlaylists?.uploads);
  // console.log(channelVideos?.error);
  useEffect(() => {
    if (channelDetails) {
      getChannelVideos();
    }
  }, [channelDetails]);

  const getChannelVideos = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cstatus&maxResults=15&playlistId=${channelDetails?.contentDetails?.relatedPlaylists?.uploads}&key=` +
        process.env.REACT_APP_GOOGLE_API_KEY
    );
    const json = await data.json();
    console.log(json);
    setChannelVideos(json?.items ? json?.items : json);
  };

  return channelVideos ? (
    channelVideos.error?.errors[0]?.reason === "playlistNotFound" ? (
      <div className="flex justify-center mt-3">
        This channel doesn't have any content
      </div>
    ) : (
      <div className="w-[93%] m-auto md-w-full md:flex md:flex-wrap md:gap-4 md:mt-4">
        {channelVideos?.map((item) => {
          return (
            <ChannelVideoCard key={item.contentDetails?.videoId} item={item} />
          );
        })}
      </div>
    )
  ) : (
    <>
      <div className="w-[95%] m-auto md:hidden">
        {Array(10)
          .fill("")
          .map((shimmer, index) => {
            return <ShimmerRecommendation key={index} />;
          })}
      </div>
      <div className="w-[95%] m-auto hidden md:flex md:flex-wrap md:gap-2 md:justify-center mt-5">
        {Array(10)
          .fill("")
          .map((shimmer, index) => {
            return <ShimmerVideoCard key={index} />;
          })}
      </div>
    </>
  );
};

export default HomeSection;
