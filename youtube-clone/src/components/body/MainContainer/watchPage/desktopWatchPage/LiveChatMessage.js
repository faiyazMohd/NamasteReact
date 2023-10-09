import React from "react";
import { useSelector } from "react-redux";

const LiveChatMessage = ({ chat }) => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  
  return (
    <div className="w-full min-h-9  flex my-2 text-start">
      <div className="profilePic w-[10%] flex  justify-center">
        <img className="w-5 h-5 rounded-full" loading="eager" src={chat?.imageUrl} alt="" />
      </div>
      <div className=" w-[90%] text-sm ">
        <span
          className={`userName inline-block    font-medium  whitespace-nowrap mr-2  ${
            darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
          }`}
        >
          {chat?.name}
        </span>
          {chat?.message}
      </div>
    </div>
  );
};

export default LiveChatMessage;
