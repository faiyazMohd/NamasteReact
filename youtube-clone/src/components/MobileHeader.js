import React, { useState } from "react";
import YoutubeLogoLight from "../assets/icons/pngs/Youtube-Logo-Dark.png";
import SearchIcon from "../assets/icons/svgs/SvgComponents/SearchIcon";
import ProfileIcon from "../assets/icons/svgs/SvgComponents/ProfileIcon";
import ArrowRightIcon from "../assets/icons/svgs/SvgComponents/ArrowRightIcon";
import MicIcon from "../assets/icons/svgs/SvgComponents/MicIcon";
import MobileAccount from "./MobileAccount";
import useScrollUp from "../utils/hooks/useScrollUp";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const MobileHeader = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const isScrollUp = useScrollUp();
  const locationCode = useSelector((store) => store.app.locationCode);
  // console.log("isScrollUp in header is :" + isScrollUp);
  return (
    <>
      <div
        className={`Mobile-Header fixed top-0 right-0 left-0 z-10  bg-white   px-3 h-12 shadow-[0px_4px_2px_-2px_#00000033] flex justify-between items-center transition-transform ease-linear duration-200 ${
          isScrollUp ? "translate-y-0" : "-translate-y-full"
        } `}
      >
        {showSearch ? (
          <>
            <div className="left" onClick={() => setShowSearch(false)}>
              <ArrowRightIcon />
            </div>
            <div className="searchBar flex items-center h-8 w-3/4 ">
              <input
                type="text"
                placeholder="Search YouTube"
                className="bg-[#0000000d] text-[#0f0f0f] focus:outline-none placeholder-[#606060] h-full w-full px-4 py-4 rounded-l-full"
              />
              <div className="bg-[#0000000d] h-full px-2 flex items-center rounded-r-full">
                <SearchIcon />
              </div>
            </div>
            <div className="right bg-[#0000000d] rounded-full p-1">
              <MicIcon />
            </div>
          </>
        ) : (
          <>
            <div className="logo w-28 ">
              <Link to="/">
                <div className="relative">
                  <div className="text-[.6rem] absolute -top-2 right-3">{locationCode}</div>
                  <img
                    src={YoutubeLogoLight}
                    className="w-[89px]"
                    alt="Youtube"
                  />
                </div>
              </Link>
            </div>
            <div className="rightSide flex justify-between items-center gap-6 ">
              <div className="searchBar" onClick={() => setShowSearch(true)}>
                <SearchIcon />
              </div>
              <div className="account" onClick={() => setShowAccount(true)}>
                <ProfileIcon color={"black"} />
              </div>
            </div>
          </>
        )}
      </div>
      {showAccount ? (
        <div className="AccountContainer">
          <MobileAccount setShowAccount={setShowAccount} />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default MobileHeader;
