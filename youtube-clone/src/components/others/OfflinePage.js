import React from "react";
import ManOnSpaceIcon from "../../assets/icons/svgs/SvgComponents/ManOnSpaceIcon";
import OfflineCloudIcon from "../../assets/icons/svgs/SvgComponents/OfflineCloudIcon";
import { useSelector } from "react-redux";
const OfflinePage = () => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);

  return (
    <div className="flex flex-col items-center justify-start md:justify-center w-full h-screen">
      <div className="offlineCloud mt-20  md:hidden  ">
        <OfflineCloudIcon color={darkTheme ? "#fff" : "#000"}/>
      </div>
      <div className="manOnSpaceIcon w-32 hidden md:block">
        <ManOnSpaceIcon />
      </div>
      <div className="text-xl font-medium md:text-2xl mt-3">
        Connect to the internet
      </div>
      <div className="text-base  mt-2 md:text-lg ">
        your're offline. Check your connection.
      </div>
      <div 
      onClick={()=>window.location.reload()}
      className={` hidden md:flex items-center justify-center  mt-4 border w-16 h-9 rounded-full cursor-pointer
      ${
        darkTheme
          ? "border border-[#333333] active:bg-[#639ed263] hover:bg-[#3e8cd063] transition-colors ease "
          : "border border-[#ccc] active:bg-blue-200 hover:bg-blue-100 transition-colors ease "
      }   `}>
        <div className={`${
          darkTheme ? "text-[#4988dcf3]" : "text-[#065fd4]"
        }   text-sm font-semibold whitespace-nowrap`}>
          Retry
        </div>
      </div>
    </div>
  );
};

export default OfflinePage;
