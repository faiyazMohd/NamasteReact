import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ShimmerRecommendation from "../watchPage/desktopWatchPage/ShimmerRecommendation";
import ShimmerVideoCard from "../videosContainer/ShimmerVideoCard";
import PlaylistItemCard from "../playlistPage/PlaylistItemCard";
import ChannelPlaylistCard from "./ChannelPlaylistCard";

const PlaylistSection = () => {
  const [channelPlaylist, setChannelPlaylist] = useState(null);
  const channelId = useParams().channelId;
  const darkTheme = useSelector((store) => store.theme.darkTheme);

  const getPlaylistData = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails%2Clocalizations%2Cstatus%2Cid&channelId=${channelId}&maxResults=25&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    );
    const json = await data.json();
    setChannelPlaylist(json?.items);
    console.log(json);
  };
  useEffect(() => {
    getPlaylistData();
  }, [channelId]);
  return channelPlaylist ? (
    channelPlaylist?.length === 0 ? (
      <div className="flex justify-center mt-3">
        This channel doesn't have any playlist
      </div>
    ) : (
      <div className="w-[93%] m-auto md-w-full md:flex md:flex-wrap md:gap-4 md:mt-4">
        {channelPlaylist?.map((item, index) => {
          return (
            <ChannelPlaylistCard
              key={item.contentDetails?.videoId}
              index={index}
              item={item}
            />
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

export default PlaylistSection;
