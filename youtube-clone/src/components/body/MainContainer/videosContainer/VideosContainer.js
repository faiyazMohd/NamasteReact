import React, { useEffect, useState } from "react";
import { YOUTUBE_API_POPULAR_VIDEO_URL } from "../../../../utils/constants/constants";
import ButtonList from "./ButtonList";
import VideoCard from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";
import OfflinePage from "../../../others/OfflinePage";
import useOnline from "../../../../utils/hooks/useOnline";
import ShimmerVideoCard from "./ShimmerVideoCard";
import { Link } from "react-router-dom";
import useScrollEnd from "../../../../utils/hooks/useScrollEnd";
const VideosContainer = () => {
  const [allVideos, setAllVideos] = useState(null);
  const [isMorevideosLoading, setIsMorevideosLoading] = useState(false);
  const [fetchingErrors, setFetchingErrors] = useState(null);
  const showSidebar = useSelector((store) => store.app.showSidebar);
  const locationCode = useSelector((store) => store.app.locationCode);
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  const [nextPageToken, setNextPageToken] = useState("");
  const [categoryCode, setCategoryCode] = useState("0");
  const dispatch = useDispatch();
  const [isScrollEnd, setIsScrollEnd] = useScrollEnd();
  document.title = "YouTube"
  const getData = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=${locationCode}&maxResults=30&videoCategoryId=${categoryCode}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    );
    const json = await data.json();
    setNextPageToken(json ? json?.nextPageToken : "");
    console.log(categoryCode);
    console.log(json);
    if (json.error) {
      setFetchingErrors(json.error);
    }
    setAllVideos(json.error || !json ? [] : json?.items);
  };

  const getMoreData = async () => {
    setIsScrollEnd(false);
    setIsMorevideosLoading(true);
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=${locationCode}&maxResults=15&videoCategoryId=${categoryCode}&key=${process.env.REACT_APP_GOOGLE_API_KEY}&pageToken=${nextPageToken}`
    );
    const json = await data.json();
    setIsMorevideosLoading(false);
    setNextPageToken(json ? json?.nextPageToken : "");

    console.log(json);
    const moreVideos = json.error || !json ? [] : json?.items;

    setAllVideos([...allVideos, ...moreVideos]);
  };

  useEffect(() => {
    if (isScrollEnd) {
      if (nextPageToken) {
        getMoreData();
      }
    }
    return () => {};
  }, [isScrollEnd]);

  useEffect(() => {
    getData();
  }, [locationCode, categoryCode]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log(allVideos);

  const isOnline = useOnline();

  if (!isOnline) {
    return <OfflinePage />;
  }

  return (
    <>
      <div
        className={`right mt-12 pb-12 md:pb-0 w-full md:w-[93%]  ${
          darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
        }   ${showSidebar ? "xl:w-[82%]" : ""}  `}
      >
        <ButtonList
          categoryCode={categoryCode}
          setCategoryCode={setCategoryCode}
        />
        <div
          className={`videoContainer  mt-14 md:mt-20 mb-16 md:mb-0 flex sm:justify-center flex-wrap gap-2  md:justify-normal   md:gap-5   ${
            darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
          }  `}
        >
          {!allVideos ? (
            Array(15)
              .fill("")
              .map((shimmerCard, index) => {
                return <ShimmerVideoCard key={index} />;
              })
          ) : allVideos.length === 0 ? (
            Array(15)
              .fill("")
              .map((shimmerCard, index) => {
                return <ShimmerVideoCard key={index} />;
              })
          ) : (
            <>
              {allVideos?.map((video) => {
                return <VideoCard key={video?.id} item={video} />;
              })}
              {isMorevideosLoading
                ? Array(6)
                    .fill("")
                    .map((shimmerCard, index) => {
                      return <ShimmerVideoCard key={index} />;
                    })
                : ""}
            </>
          )}
          {/* {fetchingErrors?.errors[0]?.message ===
            "The requested video chart is not supported or is not available." ||
          fetchingErrors?.errors[0]?.message ===
            "Requested entity was not found."
            ? Array(15)
                .fill("")
                .map((shimmerCard, index) => {
                  return <ShimmerVideoCard key={index} />;
                })
            : ""} */}
        </div>
        {allVideos ? (
          !nextPageToken && allVideos.length !== 0 ? (
            <div
              className={` text-center w-full  max-w-[200px] h-9 p-4 my-4 text-base font-medium flex justify-center items-center m-auto rounded-lg cursor-pointer  `}
            >
              No more videos
            </div>
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default VideosContainer;
