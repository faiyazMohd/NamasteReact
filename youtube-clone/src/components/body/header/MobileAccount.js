import React, { useEffect, useState } from "react";
import CrossIcon from "../../../assets/icons/svgs/SvgComponents/CrossIcon";
import SignInIcon from "../../../assets/icons/svgs/SvgComponents/SignInIcon";
import SettingIcon from "../../../assets/icons/svgs/SvgComponents/SettingIcon";
import HelpIcon from "../../../assets/icons/svgs/SvgComponents/HelpIcon";
import SendFeedBacksIcon from "../../../assets/icons/svgs/SvgComponents/SendFeedBacksIcon";
import YTMusicIcon from "../../../assets/icons/svgs/SvgComponents/YTMusicIcon";
import YTKidsIcon from "../../../assets/icons/svgs/SvgComponents/YTKidsIcon";
import OpenAppIcon from "../../../assets/icons/svgs/SvgComponents/OpenAppIcon";
import Setting from "./Setting";
import { useSelector } from "react-redux";

const MobileAccount = ({ setShowAccount }) => {
  const [showSetting, setShowSetting] = useState(false);
  const darkTheme = useSelector((store) => store.theme.darkTheme);

  return (
    <>
      <div
        className={`AccountContainer  ${
          darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
        }  w-full h-screen fixed  top-0 right-0 bottom-0 left-0  z-40`}
      >
        <div className="px-3 h-14 shadow-[0px_4px_2px_-2px_#00000033] flex justify-between items-center">
          <div
            className="closeAccount  w-1/5 "
            onClick={() => setShowAccount(false)}
          >
            <CrossIcon color={darkTheme ? "#fff" : "#000"} />
          </div>
          <div className="text-lg  w-4/5">Account</div>
        </div>

        <div
          className={`px-3 h-12  flex py-9 justify-between items-center ${
            darkTheme
              ? "border-b border-[rgba(255,255,255,0.2)]"
              : "border-b border-[rgba(0,0,0,0.1)]"
          } `}
        >
          <div className="  w-1/5 ">
            <SignInIcon color={darkTheme ? "#fff" : "#000"} />
          </div>
          <div className="text-lg  w-4/5">Sign in</div>
        </div>

        <div
          onClick={() => setShowSetting(true)}
          className={`px-3 h-12   flex py-9 justify-between items-center ${
            darkTheme
              ? "border-b border-[rgba(255,255,255,0.2)]"
              : "border-b border-[rgba(0,0,0,0.1)]"
          } `}
        >
          <div className="  w-1/5 ">
            <SettingIcon color={darkTheme ? "#fff" : "#000"} />
          </div>
          <div className="text-lg  w-4/5">Settings</div>
        </div>

        <div
          className={`py-4   ${
            darkTheme
              ? "border-b border-[rgba(255,255,255,0.2)]"
              : "border-b border-[rgba(0,0,0,0.1)]"
          } `}
        >
          <div className="px-3 h-12  flex justify-between items-center">
            <div className="  w-1/5 ">
              <HelpIcon color={darkTheme ? "#fff" : "#000"} />
            </div>
            <div className="text-lg  w-4/5">Help</div>
          </div>
          <div className="px-3 h-12  flex  justify-between items-center">
            <div className="  w-1/5 ">
              <SendFeedBacksIcon color={darkTheme ? "#fff" : "#000"} />
            </div>
            <div className="text-lg  w-4/5">Feedback</div>
          </div>
        </div>

        <div  className={`py-4   ${
            darkTheme
              ? "border-b border-[rgba(255,255,255,0.2)]"
              : "border-b border-[rgba(0,0,0,0.1)]"
          } `}>
          <div className="px-3 h-12  flex justify-between items-center">
            <div className="  w-1/5 ">
              <div className="w-6">
                <YTMusicIcon color={darkTheme ? "#fff" : "#000"} />
              </div>
            </div>
            <div className="text-lg  w-4/5">YouTube Music</div>
          </div>
          <div className="px-3 h-12  flex  justify-between items-center">
            <div className="  w-1/5 ">
              <div className="w-6">
                <YTKidsIcon color={darkTheme ? "#fff" : "#000"} />
              </div>
            </div>
            <div className="text-lg  w-4/5">YouTube Kids</div>
          </div>

          <div className="px-3 h-12  flex py-9 justify-between items-center ">
            <div className="  w-1/5 ">
              <OpenAppIcon color={darkTheme ? "#fff" : "#000"} />
            </div>
            <div className="text-lg  w-4/5">Open App</div>
          </div>

          <div className="h-12 flex  justify-center items-center absolute bottom-0 right-0 left-0">
            <div
              className={`font-semibold ${
                darkTheme ? "text-[#d7d7d7]" : "text-[#0f0f0f]"
              } `}
            >
              Privacy Policy • Terms of Service
            </div>
          </div>
        </div>
      </div>
      {showSetting ? <Setting setShowSetting={setShowSetting} /> : ""}
    </>
  );
};

export default MobileAccount;
