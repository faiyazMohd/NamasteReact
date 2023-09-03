import React, { useState } from "react";
import SettingIcon from "../assets/icons/svgs/SvgComponents/SettingIcon";
import RightIcon from "../assets/icons/svgs/SvgComponents/RightIcon";
import CrossIcon from "../assets/icons/svgs/SvgComponents/CrossIcon";
import ArrowRightIcon from "../assets/icons/svgs/SvgComponents/ArrowRightIcon";

import DownArrowIcon from "../assets/icons/svgs/SvgComponents/DownArrowIcon";
import UpArrowIcon from "../assets/icons/svgs/SvgComponents/UpArrowIcon";
import useThemeDetector from "../utils/hooks/useThemeDetector";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentTheme,
  setDarkTheme,
  setThemeToDark,
  setThemeToLight,
} from "../utils/store/themeSlice";
import RightDirectionIcon from "../assets/icons/svgs/SvgComponents/RightDirectionIcon";

const AppearanceMobile = ({ setShowAppearance, setshowMoreSettings }) => {
  const dispatch = useDispatch();
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  // console.log(darkTheme);
  const currentTheme = useSelector((store) => store.theme.currentTheme);
  console.log(currentTheme);

  const isDeviceDarkTheme = useThemeDetector();
  // console.log(isDeviceDarkTheme);
  const handleToDarkTheme = () => {
    dispatch(setCurrentTheme("Dark theme"));
    dispatch(setThemeToDark());
    // dispatch(setDarkTheme(true));
  };
  const handleTolightTheme = () => {
    dispatch(setCurrentTheme("Light theme"));
    dispatch(setThemeToLight());
    // dispatch(setDarkTheme(false));
  };
  const handleDeviceTheme = () => {
    dispatch(setCurrentTheme("Use device theme"));
    if (isDeviceDarkTheme) {
      dispatch(setThemeToDark());
      // dispatch(setDarkTheme(true));
    } else {
      dispatch(setThemeToLight());
      // dispatch(setDarkTheme(false));
    }
  };
  return (
    <>
      {/* for small to medium devices */}
      <div
        className={`AccountContainer md:hidden ${
          darkTheme ? "bg-yellow-100" : "bg-white"
        }   w-full h-full fixed  top-0 right-0 bottom-0 left-0  z-40`}
      >
        <div className="px-3 h-14 shadow-[0px_4px_2px_-2px_#00000033] flex justify-between items-center">
          <div
            className="closeAccount  w-1/12 "
            onClick={() => setShowAppearance(false)}
          >
            <CrossIcon />
          </div>
          <div className="text-lg  w-11/12">Appearance</div>
        </div>
        <div className="">
          <div
            onClick={() => {
              handleDeviceTheme();
              setShowAppearance(false);
            }}
            className="px-3 h-12   flex py-4 justify-between items-center border-b border-[rgba(0,0,0,0.1)]"
          >
            <div className="text-lg  w-10/12">Use device theme</div>
            {currentTheme === "Use device theme" ? (
              <div className=" w-2/12 flex justify-end">
                <RightIcon />
              </div>
            ) : (
              ""
            )}
          </div>
          <div
            onClick={() => {
              handleToDarkTheme();
              setShowAppearance(false);
            }}
            className="px-3 h-12   flex py-4 justify-between items-center border-b border-[rgba(0,0,0,0.1)]"
          >
            <div className="text-lg  w-10/12">Dark theme</div>
            {currentTheme === "Dark theme" ? (
              <div className=" w-2/12 flex justify-end">
                <RightIcon />
              </div>
            ) : (
              ""
            )}
          </div>
          <div
            onClick={() => {
              handleTolightTheme();
              setShowAppearance(false);
            }}
            className="px-3 h-12   flex py-4 justify-between items-center border-b border-[rgba(0,0,0,0.1)]"
          >
            <div className="text-lg  w-10/12">Light theme</div>
            {currentTheme === "Light theme" ? (
              <div className=" w-2/12 flex justify-end">
                <RightIcon />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="py-4  border-b border-[rgba(0,0,0,0.1)]">
          <div className="h-12 bg-white flex  justify-center items-center absolute bottom-0 right-0 left-0">
            <div className="font-semibold text-[#050505]">
              YouTube, a Google company
            </div>
          </div>
        </div>
      </div>

      {/* for large devices */}
      <div
        className={`AccountContainer hidden md:block ${
          darkTheme ? "bg-yellow-50" : "bg-white"
        }  rounded-xl backdrop-blur   w-full h-full  z-40`}
      >
        <div className="px-3 h-14  flex justify-between items-center">
          <div
            className="closeAccount rounded-full p-[5px]   active:bg-[#f2f2f2]   w-2/12 cursor-pointer"
            onClick={() => {
              setShowAppearance(false);
              setshowMoreSettings(false)
            }}
          >
            <ArrowRightIcon />
          </div>
          <div className="text-base font-normal  w-10/12">Appearance</div>
        </div>

        <hr className="border-b border-[rgba(0,0,0,0.1) " />
        <div className="px-5 text-xs my-3 text-gray-500 font-medium">
          Setting applies to this browser only
        </div>
        <div className="">
          <div
            onClick={() => {
              handleDeviceTheme();
              setShowAppearance(false);
              setshowMoreSettings(false)
            }}
            className="px-3 h-12 cursor-pointer  flex py-4 justify-between items-center  hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
          >
            <div className=" w-2/12 flex justify-center items-center">
              {currentTheme === "Use device theme" ? <RightIcon /> : ""}
            </div>
            <div className="text-base  w-10/12">Use device theme</div>
          </div>

          <div
            onClick={() => {
              handleToDarkTheme();
              setShowAppearance(false);
              setshowMoreSettings(false)
            }}
            className="px-3 h-12 cursor-pointer  flex py-4 justify-between items-center hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
          >
            <div className=" w-2/12 flex justify-center items-center">
              {currentTheme === "Dark theme" ? <RightIcon /> : ""}
            </div>
            <div className="text-base  w-10/12">Dark theme</div>
          </div>

          <div
            onClick={() => {
              handleTolightTheme();
              setShowAppearance(false);
              setshowMoreSettings(false)
            }}
            className="px-3 h-12 cursor-pointer  flex py-4 justify-between items-center hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]
            "
          >
            <div className=" w-2/12 flex justify-center items-center">
              {currentTheme === "Light theme" ? <RightIcon /> : ""}
            </div>
            <div className="text-base  w-10/12">Light theme</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppearanceMobile;
