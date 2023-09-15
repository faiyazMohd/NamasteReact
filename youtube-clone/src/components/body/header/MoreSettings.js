import React, { useState } from "react";
import RightDirectionIcon from "../../../assets/icons/svgs/SvgComponents/RightDirectionIcon";
import AppearanceIcon from "../../../assets/icons/svgs/SvgComponents/AppearanceIcon";
import GlobeIcon from "../../../assets/icons/svgs/SvgComponents/GlobeIcon";
import SettingIcon from "../../../assets/icons/svgs/SvgComponents/SettingIcon";
import HelpIcon from "../../../assets/icons/svgs/SvgComponents/HelpIcon";
import SendFeedBacksIcon from "../../../assets/icons/svgs/SvgComponents/SendFeedBacksIcon";
import Locations from "./Locations";
import Appearance from "./Appearance";
import { useSelector } from "react-redux";

const MoreSettings = ({ setshowMoreSettings }) => {
  const [showAppearance, setShowAppearance] = useState(false);
  const [showLocations, setShowLocations] = useState(false);
  const currentTheme = useSelector((store) => store.theme.currentTheme);
  const locationName = useSelector((store) => store.app.locationName);
  const darkTheme = useSelector((store) => store.theme.darkTheme);

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
        className={`w-[290px] h-[277px] fixed top-16 right-32 rounded-xl backdrop-blur  shadow-[0px_4px_32px_0px_#0000001a]  ${
          darkTheme ? "bg-[#272727] text-white" : "bg-white text-black"
        }  z-40`}
      >
        <div className="Container w-full">
          {showAppearance || showAppearance ? (
            ""
          ) : (
            <div className="Container mt-2">
              <div
                onClick={() => setShowAppearance(true)}
                className={`px-3 h-10 mt-1 cursor-pointer  py-2 ${
                  darkTheme
                    ? "  hover:bg-[#3a3a3a]  active:bg-[#575656]"
                    : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                }} flex  items-center `}
              >
                <div className="w-2/12">
                  <div className="icon w-6">
                    <AppearanceIcon color={darkTheme ? "#fff" : "#000"} />
                  </div>
                </div>
                <div className=" w-8/12 flex ">
                  <div className="text-base whitespace-nowrap">
                    Appearance:{" "}
                    {currentTheme === "Use device theme"
                      ? "Device theme"
                      : currentTheme === "Dark theme"
                      ? "Dark"
                      : currentTheme === "Light theme"
                      ? "Light"
                      : ""}
                  </div>
                </div>
                <div className=" w-2/12 flex justify-end items-center">
                  <RightDirectionIcon color={darkTheme ? "#fff" : "#000"} />
                </div>
              </div>
              <div
                onClick={() => setShowLocations(true)}
                className={`px-3 h-10 mt-1 cursor-pointer  py-2 ${
                  darkTheme
                    ? " hover:bg-[#3a3a3a]  active:bg-[#575656]"
                    : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                }} flex  items-center `}
              >
                <div className="w-2/12">
                  <div className="icon w-6">
                    <GlobeIcon color={darkTheme ? "#fff" : "#000"} />
                  </div>
                </div>
                <div className=" w-8/12 flex ">
                  <div className="text-base whitespace-nowrap line-clamp-1">
                    Location: {locationName}
                  </div>
                </div>
                <div className=" w-2/12 flex justify-end items-center">
                  <RightDirectionIcon color={darkTheme ? "#fff" : "#000"} />
                </div>
              </div>
              <hr
                className={`border-  ${
                  darkTheme
                    ? "border-b border-[rgba(255,255,255,0.2)]"
                    : "border-b border-[rgba(0,0,0,0.1)]"
                } my-3`}
              />{" "}
              <div className={`px-3 h-10 mt-1 cursor-pointer  py-2 ${
                  darkTheme
                    ? " hover:bg-[#3a3a3a]  active:bg-[#575656]"
                    : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                }} flex  items-center `}>
                <div className="w-2/12">
                  <div className="icon w-6">
                    <SettingIcon color={darkTheme ? "#fff" : "#000"} />
                  </div>
                </div>
                <div className=" w-8/12 flex ">
                  <div className="">Settings</div>
                </div>
              </div>
              <hr
                className={`border-  ${
                  darkTheme
                    ? "border-b border-[rgba(255,255,255,0.2)]"
                    : "border-b border-[rgba(0,0,0,0.1)]"
                } my-3`}
              />
              <div className={`px-3 h-10 mt-1 cursor-pointer  py-2 ${
                  darkTheme
                    ? " hover:bg-[#3a3a3a]  active:bg-[#575656]"
                    : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                }} flex  items-center `}>
                <div className="w-2/12">
                  <div className="icon w-6">
                    <HelpIcon color={darkTheme ? "#fff" : "#000"} />
                  </div>
                </div>
                <div className=" w-8/12 flex ">
                  <div className="">Help</div>
                </div>
              </div>
              <div className={`px-3 h-10 mt-1 cursor-pointer  py-2 ${
                  darkTheme
                    ? " hover:bg-[#3a3a3a]  active:bg-[#575656]"
                    : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                }} flex  items-center `}>
                <div className="w-2/12">
                  <div className="icon w-6">
                    <SendFeedBacksIcon color={darkTheme ? "#fff" : "#000"} />
                  </div>
                </div>
                <div className=" w-8/12 flex ">
                  <div className="">Send feedback</div>
                </div>
              </div>
            </div>
          )}

          {showAppearance ? (
            <Appearance
              setShowAppearance={setShowAppearance}
              setshowMoreSettings={setshowMoreSettings}
            />
          ) : (
            ""
          )}
          {showLocations ? (
            <Locations
              setShowLocations={setShowLocations}
              setshowMoreSettings={setshowMoreSettings}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default MoreSettings;
