import React from "react";
import ManOnSpaceIcon from "../../assets/icons/svgs/SvgComponents/ManOnSpaceIcon";
import OfflineCloudIcon from "../../assets/icons/svgs/SvgComponents/OfflineCloudIcon";
const OfflinePage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:h-[90vh]">
      <div className="offlineCloud mt-8  md:hidden  ">
        <OfflineCloudIcon />
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
      className=" hidden md:flex items-center justify-center  mt-4 border w-16 h-9 rounded-full cursor-pointer  border-[#ccc] active:bg-blue-200 hover:bg-blue-100">
        <div className="text-[#065fd4] text-sm font-semibold whitespace-nowrap">
          Retry
        </div>
      </div>
    </div>
  );
};

export default OfflinePage;
