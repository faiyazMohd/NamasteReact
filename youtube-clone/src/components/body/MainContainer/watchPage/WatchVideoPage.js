import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useFetcher, useSearchParams } from "react-router-dom";
import DemoCommentsContainer from "./DemoCommentsContainer";
import WatchVideoMobile from "./mobileWatchPage/WatchVideoMobile";
import WatchVideoDesktop from "./desktopWatchPage/WatchVideoDesktop";
import useWidth from "../../../../utils/hooks/useWidth";

const WatchVideoPage = () => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  const locationCode = useSelector((store) => store.app.locationCode);
  const [videoDetails, setVideoDetails] = useState(null);
  const [channelDetails, setChannelDetails] = useState(null);
  const [recommendations, setRecommendations] = useState(null);
  const [comments, setComments] = useState(null);
  const [topComments, setTopComments] = useState(true);
  const [nextCommentsToken, setNextCommentsToken] = useState("");

  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  // console.log(videoId);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getVideoData();
  }, [videoId]);

  useEffect(() => {
    if (videoDetails) {
      getComments();
    }
    console.log(topComments);
  }, [topComments]);
  const deviceWidth = useWidth();
  const getVideoData = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cstatus&id=${videoId}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    );
    const json = await data.json();
    setVideoDetails(json?.items[0]);
    getChannelData(json?.items[0]?.snippet?.channelId);
    getComments();
    console.log(json?.items[0]?.snippet?.title);
    getRecommendation(json?.items[0]?.snippet?.title);
    document.title = json?.items[0]?.snippet?.title +" - YouTube"
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
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&order=${
        topComments ? "relevance" : "time"
      }&textFormat=plainText&videoId=${videoId}&key=` +
        process.env.REACT_APP_GOOGLE_API_KEY
    );
    const json = await data.json();
    setNextCommentsToken(json ? json?.nextPageToken : "");

    setComments(json?.items ? json?.items : json);
    console.log(json);

  };

  const getMoreComments = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&order=${
        topComments ? "relevance" : "time"
      }&textFormat=plainText&videoId=${videoId}&pageToken=${nextCommentsToken}&key=` +
        process.env.REACT_APP_GOOGLE_API_KEY
    );
    const json = await data.json();
    setNextCommentsToken(json ? json?.nextPageToken : "");

    setComments(json?.items ? json?.items : json);
    console.log(json);

  };

  return (
    <>
      {deviceWidth < 900 ? (
        <div
          className={`mobile w-full  min-h-screen ${
            darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
          }  md:hidden`}
        >
          <WatchVideoMobile
            videoId={videoId}
            channelDetails={channelDetails}
            videoDetails={videoDetails}
            recommendations={recommendations}
            comments={comments}
            topComments={topComments}
            setTopComments={setTopComments}
            nextCommentsToken={nextCommentsToken}
            getMoreComments={getMoreComments}
          />
        </div>
      ) : (
        <div
          className={`desktop w-full h-screen${
            darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
          }  hidden md:block`}
        >
          <WatchVideoDesktop
            videoId={videoId}
            channelDetails={channelDetails}
            videoDetails={videoDetails}
            recommendations={recommendations}
            comments={comments}
            topComments={topComments}
            setTopComments={setTopComments}
            nextCommentsToken={nextCommentsToken}
            getMoreComments={getMoreComments}
          />
        </div>
      )}
    </>
  );
};

export default WatchVideoPage;
