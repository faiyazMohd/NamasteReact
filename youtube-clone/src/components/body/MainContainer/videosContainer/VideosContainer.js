import React, { useEffect, useState } from "react";
import { YOUTUBE_API_POPULAR_VIDEO_URL } from "../../../../utils/constants/constants";
import ButtonList from "./ButtonList";
import VideoCard from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";
import OfflinePage from "../../../others/OfflinePage";
import useOnline from "../../../../utils/hooks/useOnline";
import ShimmerVideoCard from "./ShimmerVideoCard";
import { Link } from "react-router-dom";
const VideosContainer = () => {
  const [allVideos, setAllVideos] = useState(null);
  const showSidebar = useSelector((store) => store.app.showSidebar);
  const locationCode = useSelector((store) => store.app.locationCode);
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  const dispatch = useDispatch();
  const getData = async () => {
    // debugger;
    // console.log("inside  getData");

    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=${locationCode}&maxResults=50&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    );
    // const data = await fetch(YOUTUBE_API_POPULAR_VIDEO_URL);
    // console.log(data);
    const json = await data.json();
    // console.log(json);
    setAllVideos(json);
  };
  useEffect(() => {
    getData();
  }, [locationCode]);

  // console.log("Videos Container rendered");
  const isOnline = useOnline();
  if (!isOnline) {
    return <OfflinePage />;
  }

  return (
    <>
      <div
        className={`right mt-12 w-full md:w-[93%]  ${
          darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
        }   ${showSidebar ? "xl:w-[82%]" : ""}  `}
      >
        <ButtonList />
        <div
          className={`videoContainer  mt-14 md:mt-20 mb-16 md:mb-0 flex sm:justify-center flex-wrap gap-2  md:justify-normal   md:gap-5   ${
            darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
          }  `}
        >
          {!allVideos || allVideos?.error
            ? Array(12)
                .fill("")
                .map((shimmerCard, index) => {
                  return <ShimmerVideoCard key={index} />;
                })
            : allVideos.items?.map((video) => {
                return <VideoCard key={video?.id} item={video} />;
              })}
        </div>
      </div>
    </>
  );
};

export default VideosContainer;
