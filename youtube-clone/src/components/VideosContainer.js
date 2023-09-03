import React, { useEffect, useState } from "react";
import { YOUTUBE_API_POPULAR_VIDEO_URL } from "../utils/constants/constants";
import ButtonList from "./ButtonList";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";

const VideosContainer = () => {
  const [allVideos, setAllVideos] = useState([]);
  const showSidebar = useSelector((store)=>store.app.showSidebar)
  const locationCode = useSelector((store)=>store.app.locationCode)
  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationCode]);
  const getData = async () => {
    const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=${locationCode}&maxResults=50&key=${process.env.REACT_APP_GOOGLE_API_KEY}`);
    // const data = await fetch(YOUTUBE_API_POPULAR_VIDEO_URL);
    console.log(data);
    const json = await data.json();
    console.log(json);

    setAllVideos(json);
  };
  return (
    <div
      className={`right w-full md:w-[93%]  ${
        showSidebar ? "xl:w-[82%]" : ""
      }  `}
    >
      <ButtonList />
      <div className="videoContainer  mt-14 md:mt-20 mb-16 md:mb-0 flex sm:justify-center md:justify-normal  flex-wrap gap-2  md:gap-5  ">
        {allVideos?.length !== 0
          ? allVideos.items?.map((video) => {
              return <VideoCard key={video?.id} item={video} />;
            })
          : ""}
      </div>
    </div>
  );
};

export default VideosContainer;
