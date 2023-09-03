import React from "react";
import HomeIcon from "../assets/icons/svgs/SvgComponents/HomeIcon";
import ShortsIcon from "../assets/icons/svgs/SvgComponents/ShortsIcon";
import SubcriptionsIcon from "../assets/icons/svgs/SvgComponents/SubcriptionsIcon";
import LibraryIcon from "../assets/icons/svgs/SvgComponents/LibraryIcon";
import HistoryIcon from "../assets/icons/svgs/SvgComponents/HistoryIcon";
const SideNavbar = () => {
  return (
    <>
    {/* from large devices */}
      <div className=" hidden md:block  w-16 h-full fixed z-20 left-0 bottom-0 top-12 bg-white">
        <div className="Home rounded-lg ml-1 px-2 pt-4 pb-3 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3] mt-4  cursor-pointer w-full flex items-center flex-col justify-center">
          <div className="icon">
            <HomeIcon />
          </div>
          <div className="home text-xs mt-1">Home</div>
        </div>
        <div className="Home rounded-lg ml-1 px-2 pt-4 pb-3 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]   cursor-pointer w-full flex items-center flex-col justify-center">
          <div className="icon">
            <ShortsIcon />
          </div>
          <div className="home text-xs mt-1">Shorts</div>
        </div>
        <div className="Home rounded-lg ml-1 px-3 pt-4 pb-3 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3] cursor-pointer w-full flex items-center flex-col justify-center">
          <div className="icon">
            <SubcriptionsIcon />
          </div>
          <div className="home text-[.66rem] mt-1">Subscriptions</div>
        </div>
        <div className="Home rounded-lg ml-1 px-2 pt-4 pb-3 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]  cursor-pointer w-full flex items-center flex-col justify-center">
          <div className="icon">
            <LibraryIcon />
          </div>
          <div className="home text-xs mt-1">Library</div>
        </div>
        <div className="Home rounded-lg ml-1 px-2 pt-4 pb-3 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3] cursor-pointer w-full flex items-center flex-col justify-center">
          <div className="icon">
            <HistoryIcon />
          </div>
          <div className="home text-xs mt-1">History</div>
        </div>
      </div>

    {/* small to medium devices */}
      <div className=" md:hidden border border-[#0000001a]  w-full h-12 fixed z-30 bottom-0 right-0 lef bg-white flex ">
        <div className="Home     px-2 pt-4 pb-3  cursor-pointer w-full flex items-center flex-col justify-center">
          <div className="icon">
            <HomeIcon />
          </div>
          <div className="home text-xs mb-1">Home</div>
        </div>

        <div className="shorts    px-2 pt-4 pb-3    cursor-pointer w-full flex items-center flex-col justify-center">
          <div className="icon">
            <ShortsIcon />
          </div>
          <div className="home text-xs  mb-1">Shorts</div>
        </div>

        <div className="library    px-2 pt-4 pb-3  cursor-pointer w-full flex items-center flex-col justify-center">
          <div className="icon">
            <LibraryIcon />
          </div>
          <div className="home text-xs mb-1">Library</div>
        </div>
      </div>
    </>
  );
};

export default SideNavbar;
