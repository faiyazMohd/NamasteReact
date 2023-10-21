import React from "react";
import HistoryIcon from "../../../../assets/icons/svgs/SvgComponents/HistoryIcon";
import { useSelector } from "react-redux";
import SignInBtn from "../../../others/SignInBtn";

const HistoryPage = () => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  document.title = "History - YouTube";
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className="icon  md:hidden">
        <HistoryIcon size={90} color={darkTheme ? "#fff" : "#000"} />
      </div>
      <div className="icon hidden md:block ">
        <HistoryIcon size={120} color={darkTheme ? "#fff" : "#000"} />
      </div>
      <div className="text-xl font-medium md:text-2xl mt-3">
        Keep track of what you watch
      </div>
      <div className=" text-xs md:text-base  mt-2  text-center">
        Watch history isn't viewable when signed out.
        <span className="text-blue-400 cursor-pointer"> Learn more</span>
      </div>
      <div className="mt-4">
        <SignInBtn />
      </div>
    </div>
  );
};

export default HistoryPage;
