import React, { useState } from "react";
import YoutubeLogoLight from "../assets/icons/pngs/Youtube-Logo-Dark.png";
import SearchIcon from "../assets/icons/svgs/SvgComponents/SearchIcon";
import ProfileIcon from "../assets/icons/svgs/SvgComponents/ProfileIcon";
import ArrowRightIcon from "../assets/icons/svgs/SvgComponents/ArrowRightIcon";
import MicIcon from "../assets/icons/svgs/SvgComponents/MicIcon";
import MoreSettingIcon from "../assets/icons/svgs/SvgComponents/MoreSettingIcon";
import HamBurgerIcon from "../assets/icons/svgs/SvgComponents/HamBurgerIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  closeSidebar,
  openSidebar,
  toggleSidebar,
} from "../utils/store/appSlice";
import SignInBtn from "./SignInBtn";
import { Link } from "react-router-dom";
import MoreSettings from "./MoreSettings";

const Header = () => {
  const [showSearchIcon, setShowSearchIcon] = useState(false);
  const [showMoreSettings, setshowMoreSettings] = useState(false)
  const showSidebar = useSelector((store) => store.app.showSidebar);
  const locationCode = useSelector((store) => store.app.locationCode);
  const dispatch = useDispatch();
  const handleOpenSideBar = () => {
    dispatch(openSidebar());
  };
  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };
  return (
    <>
      <div className="Header fixed top-0 right-0 left-0 z-10 bg-white  px-3 h-14 flex justify-between items-center">
        <>
          <div className="left w-1/5 flex justify-start  items-center">
            <div
              className="hamBurger  ml-3 mr-6 cursor-pointer "
              onClick={handleToggleSidebar}
            >
              <HamBurgerIcon />
            </div>
            <div className="logo cursor-pointer ">
              <Link to="/">
                <div className="relative">
                  <div className="text-[.7rem] absolute -top-2 -right-4">
                    {locationCode}
                  </div>
                  <img
                    src={YoutubeLogoLight}
                    className="w-[100px] "
                    alt="Youtube"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="middle w-4/6 flex justify-start items-center">
            <div
              className={`${
                showSearchIcon ? "block" : "invisible"
              } border border-[#ccc] shadow-[0px_1px_2px_#eee] h-8 px-5 py-5 flex items-center rounded-l-full border-r-0`}
            >
              <SearchIcon />
            </div>
            <div className="searchBar flex items-center h-8 w-3/4 relative">
              <input
                type="text"
                placeholder="Search"
                onFocus={() => setShowSearchIcon(true)}
                onBlur={() => setShowSearchIcon(false)}
                className={`${
                  showSearchIcon
                    ? "rounded-none border-l-0  px-0  py-5"
                    : "rounded-l-full  px-5  py-5"
                } border border-[#ccc] text-lg shadow-[0px_1px_2px_#eee] text-[#0f0f0f] focus:outline-none placeholder-[#606060] h-full w-[100%] `}
              />

              <div className="bg-[#0000000d] border border-[#ccc] shadow-[0px_1px_2px_#eee] h-full px-5 py-5 flex items-center rounded-r-full">
                <SearchIcon />
              </div>
            </div>
            <div className="right bg-[#0000000d] cursor-pointer rounded-full p-[10px] mx-4 ">
              <MicIcon />
            </div>
          </div>
          <div className="rightSide  w-1/5 flex justify-end  items-center ">
            <div onClick={()=>setshowMoreSettings(true)} className="rounded-full p-[5px]   active:bg-[#f2f2f2] cursor-pointer">
              <MoreSettingIcon />
            </div>
            <div className="mx-3">
              <SignInBtn />
            </div>
          </div>
        </>
      </div>

      {showMoreSettings? <MoreSettings setshowMoreSettings={setshowMoreSettings}/>:""}
    </>
  );
};

export default Header;
