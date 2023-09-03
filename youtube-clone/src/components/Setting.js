import React, { useState } from "react";
import SettingIcon from "../assets/icons/svgs/SvgComponents/SettingIcon";
import ArrowRightIcon from "../assets/icons/svgs/SvgComponents/ArrowRightIcon";
import DownArrowIcon from "../assets/icons/svgs/SvgComponents/DownArrowIcon";
import UpArrowIcon from "../assets/icons/svgs/SvgComponents/UpArrowIcon";
import AppearanceMobile from "./AppearanceMobile";
import { useSelector } from "react-redux";
import Locations from "./Locations";

const Setting = ({ setShowSetting }) => {
  const [showAccount, setShowAccount] = useState(true);
  const [showAppearance, setShowAppearance] = useState(false);
  const [showLocations, setShowLocations] = useState(false)
  const currentTheme = useSelector((store)=>store.theme.currentTheme);
  return (
    <>
      <div className="AccountContainer bg-white w-full h-full fixed  top-0 right-0 bottom-0 left-0  z-40">
        <div className="px-3 h-14 shadow-[0px_4px_2px_-2px_#00000033] flex justify-between items-center">
          <div
            className="closeAccount  w-1/12 "
            onClick={() => setShowSetting(false)}
          >
            <ArrowRightIcon />
          </div>
          <div className="text-lg  w-11/12">Settings</div>
        </div>
        <div className="border-y-4  border-[#0000001a]">
          <div
            onClick={() => setShowAccount(!showAccount)}
            className="px-3 py-9   flex justify-between items-center h-12"
          >
            <div className="text-lg  w-4/5 ">
              <div className="mt-3 font-medium">Account</div>
              <div className="mt-1 text-xs ">
                Choose how you appear and what you see on YouTube
              </div>
            </div>
            <div className="closeAccount  w-1/5 flex justify-end">
              {showAccount ? <UpArrowIcon /> : <DownArrowIcon />}
            </div>
          </div>
          {showAccount ?<div className="">
          <div className="px-3 py-9   flex justify-between items-center h-12">
            <div onClick={()=>setShowLocations(true)} className="text-lg  w-4/5 ">
              <div className="mt-3 ">Location</div>
              <div className="mt-1 text-base ">India</div>
            </div>
          </div>
          <div className="px-3 py-9  mb-3 flex justify-between items-center h-12">
            <div onClick={()=>setShowAppearance(true)} className="text-lg  w-4/5 ">
              <div className="mt-3 ">Appearance</div>
              <div className="mt-1 text-[.9rem] ">{currentTheme}</div>
            </div>
          </div>
          </div> : ""}
          
        </div>
          <div className="h-12 bg-white flex  justify-center items-center absolute bottom-0 right-0 left-0">
            <div className="font-semibold text-[#050505]">
              YouTube, a Google company
            </div>
          </div>
      </div>

      {showAppearance ? (
        <AppearanceMobile
          setShowAppearance={setShowAppearance}
        />
      ) : (
        ""
      )}
      {showLocations ? (
        <Locations
          setShowLocations={setShowLocations}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Setting;
