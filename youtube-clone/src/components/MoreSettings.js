import React, { useState } from "react";
import RightDirectionIcon from "../assets/icons/svgs/SvgComponents/RightDirectionIcon";
import AppearanceIcon from "../assets/icons/svgs/SvgComponents/AppearanceIcon";
import GlobeIcon from "../assets/icons/svgs/SvgComponents/GlobeIcon";
import SettingIcon from "../assets/icons/svgs/SvgComponents/SettingIcon";
import HelpIcon from "../assets/icons/svgs/SvgComponents/HelpIcon";
import SendFeedBacksIcon from "../assets/icons/svgs/SvgComponents/SendFeedBacksIcon";
import AppearanceMobile from "./AppearanceMobile";
import Locations from "./Locations";
import ArrowRightIcon from "../assets/icons/svgs/SvgComponents/ArrowRightIcon";

const MoreSettings = ({ setshowMoreSettings }) => {
  const [showAppearance, setShowAppearance] = useState(false);
  const [showLocations, setShowLocations] = useState(false);
  return (
    <>
      <div>
        <div
          onClick={() => setshowMoreSettings(false)}
          className="fixed top-0 bottom-0 left-0 right-0 z-30 w-full h-full"
        ></div>
      </div>

      <div
        onClick={(e) => {
          // e.stopPropagation()
        }}
        className="w-[290px] h-[277px] fixed top-16 right-32 rounded-xl backdrop-blur  shadow-[0px_4px_32px_0px_#0000001a] bg-white z-40"
      >
        <div className="Container w-full">
          {showAppearance || showAppearance ? (
            ""
          ) : (
            <div className="Container mt-2">
              <div onClick={()=>setShowAppearance(true)} className="px-3 h-10 mt-1 cursor-pointer  py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]  flex  items-center ">
                <div className="w-2/12">
                  <div className="icon w-6">
                    <AppearanceIcon />
                  </div>
                </div>
                <div className=" w-8/12 flex ">
                  <div className="">Appearance</div>
                </div>
                <div className=" w-2/12 flex justify-center items-center">
                  <RightDirectionIcon />
                </div>
              </div>
              <div onClick={()=>setShowLocations(true)} className="px-3 h-10 mt-1 cursor-pointer  py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]  flex  items-center ">
                <div className="w-2/12">
                  <div className="icon w-6">
                    <GlobeIcon />
                  </div>
                </div>
                <div className=" w-8/12 flex ">
                  <div className="">Location</div>
                </div>
                <div className=" w-2/12 flex justify-center items-center">
                  <RightDirectionIcon />
                </div>
              </div>
              <hr className="border-b border-[rgba(0,0,0,0.1) my-3" />
              <div className="px-3 h-10 mt-1 cursor-pointer  py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]  flex  items-center ">
                <div className="w-2/12">
                  <div className="icon w-6">
                    <SettingIcon />
                  </div>
                </div>
                <div className=" w-8/12 flex ">
                  <div className="">Settings</div>
                </div>
              </div>
              <hr className="border-b border-[rgba(0,0,0,0.1) my-3" />

              <div className="px-3 h-10 mt-1 cursor-pointer  py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]  flex  items-center ">
                <div className="w-2/12">
                  <div className="icon w-6">
                    <HelpIcon />
                  </div>
                </div>
                <div className=" w-8/12 flex ">
                  <div className="">Help</div>
                </div>
              </div>
              <div className="px-3 h-10 mt-1 cursor-pointer  py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]  flex  items-center ">
                <div className="w-2/12">
                  <div className="icon w-6">
                    <SendFeedBacksIcon />
                  </div>
                </div>
                <div className=" w-8/12 flex ">
                  <div className="">Send feedback</div>
                </div>
              </div>
            </div>
          )}

          {showAppearance ? (
            <AppearanceMobile setShowAppearance={setShowAppearance} setshowMoreSettings={setshowMoreSettings}/>
          ) : (
            ""
          )}
          {showLocations ? (
            <Locations setShowLocations={setShowLocations} setshowMoreSettings={setshowMoreSettings}/>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default MoreSettings;
