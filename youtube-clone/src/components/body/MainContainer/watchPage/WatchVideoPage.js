import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useFetcher, useSearchParams } from "react-router-dom";
import DemoCommentsContainer from "./DemoCommentsContainer";
import WatchVideoMobile from "./mobileWatchPage/WatchVideoMobile";
import WatchVideoDesktop from "./desktopWatchPage/WatchVideoDesktop";

const WatchVideoPage = () => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  const locationCode = useSelector((store) => store.app.locationCode);
  const [videoDetails, setVideoDetails] = useState({});
  const [channelDetails, setChannelDetails] = useState({});
  const [recommendations, setRecommendations] = useState([]);
  const [comments, setComments] = useState([]);
  const [topComments, setTopComments] = useState(true)
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  // console.log(videoId);
  useEffect(() => {
    getVideoData();
  }, []);
  
  useEffect(()=>{
    console.log(videoDetails.length);
    if (!videoDetails.items) {
      console.log("fetching comments");
      getComments()
      
    }
    console.log(topComments);
  },[topComments])
  const getVideoData = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cstatus&id=${videoId}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    );
    const json = await data.json();
    setVideoDetails(json?.items[0]);
    getChannelData(json?.items[0]?.snippet?.channelId)
    getComments()
    // getRecommendation(json?.items[0]?.snippet?.title)
    console.log(json);
  };

  const getChannelData = async (channelId) => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CtopicDetails%2Cstatus%2CcontentDetails%2Clocalizations%2Cstatistics%2CtopicDetails%2CbrandingSettings%2CcontentOwnerDetails&id=${channelId}&key=` +
        process.env.REACT_APP_GOOGLE_API_KEY
    );
    const json = await data.json();
    console.log(json);
    setChannelDetails(json?.items[0]);
  };

  const getRecommendation = async (query) => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&videoDuration=medium&q=${query}&regionCode=${locationCode}&key=` +
        process.env.REACT_APP_GOOGLE_API_KEY
    );
    const json = await data.json();
    setRecommendations(json?.items);
    console.log(json);
  };

  const getComments = async () => {
    // try {
      const data = await fetch(
        `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&order=${topComments?"relevance":"time"}&textFormat=plainText&videoId=${videoId}&key=` +
          process.env.REACT_APP_GOOGLE_API_KEY
      );
      const json = await data.json();
      setComments(json?.items);
      console.log(json);
      
    // } catch (error) {
    //   console.log(error);
    // }
    
  };

  return (
    <>
      <div
        className={`w-full min-h-screen${
          darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
        }  md:hidden`}
      >
        <WatchVideoMobile />
      </div>
      <div
        className={`w-full h-screen${
          darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
        }  hidden md:block`}
      >
        <WatchVideoDesktop videoId={videoId} channelDetails={channelDetails} videoDetails={videoDetails} recommendations={recommendations} comments={comments} topComments={topComments} setTopComments={setTopComments}/>
      </div>
    </>
  );
};

export default WatchVideoPage;
