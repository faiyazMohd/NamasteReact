import React from "react";
import HomeIcon from "../../../assets/icons/svgs/SvgComponents/HomeIcon";
import ShortsIcon from "../../../assets/icons/svgs/SvgComponents/ShortsIcon";
import SubcriptionsIcon from "../../../assets/icons/svgs/SvgComponents/SubcriptionsIcon";
import LibraryIcon from "../../../assets/icons/svgs/SvgComponents/LibraryIcon";
import HistoryIcon from "../../../assets/icons/svgs/SvgComponents/HistoryIcon";
import { useSelector } from "react-redux";
const SideNavbar = () => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);

  return (
    <>
      {/* small to medium devices */}
      <div
        className={` md:hidden border border-[#0000001a]  w-full h-12 fixed z-30 bottom-0 right-0  ${
          darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
        }  flex `}
      >
        <div className="Home     px-2 pt-4 pb-3  cursor-pointer w-full flex items-center flex-col justify-center">
          <div className="icon">
            <HomeIcon color={darkTheme ? "#fff" : "#000"} />
          </div>
          <div className="home text-xs mb-1">Home</div>
        </div>

        <div className="shorts    px-2 pt-4 pb-3    cursor-pointer w-full flex items-center flex-col justify-center">
          <div className="icon">
            <ShortsIcon color={darkTheme ? "#fff" : "#000"} />
          </div>
          <div className="home text-xs  mb-1">Shorts</div>
        </div>

        <div className="library   px-2 pt-4 pb-3  cursor-pointer w-full flex items-center flex-col justify-center">
          <div className="icon">
            <LibraryIcon color={darkTheme ? "#fff" : "#000"} />
          </div>
          <div className="home text-xs mb-1">Library</div>
        </div>
      </div>

      {/* from large devices */}
      <div
        className={` hidden md:block  w-[4.5rem] h-full fixed z-20 left-0 bottom-0 top-14  ${
          darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
        } `}
      >
        <div
          className={`Home rounded-lg ml-1 w-16 px-2 pt-4 pb-3 ${
            darkTheme
              ? "bg-[#272727] hover:bg-[#272727]  active:bg-[#3a3a3a]"
              : "bg-[#f2f2f2] hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
          }  mt-2  cursor-pointer  flex items-center flex-col justify-center`}
        >
          <div className="icon">
            <HomeIcon color={darkTheme ? "#fff" : "#000"} />
          </div>
          <div className="home text-xs mt-1">Home</div>
        </div>

        <div
          className={`Home rounded-lg ml-1 w-16 px-2 pt-4 pb-3 ${
            darkTheme
              ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
              : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
          }  mt-2  cursor-pointer  flex items-center flex-col justify-center`}
        >
          <div className="icon">
            <ShortsIcon color={darkTheme ? "#fff" : "#000"} />
          </div>
          <div className="home text-xs mt-1">Shorts</div>
        </div>

        <div
          className={`Home rounded-lg ml-1 w-16 px-2 pt-4 pb-3 ${
            darkTheme
              ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
              : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
          }  mt-2  cursor-pointer  flex items-center flex-col justify-center`}
        >
          <div className="icon">
            <SubcriptionsIcon color={darkTheme ? "#fff" : "#000"} />
          </div>
          <div className="home text-[.66rem] mt-1">Subscriptions</div>
        </div>

        <div
          className={`Home rounded-lg ml-1 w-16 px-2 pt-4 pb-3 ${
            darkTheme
              ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
              : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
          }  mt-2  cursor-pointer  flex items-center flex-col justify-center`}
        >
          <div className="icon">
            <LibraryIcon color={darkTheme ? "#fff" : "#000"} />
          </div>
          <div className="home text-xs mt-1">Library</div>
        </div>
        <div
          className={`Home rounded-lg ml-1 w-16 px-2 pt-4 pb-3 ${
            darkTheme
              ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
              : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
          }  mt-2  cursor-pointer  flex items-center flex-col justify-center`}
        >
          <div className="icon">
            <HistoryIcon color={darkTheme ? "#fff" : "#000"} />
          </div>
          <div className="home text-xs mt-1">History</div>
        </div>
      </div>
    </>
  );
};

export default SideNavbar;
