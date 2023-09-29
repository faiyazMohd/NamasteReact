import React from "react";
import { useSelector } from "react-redux";

const AboutSection = () => {
  const channelDetails = useSelector((store) => store.content.channelDetails);
  const darkTheme = useSelector((store) => store.theme.darkTheme);

  return channelDetails ? (
    <>
      {/* for small devices */}
      <div className="w-[93%] m-auto md:hidden">
        <div className="font-medium mt-2">About</div>
        <div className="font-medium mt-2">
          <pre className="whitespace-pre-wrap font-medium  font-sans">
            {channelDetails?.snippet?.description}
          </pre>
        </div>
        <div className="font-medium mt-1 ">
          Joined &nbsp;
          {new Date(channelDetails?.snippet?.publishedAt).toLocaleDateString(
            "en-US",
            {
              day: "numeric",
              month: "short",
              year: "numeric",
            }
          )}
        </div>
        <div className="font-medium mt-1 ">
          {Number(channelDetails?.statistics?.viewCount).toLocaleString(
            "en-us"
          ) + " views"}
        </div>
      </div>
      {/* for large devices */}
      <div className="w-full m-auto hidden md:flex ">
        <div className="left w-[70%] ">
          <div className="w-[88%]">
            <div className="font-medium mt-6">Description</div>
            <div className="font-medium mt-4">
              <pre className="whitespace-pre-wrap font-medium text-sm font-sans">
                {channelDetails?.snippet?.description}
              </pre>
            </div>
          </div>
        </div>
        <div className="right w-[30%] ">
          <div
            className={`font-medium h-11 flex items-center mt-6 ${
              darkTheme
                ? "border-b  border-[rgba(255,255,255,0.2)]"
                : "border-b  border-[rgba(0,0,0,0.1)]"
            }`}
          >
            Status
          </div>
          <div className={`font-medium h-11 flex items-center  ${
              darkTheme
                ? "border-b  border-[rgba(255,255,255,0.2)]"
                : "border-b  border-[rgba(0,0,0,0.1)]"
            }`}>
            Joined &nbsp;
            {new Date(channelDetails?.snippet?.publishedAt).toLocaleDateString(
              "en-US",
              {
                day: "numeric",
                month: "short",
                year: "numeric",
              }
            )}
          </div>
          <div className={`font-medium h-11 flex items-center  ${
              darkTheme
                ? "border-b  border-[rgba(255,255,255,0.2)]"
                : "border-b  border-[rgba(0,0,0,0.1)]"
            }`}>
            {Number(channelDetails?.statistics?.viewCount).toLocaleString(
              "en-us"
            ) + " views"}
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className="w-full mt-12"> 
      <div className="m-auto w-10 h-10 border-t-4 animate-spin border-blue-500  rounded-full "></div>
    </div>
  );
};

export default AboutSection;
