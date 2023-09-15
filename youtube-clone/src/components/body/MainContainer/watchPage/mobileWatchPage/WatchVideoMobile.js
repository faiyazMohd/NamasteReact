import React from 'react'
import { useSelector } from 'react-redux';

const WatchVideoMobile = () => {
    const darkTheme = useSelector((store) => store.theme.darkTheme);

  return (
    <div
    className={`watchPage w-full h-full flex pt-14  border  border-green-600  ${
      darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
    } `}
  >
    <div className="leftContainer w-8/12 h-screen  border border-red-700"></div>
    <div className="rightContainer w-4/12 h-screen border border-yellow-500"></div>
    {/* <div
      className={`w-full h-80 mt-12 ${
        darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
      } `}
    >
      <iframe
        // width="60%"
        // height="400px"
        className="w-3/5 h-[400px]"
        src={
          "https://www.youtube-nocookie.com/embed/" +
          videoId +
          "?autoplay=0&mute=0 "
        }
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div
        className={`commentsContainer ${
          darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
        }  p-3`}
      >
        
      </div>
    </div> */}
  </div>
  )
}

export default WatchVideoMobile