import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchVideoPage = () => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  console.log(videoId);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {};

  return (
    <>
    <div
      className={`w-full h-screen ${
        darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
      } `}
    >
      <div className={`w-full h-80 mt-12 ${
        darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
      } `}>
        <iframe
          // width="60%"
          // height="400px"
          className="w-3/5 h-[400px]"
          src={
            "https://www.youtube-nocookie.com/embed/" + videoId + "?autoplay=1&mute=0 "
          }
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          
          allowfullscreen
        ></iframe>
        <div className={`commentsContainer ${
        darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
      }  p-3`}>
          <CommentsContainer/>
        </div>
      </div>

    </div>
    </>
  );
};

export default WatchVideoPage;
