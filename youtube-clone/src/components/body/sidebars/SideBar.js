import React, { useState } from "react";
import { useSelector } from "react-redux";
import YoutubeLogoLight from "../../../assets/icons/pngs/Youtube-Logo-Dark.png";
import YoutubeLogoDark from "../../../assets/icons/pngs/Youtube-Logo-Light.png";

import TrendingIcon from "../../../assets/icons/svgs/SvgComponents/Explore/TrendingIcon";
import MusicIcon from "../../../assets/icons/svgs/SvgComponents/Explore/MusicIcon";
import LiveIcon from "../../../assets/icons/svgs/SvgComponents/Explore/LiveIcon";
import GamingIcon from "../../../assets/icons/svgs/SvgComponents/Explore/GamingIcon";
import NewsIcons from "../../../assets/icons/svgs/SvgComponents/Explore/NewsIcons";
import SportsIcons from "../../../assets/icons/svgs/SvgComponents/Explore/SportsIcons";
import LearningIcon from "../../../assets/icons/svgs/SvgComponents/Explore/LearningIcon";
import FashionIcon from "../../../assets/icons/svgs/SvgComponents/Explore/FashionIcon";
import ShoppingIcon from "../../../assets/icons/svgs/SvgComponents/Explore/ShoppingIcon";
import HomeIcon from "../../../assets/icons/svgs/SvgComponents/HomeIcon";
import ShortsIcon from "../../../assets/icons/svgs/SvgComponents/ShortsIcon";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../../../utils/store/appSlice";
import CrossIcon from "../../../assets/icons/svgs/SvgComponents/CrossIcon";
import HamBurgerIcon from "../../../assets/icons/svgs/SvgComponents/HamBurgerIcon";
import SubcriptionsIcon from "../../../assets/icons/svgs/SvgComponents/SubcriptionsIcon";
import LibraryIcon from "../../../assets/icons/svgs/SvgComponents/LibraryIcon";
import HistoryIcon from "../../../assets/icons/svgs/SvgComponents/HistoryIcon";
import PlusIcon from "../../../assets/icons/svgs/SvgComponents/PlusIcon";
import YTPremiumIcon from "../../../assets/icons/svgs/SvgComponents/YTPremiumIcon";
import YTMusicIcon from "../../../assets/icons/svgs/SvgComponents/YTMusicIcon";
import YTKidsIcon from "../../../assets/icons/svgs/SvgComponents/YTKidsIcon";
import SettingIcon from "../../../assets/icons/svgs/SvgComponents/SettingIcon";
import HelpIcon from "../../../assets/icons/svgs/SvgComponents/HelpIcon";
import SendFeedBacksIcon from "../../../assets/icons/svgs/SvgComponents/SendFeedBacksIcon";
import ReportHistoryIcon from "../../../assets/icons/svgs/SvgComponents/ReportHistoryIcon";
import SignInBtn from "../../others/SignInBtn";
import { Link, useLocation } from "react-router-dom";
const SideBar = () => {
  const showSidebar = useSelector((store) => store.app.showSidebar);
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  const path = useLocation();
  // console.log(path.pathname);
  const [isHover, setIsHover] = useState(false);
  const dispatch = useDispatch();
  const handleCloseSidebar = () => {
    dispatch(closeSidebar());
  };
  return (
    <>
      <div className={`${showSidebar ? "block" : "hidden"} xl:hidden`}>
        <div
          onClick={handleCloseSidebar}
          className="fixed top-0 bottom-0 left-0 right-0 z-30 w-full h-screen md:h-full bg-[rgba(0,0,0,0.6)]"
        ></div>
      </div>

      {/*Sidebar for small to medium devices  */}
      <div
        className={`sidebar md:hidden fixed  top-0 bottom-0 left-0  ${
          darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
        }  h-screen w-[70%] z-40 transition-transform ease-out  duration-[225ms] ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        <div className="px-4 h-12 flex  justify-between items-center  ">
          <Link to="/">
            <img
              src={darkTheme ? YoutubeLogoDark : YoutubeLogoLight}
              className="w-[89px]"
              alt="Youtube"
            />
          </Link>
          <div className="closeAccount " onClick={handleCloseSidebar}>
            <CrossIcon color={darkTheme ? "#fff" : "#000"} />
          </div>
        </div>
        <div className="px-5 h-12  flex mt-3 justify-between items-center ">
          <div className=" w-1/6 ">
            <TrendingIcon color={darkTheme ? "#fff" : "#000"} />
          </div>
          <div className="text-base  w-5/6">Trending</div>
        </div>
        <div className="px-5 h-12  flex mt-1 justify-between items-center ">
          <div className=" w-1/6 ">
            <MusicIcon color={darkTheme ? "#fff" : "#000"} />
          </div>
          <div className="text-base  w-5/6">Music</div>
        </div>
        <div className="px-5 h-12  flex mt-1 justify-between items-center ">
          <div className=" w-1/6 ">
            <LiveIcon color={darkTheme ? "#fff" : "#000"} />
          </div>
          <div className="text-base  w-5/6">Live</div>
        </div>
        <div className="px-5 h-12  flex mt-1 justify-between items-center ">
          <div className=" w-1/6 ">
            <GamingIcon color={darkTheme ? "#fff" : "#000"} />
          </div>
          <div className="text-base  w-5/6">Gaming</div>
        </div>
        <div className="px-5 h-12  flex mt-1 justify-between items-center ">
          <div className=" w-1/6 ">
            <NewsIcons color={darkTheme ? "#fff" : "#000"} />
          </div>
          <div className="text-base  w-5/6">News</div>
        </div>
        <div className="px-5 h-12  flex mt-1 justify-between items-center ">
          <div className=" w-1/6 ">
            <SportsIcons color={darkTheme ? "#fff" : "#000"} />
          </div>
          <div className="text-base  w-5/6">Sports</div>
        </div>
        <div className="px-5 h-12  flex mt-1 justify-between items-center ">
          <div className=" w-1/6 ">
            <LearningIcon color={darkTheme ? "#fff" : "#000"} />
          </div>
          <div className="text-base  w-5/6">Learning</div>
        </div>
        <div className="px-5 h-12  flex mt-1 justify-between items-center ">
          <div className=" w-1/6 ">
            <FashionIcon color={darkTheme ? "#fff" : "#000"} />
          </div>
          <div className="text-base  w-5/6">Fashion & Beauty</div>
        </div>
      </div>

      {/*Sidebar for large devices  */}
      <div
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
        className={` ${
          isHover ? "sidebarContainer" : "hide-scrollbar"
        }  overflow-auto hidden  md:block xl:hidden fixed top-0 bottom-0 left-0  ${
          darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
        }  h-full w-[240px] z-40 transition-transform ease-out  duration-[225ms] ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        {/* logo section */}
        <div className="Container  w-[220px] ml-2 ">
          <div className="left h-12 px-3 mt-2 flex justify-start  items-center">
            <div
              className="hamBurger  mr-6 cursor-pointer "
              onClick={handleCloseSidebar}
            >
              <HamBurgerIcon color={darkTheme ? "#fff" : "#000"} />
            </div>
            <div className="logo cursor-pointer ">
              <a href="/">
                <img
                  src={darkTheme ? YoutubeLogoDark : YoutubeLogoLight}
                  className="w-[90px]"
                  alt="Youtube"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Home section */}
        <div className="Container w-[220px] ml-2 ">
          <div className="homeContainer ">
            <Link to="/" onClick={handleCloseSidebar}>
              <div
                className={`px-3 h-11 mt-1 cursor-pointer rounded-lg py-2 ${
                  darkTheme
                    ? "  hover:bg-[#272727]  active:bg-[#3a3a3a]"
                    : "  hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                }
              ${
                path.pathname === "/"
                  ? darkTheme
                    ? "bg-[#272727]"
                    : "bg-[#f2f2f2]"
                  : ""
              }
              flex  items-center `}
              >
                <div className=" w-3/12 ">
                  <HomeIcon
                    color={darkTheme ? "#fff" : "#000"}
                    filled={path.pathname === "/"}
                  />
                </div>
                <div className="text-sm  w-9/12 font-semibold">Home</div>
              </div>
            </Link>

            <Link to="/shorts" onClick={handleCloseSidebar}>
              <div
                className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                  darkTheme
                    ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                    : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                }
              ${
                path.pathname === "/shorts"
                  ? darkTheme
                    ? "bg-[#272727]"
                    : "bg-[#f2f2f2]"
                  : ""
              }
                flex  items-center `}
              >
                <div className=" w-3/12 ">
                  <ShortsIcon
                    color={darkTheme ? "#fff" : "#000"}
                    filled={path.pathname === "/shorts"}
                  />
                </div>
                <div className="text-sm  w-9/12">Shorts</div>
              </div>
            </Link>

            <Link to="subscriptions" onClick={handleCloseSidebar}>
              <div
                c
                className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                  darkTheme
                    ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                    : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                } ${
                  path.pathname === "/subscriptions"
                    ? darkTheme
                      ? "bg-[#272727]"
                      : "bg-[#f2f2f2]"
                    : ""
                } flex  items-center `}
              >
                <div className=" w-3/12 ">
                  <SubcriptionsIcon
                    color={darkTheme ? "#fff" : "#000"}
                    filled={path.pathname === "/subscriptions"}
                  />
                </div>
                <div className="text-sm  w-9/12">Subcriptions</div>
              </div>
            </Link>
          </div>
        </div>
        <hr
          className={`  ${
            darkTheme
              ? "border-b border-[rgba(255,255,255,0.2)]"
              : "border-b border-[rgba(0,0,0,0.1)]"
          } my-3`}
        />

        {/* library section */}
        <div className="Container w-[220px] ml-2 ">
          <div className="libraryContainer ">
            <Link to="/library" onClick={handleCloseSidebar}>
              <div
                className={`px-3 h-11 mt-1 cursor-pointer rounded-lg py-2 ${
                  darkTheme
                    ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                    : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                } ${
                  path.pathname === "/library"
                    ? darkTheme
                      ? "bg-[#272727]"
                      : "bg-[#f2f2f2]"
                    : ""
                }  flex  items-center `}
              >
                <div className=" w-3/12 ">
                  <LibraryIcon
                    color={darkTheme ? "#fff" : "#000"}
                    filled={path.pathname === "/library"}
                  />
                </div>
                <div className="text-sm  w-9/12 ">Library</div>
              </div>
            </Link>

            <Link to="/history" onClick={handleCloseSidebar}>
              <div
                className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                  darkTheme
                    ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                    : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                } ${
                  path.pathname === "/history"
                    ? darkTheme
                      ? "bg-[#272727]"
                      : "bg-[#f2f2f2]"
                    : ""
                }  flex  items-center `}
              >
                <div className=" w-3/12 ">
                  <HistoryIcon color={darkTheme ? "#fff" : "#000"} />
                </div>
                <div className="text-sm  w-9/12">History</div>
              </div>
            </Link>
          </div>
        </div>
        <hr
          className={`  ${
            darkTheme
              ? "border-b border-[rgba(255,255,255,0.2)]"
              : "border-b border-[rgba(0,0,0,0.1)]"
          } my-3`}
        />

        {/* SignIn section */}
        <div className="Container w-[220px] ">
          <div className="signInContainer px-4 text-sm py-2 flex flex-col ml-2 items-start justify-center">
            <p>Sign in to like videos,</p>
            <p>comment, and subscribe.</p>
            <div className="mt-3">
              <SignInBtn />
            </div>
          </div>
        </div>
        <hr
          className={`  ${
            darkTheme
              ? "border-b border-[rgba(255,255,255,0.2)]"
              : "border-b border-[rgba(0,0,0,0.1)]"
          } my-3`}
        />

        {/* Explore section */}
        <div className="Container w-[220px] ml-2 ">
          <div className="exploreContainer ">
            <div className="px-3 flex mt-3 justify-between items-center ">
              <div className=" w-1/6 text-lg">Explore</div>
            </div>
            <div
              className={`px-3 h-11 mt-1 cursor-pointer rounded-lg py-2 ${
                darkTheme
                  ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                  : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
              }  flex  items-center `}
            >
              <div className=" w-3/12 ">
                <TrendingIcon color={darkTheme ? "#fff" : "#000"} />
              </div>
              <div className="text-sm  w-9/12">Trending</div>
            </div>

            <div
              className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                darkTheme
                  ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                  : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
              }  flex  items-center `}
            >
              <div className=" w-3/12 ">
                <ShoppingIcon color={darkTheme ? "#fff" : "#000"} />
              </div>
              <div className="text-sm  w-9/12">Shopping</div>
            </div>

            <div
              className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                darkTheme
                  ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                  : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
              }  flex  items-center `}
            >
              <div className=" w-3/12 ">
                <MusicIcon color={darkTheme ? "#fff" : "#000"} />
              </div>
              <div className="text-sm  w-9/12">Music</div>
            </div>
            <div
              className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                darkTheme
                  ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                  : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
              }  flex  items-center `}
            >
              <div className=" w-3/12 ">
                <LiveIcon color={darkTheme ? "#fff" : "#000"} />
              </div>
              <div className="text-sm  w-9/12">Live</div>
            </div>
            <div
              className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                darkTheme
                  ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                  : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
              }  flex  items-center `}
            >
              <div className=" w-3/12 ">
                <GamingIcon color={darkTheme ? "#fff" : "#000"} />
              </div>
              <div className="text-sm  w-9/12">Gaming</div>
            </div>
            <div
              className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                darkTheme
                  ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                  : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
              }  flex  items-center `}
            >
              <div className=" w-3/12 ">
                <NewsIcons color={darkTheme ? "#fff" : "#000"} />
              </div>
              <div className="text-sm  w-9/12">News</div>
            </div>

            <div
              className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                darkTheme
                  ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                  : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
              }  flex  items-center `}
            >
              <div className=" w-3/12 ">
                <SportsIcons color={darkTheme ? "#fff" : "#000"} />
              </div>
              <div className="text-sm  w-9/12">Sports</div>
            </div>

            <div
              className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                darkTheme
                  ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                  : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
              }  flex  items-center `}
            >
              <div className=" w-3/12 ">
                <LearningIcon color={darkTheme ? "#fff" : "#000"} />
              </div>
              <div className="text-sm  w-9/12">Learning</div>
            </div>
            <div
              className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                darkTheme
                  ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                  : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
              }  flex  items-center `}
            >
              <div className=" w-3/12 ">
                <FashionIcon color={darkTheme ? "#fff" : "#000"} />
              </div>
              <div className="text-sm  w-9/12">Fashion & Beauty</div>
            </div>
          </div>
        </div>
        <hr
          className={`  ${
            darkTheme
              ? "border-b border-[rgba(255,255,255,0.2)]"
              : "border-b border-[rgba(0,0,0,0.1)]"
          } my-3`}
        />

        {/* Browse Channel section */}
        <div className="Container w-[220px] ml-2 ">
          <div className="libraryContainer ">
            <div
              className={`px-3 h-11 mt-1 cursor-pointer rounded-lg py-2 ${
                darkTheme
                  ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                  : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
              }  flex  items-center `}
            >
              <div className=" w-3/12 ">
                <PlusIcon color={darkTheme ? "#fff" : "#000"} />
              </div>
              <div className="text-sm  w-9/12 ">Browse Channels</div>
            </div>
          </div>
        </div>
        <hr
          className={`border-  ${
            darkTheme
              ? "border-b border-[rgba(255,255,255,0.2)]"
              : "border-b border-[rgba(0,0,0,0.1)]"
          } my-3`}
        />

        {/* More From YT section */}
        <div className="Container w-[220px] ml-2 ">
          <div className="Container ">
            <div className="px-3 flex mt-3 justify-between items-center ">
              <div className=" w-1/6 text-base whitespace-nowrap">
                More from YouTube
              </div>
            </div>
            <div
              className={`px-3 h-11 mt-1 cursor-pointer rounded-lg py-2 ${
                darkTheme
                  ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                  : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
              }  flex  items-center `}
            >
              <div className=" w-3/12 ">
                <div className="w-6">
                  <YTPremiumIcon color={darkTheme ? "#fff" : "#000"} />
                </div>
              </div>
              <div className="text-sm  w-9/12">YouTube Premium</div>
            </div>
            <div
              className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                darkTheme
                  ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                  : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
              }  flex  items-center `}
            >
              <div className=" w-3/12 ">
                <div className="w-6">
                  <YTMusicIcon color={darkTheme ? "#fff" : "#000"} />
                </div>
              </div>
              <div className="text-sm  w-9/12">YouTube Music</div>
            </div>
            <div
              className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                darkTheme
                  ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                  : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
              }  flex  items-center `}
            >
              <div className=" w-3/12 ">
                <div className="w-6">
                  <YTKidsIcon color={darkTheme ? "#fff" : "#000"} />
                </div>
              </div>
              <div className="text-sm  w-9/12">YouTube KIds</div>
            </div>
          </div>
        </div>
        <hr
          className={`border-  ${
            darkTheme
              ? "border-b border-[rgba(255,255,255,0.2)]"
              : "border-b border-[rgba(0,0,0,0.1)]"
          } my-3`}
        />

        {/* settings section */}
        <div className="Container w-[220px] ml-2 ">
          <div className="libraryContainer ">
            <div
              className={`px-3 h-11 mt-1 cursor-pointer rounded-lg py-2 ${
                darkTheme
                  ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                  : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
              }  flex  items-center `}
            >
              <div className=" w-3/12 ">
                <SettingIcon color={darkTheme ? "#fff" : "#000"} />
              </div>
              <div className="text-sm  w-9/12 ">Settings</div>
            </div>
            <div
              className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                darkTheme
                  ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                  : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
              }  flex  items-center `}
            >
              <div className=" w-3/12 ">
                <ReportHistoryIcon color={darkTheme ? "#fff" : "#000"} />
              </div>
              <div className="text-sm  w-9/12">Report history</div>
            </div>
            <div
              className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                darkTheme
                  ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                  : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
              }  flex  items-center `}
            >
              <div className=" w-3/12 ">
                <HelpIcon color={darkTheme ? "#fff" : "#000"} />
              </div>
              <div className="text-sm  w-9/12">Help</div>
            </div>
            <div
              className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                darkTheme
                  ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                  : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
              }  flex  items-center `}
            >
              <div className=" w-3/12 ">
                <SendFeedBacksIcon color={darkTheme ? "#fff" : "#000"} />
              </div>
              <div className="text-sm  w-9/12">Send feedback</div>
            </div>
          </div>
        </div>
        <hr
          className={`border-  ${
            darkTheme
              ? "border-b border-[rgba(255,255,255,0.2)]"
              : "border-b border-[rgba(0,0,0,0.1)]"
          } my-3`}
        />

        {/* terms and condition section */}
        <div className="Container w-[220px] ">
          <div className="signInContainer px-4 text-sm py-2 flex flex-col ml-2 items-start justify-center">
            <div className="">
              <div
                className={`flex gap-1 ${
                  darkTheme ? "text-[#aaa]" : "text-gray-600"
                }  text-sm  font-medium flex-nowrap`}
              >
                <p className=" cursor-pointer">About</p>{" "}
                <p className="cursor-pointer">Press</p>
                <p className="cursor-pointer">Copyright</p>
              </div>
              <div
                className={`flex gap-1 ${
                  darkTheme ? "text-[#aaa]" : "text-gray-600"
                }  text-sm  font-medium flex-nowrap`}
              >
                <p className="cursor-pointer">Contact us</p>
                <p className="cursor-pointer">Creators</p>
              </div>
              <div
                className={`flex gap-1 ${
                  darkTheme ? "text-[#aaa]" : "text-gray-600"
                }  text-sm  font-medium flex-nowrap`}
              >
                <p className=" cursor-pointer">Advertise</p>
                <p className="cursor-pointer">Developers</p>
              </div>
            </div>
            <div className="mt-3">
              <div
                className={`flex gap-1 ${
                  darkTheme ? "text-[#aaa]" : "text-gray-600"
                }  text-sm  font-medium flex-nowrap`}
              >
                <p className=" cursor-pointer">Terms</p>{" "}
                <p className="cursor-pointer">Privacy</p>
                <p className="whitespace-nowrap cursor-pointer">
                  Policy & Safety
                </p>
              </div>
              <div
                className={`flex gap-1 ${
                  darkTheme ? "text-[#aaa]" : "text-gray-600"
                }  text-sm  font-medium flex-nowrap`}
              >
                <p>How YouTube works</p>
              </div>
              <div
                className={`flex gap-1 ${
                  darkTheme ? "text-[#aaa]" : "text-gray-600"
                }  text-sm  font-medium flex-nowrap`}
              >
                <p className=" cursor-pointer">Test new features</p>
              </div>
            </div>
            <div className="my-3">
              <div className="flex  text-xs  text-gray-400 font-medium">
                <p>© 2023 Google LLC</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Sidebar for extra large devices  */}
      {path.pathname === "/watch" ? (
        <>
          <div className={` hidden ${showSidebar ? "xl:block" : "xl:hidden"} `}>
            <div
              onClick={handleCloseSidebar}
              className="fixed top-0 bottom-0 left-0 right-0 z-30 w-full h-full bg-[rgba(0,0,0,0.6)]"
            ></div>
          </div>
          <div
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
            className={` ${
              isHover ? "sidebarContainer" : "hide-scrollbar"
            }  overflow-auto hidden xl:block fixed top-0 bottom-0 left-0  ${
              darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
            }  h-full w-[240px] z-40 transition-transform ease-out  duration-[225ms] ${
              showSidebar ? "translate-x-0" : "-translate-x-full"
            } `}
          >
            {/* logo section */}
            <div className="Container  w-[220px] ml-2 ">
              <div className="left h-12 px-3 mt-2 flex justify-start  items-center">
                <div
                  className="hamBurger  mr-6 cursor-pointer "
                  onClick={handleCloseSidebar}
                >
                  <HamBurgerIcon color={darkTheme ? "#fff" : "#000"} />
                </div>
                <div className="logo cursor-pointer ">
                  <a href="/">
                    <img
                      src={darkTheme ? YoutubeLogoDark : YoutubeLogoLight}
                      className="w-[90px]"
                      alt="Youtube"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Home section */}
            <div className="Container w-[220px] ml-2 ">
              <div className="homeContainer ">
                <Link to="/" onClick={handleCloseSidebar}>
                  <div
                    className={`px-3 h-11 mt-1 cursor-pointer rounded-lg py-2 ${
                      darkTheme
                        ? "  hover:bg-[#272727]  active:bg-[#3a3a3a]"
                        : "  hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                    }
              ${
                path.pathname === "/"
                  ? darkTheme
                    ? "bg-[#272727]"
                    : "bg-[#f2f2f2]"
                  : ""
              }
              flex  items-center `}
                  >
                    <div className=" w-3/12 ">
                      <HomeIcon
                        color={darkTheme ? "#fff" : "#000"}
                        filled={path.pathname === "/"}
                      />
                    </div>
                    <div className="text-sm  w-9/12 font-semibold">Home</div>
                  </div>
                </Link>

                <Link to="/shorts" onClick={handleCloseSidebar}>
                  <div
                    className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                      darkTheme
                        ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                        : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                    }
              ${
                path.pathname === "/shorts"
                  ? darkTheme
                    ? "bg-[#272727]"
                    : "bg-[#f2f2f2]"
                  : ""
              }
                flex  items-center `}
                  >
                    <div className=" w-3/12 ">
                      <ShortsIcon
                        color={darkTheme ? "#fff" : "#000"}
                        filled={path.pathname === "/shorts"}
                      />
                    </div>
                    <div className="text-sm  w-9/12">Shorts</div>
                  </div>
                </Link>

                <Link to="subscriptions" onClick={handleCloseSidebar}>
                  <div
                    c
                    className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                      darkTheme
                        ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                        : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                    } ${
                      path.pathname === "/subscriptions"
                        ? darkTheme
                          ? "bg-[#272727]"
                          : "bg-[#f2f2f2]"
                        : ""
                    } flex  items-center `}
                  >
                    <div className=" w-3/12 ">
                      <SubcriptionsIcon
                        color={darkTheme ? "#fff" : "#000"}
                        filled={path.pathname === "/subscriptions"}
                      />
                    </div>
                    <div className="text-sm  w-9/12">Subcriptions</div>
                  </div>
                </Link>
              </div>
            </div>
            <hr
              className={`  ${
                darkTheme
                  ? "border-b border-[rgba(255,255,255,0.2)]"
                  : "border-b border-[rgba(0,0,0,0.1)]"
              } my-3`}
            />

            {/* library section */}
            <div className="Container w-[220px] ml-2 ">
              <div className="libraryContainer ">
                <Link to="/library" onClick={handleCloseSidebar}>
                  <div
                    className={`px-3 h-11 mt-1 cursor-pointer rounded-lg py-2 ${
                      darkTheme
                        ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                        : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                    } ${
                      path.pathname === "/library"
                        ? darkTheme
                          ? "bg-[#272727]"
                          : "bg-[#f2f2f2]"
                        : ""
                    }  flex  items-center `}
                  >
                    <div className=" w-3/12 ">
                      <LibraryIcon
                        color={darkTheme ? "#fff" : "#000"}
                        filled={path.pathname === "/library"}
                      />
                    </div>
                    <div className="text-sm  w-9/12 ">Library</div>
                  </div>
                </Link>

                <Link to="/history" onClick={handleCloseSidebar}>
                  <div
                    className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                      darkTheme
                        ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                        : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                    } ${
                      path.pathname === "/history"
                        ? darkTheme
                          ? "bg-[#272727]"
                          : "bg-[#f2f2f2]"
                        : ""
                    }  flex  items-center `}
                  >
                    <div className=" w-3/12 ">
                      <HistoryIcon color={darkTheme ? "#fff" : "#000"} />
                    </div>
                    <div className="text-sm  w-9/12">History</div>
                  </div>
                </Link>
              </div>
            </div>
            <hr
              className={`  ${
                darkTheme
                  ? "border-b border-[rgba(255,255,255,0.2)]"
                  : "border-b border-[rgba(0,0,0,0.1)]"
              } my-3`}
            />

            {/* SignIn section */}
            <div className="Container w-[220px] ">
              <div className="signInContainer px-4 text-sm py-2 flex flex-col ml-2 items-start justify-center">
                <p>Sign in to like videos,</p>
                <p>comment, and subscribe.</p>
                <div className="mt-3">
                  <SignInBtn />
                </div>
              </div>
            </div>
            <hr
              className={`  ${
                darkTheme
                  ? "border-b border-[rgba(255,255,255,0.2)]"
                  : "border-b border-[rgba(0,0,0,0.1)]"
              } my-3`}
            />

            {/* Explore section */}
            <div className="Container w-[220px] ml-2 ">
              <div className="exploreContainer ">
                <div className="px-3 flex mt-3 justify-between items-center ">
                  <div className=" w-1/6 text-lg">Explore</div>
                </div>
                <div
                  className={`px-3 h-11 mt-1 cursor-pointer rounded-lg py-2 ${
                    darkTheme
                      ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                      : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                  }  flex  items-center `}
                >
                  <div className=" w-3/12 ">
                    <TrendingIcon color={darkTheme ? "#fff" : "#000"} />
                  </div>
                  <div className="text-sm  w-9/12">Trending</div>
                </div>

                <div
                  className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                    darkTheme
                      ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                      : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                  }  flex  items-center `}
                >
                  <div className=" w-3/12 ">
                    <ShoppingIcon color={darkTheme ? "#fff" : "#000"} />
                  </div>
                  <div className="text-sm  w-9/12">Shopping</div>
                </div>

                <div
                  className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                    darkTheme
                      ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                      : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                  }  flex  items-center `}
                >
                  <div className=" w-3/12 ">
                    <MusicIcon color={darkTheme ? "#fff" : "#000"} />
                  </div>
                  <div className="text-sm  w-9/12">Music</div>
                </div>
                <div
                  className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                    darkTheme
                      ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                      : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                  }  flex  items-center `}
                >
                  <div className=" w-3/12 ">
                    <LiveIcon color={darkTheme ? "#fff" : "#000"} />
                  </div>
                  <div className="text-sm  w-9/12">Live</div>
                </div>
                <div
                  className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                    darkTheme
                      ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                      : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                  }  flex  items-center `}
                >
                  <div className=" w-3/12 ">
                    <GamingIcon color={darkTheme ? "#fff" : "#000"} />
                  </div>
                  <div className="text-sm  w-9/12">Gaming</div>
                </div>
                <div
                  className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                    darkTheme
                      ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                      : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                  }  flex  items-center `}
                >
                  <div className=" w-3/12 ">
                    <NewsIcons color={darkTheme ? "#fff" : "#000"} />
                  </div>
                  <div className="text-sm  w-9/12">News</div>
                </div>

                <div
                  className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                    darkTheme
                      ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                      : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                  }  flex  items-center `}
                >
                  <div className=" w-3/12 ">
                    <SportsIcons color={darkTheme ? "#fff" : "#000"} />
                  </div>
                  <div className="text-sm  w-9/12">Sports</div>
                </div>

                <div
                  className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                    darkTheme
                      ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                      : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                  }  flex  items-center `}
                >
                  <div className=" w-3/12 ">
                    <LearningIcon color={darkTheme ? "#fff" : "#000"} />
                  </div>
                  <div className="text-sm  w-9/12">Learning</div>
                </div>
                <div
                  className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                    darkTheme
                      ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                      : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                  }  flex  items-center `}
                >
                  <div className=" w-3/12 ">
                    <FashionIcon color={darkTheme ? "#fff" : "#000"} />
                  </div>
                  <div className="text-sm  w-9/12">Fashion & Beauty</div>
                </div>
              </div>
            </div>
            <hr
              className={`  ${
                darkTheme
                  ? "border-b border-[rgba(255,255,255,0.2)]"
                  : "border-b border-[rgba(0,0,0,0.1)]"
              } my-3`}
            />

            {/* Browse Channel section */}
            <div className="Container w-[220px] ml-2 ">
              <div className="libraryContainer ">
                <div
                  className={`px-3 h-11 mt-1 cursor-pointer rounded-lg py-2 ${
                    darkTheme
                      ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                      : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                  }  flex  items-center `}
                >
                  <div className=" w-3/12 ">
                    <PlusIcon color={darkTheme ? "#fff" : "#000"} />
                  </div>
                  <div className="text-sm  w-9/12 ">Browse Channels</div>
                </div>
              </div>
            </div>
            <hr
              className={`border-  ${
                darkTheme
                  ? "border-b border-[rgba(255,255,255,0.2)]"
                  : "border-b border-[rgba(0,0,0,0.1)]"
              } my-3`}
            />

            {/* More From YT section */}
            <div className="Container w-[220px] ml-2 ">
              <div className="Container ">
                <div className="px-3 flex mt-3 justify-between items-center ">
                  <div className=" w-1/6 text-base whitespace-nowrap">
                    More from YouTube
                  </div>
                </div>
                <div
                  className={`px-3 h-11 mt-1 cursor-pointer rounded-lg py-2 ${
                    darkTheme
                      ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                      : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                  }  flex  items-center `}
                >
                  <div className=" w-3/12 ">
                    <div className="w-6">
                      <YTPremiumIcon color={darkTheme ? "#fff" : "#000"} />
                    </div>
                  </div>
                  <div className="text-sm  w-9/12">YouTube Premium</div>
                </div>
                <div
                  className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                    darkTheme
                      ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                      : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                  }  flex  items-center `}
                >
                  <div className=" w-3/12 ">
                    <div className="w-6">
                      <YTMusicIcon color={darkTheme ? "#fff" : "#000"} />
                    </div>
                  </div>
                  <div className="text-sm  w-9/12">YouTube Music</div>
                </div>
                <div
                  className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                    darkTheme
                      ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                      : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                  }  flex  items-center `}
                >
                  <div className=" w-3/12 ">
                    <div className="w-6">
                      <YTKidsIcon color={darkTheme ? "#fff" : "#000"} />
                    </div>
                  </div>
                  <div className="text-sm  w-9/12">YouTube KIds</div>
                </div>
              </div>
            </div>
            <hr
              className={`border-  ${
                darkTheme
                  ? "border-b border-[rgba(255,255,255,0.2)]"
                  : "border-b border-[rgba(0,0,0,0.1)]"
              } my-3`}
            />

            {/* settings section */}
            <div className="Container w-[220px] ml-2 ">
              <div className="libraryContainer ">
                <div
                  className={`px-3 h-11 mt-1 cursor-pointer rounded-lg py-2 ${
                    darkTheme
                      ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                      : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                  }  flex  items-center `}
                >
                  <div className=" w-3/12 ">
                    <SettingIcon color={darkTheme ? "#fff" : "#000"} />
                  </div>
                  <div className="text-sm  w-9/12 ">Settings</div>
                </div>
                <div
                  className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                    darkTheme
                      ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                      : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                  }  flex  items-center `}
                >
                  <div className=" w-3/12 ">
                    <ReportHistoryIcon color={darkTheme ? "#fff" : "#000"} />
                  </div>
                  <div className="text-sm  w-9/12">Report history</div>
                </div>
                <div
                  className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                    darkTheme
                      ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                      : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                  }  flex  items-center `}
                >
                  <div className=" w-3/12 ">
                    <HelpIcon color={darkTheme ? "#fff" : "#000"} />
                  </div>
                  <div className="text-sm  w-9/12">Help</div>
                </div>
                <div
                  className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                    darkTheme
                      ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                      : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                  }  flex  items-center `}
                >
                  <div className=" w-3/12 ">
                    <SendFeedBacksIcon color={darkTheme ? "#fff" : "#000"} />
                  </div>
                  <div className="text-sm  w-9/12">Send feedback</div>
                </div>
              </div>
            </div>
            <hr
              className={`border-  ${
                darkTheme
                  ? "border-b border-[rgba(255,255,255,0.2)]"
                  : "border-b border-[rgba(0,0,0,0.1)]"
              } my-3`}
            />

            {/* terms and condition section */}
            <div className="Container w-[220px] ">
              <div className="signInContainer px-4 text-sm py-2 flex flex-col ml-2 items-start justify-center">
                <div className="">
                  <div
                    className={`flex gap-1 ${
                      darkTheme ? "text-[#aaa]" : "text-gray-600"
                    }  text-sm  font-medium flex-nowrap`}
                  >
                    <p className=" cursor-pointer">About</p>{" "}
                    <p className="cursor-pointer">Press</p>
                    <p className="cursor-pointer">Copyright</p>
                  </div>
                  <div
                    className={`flex gap-1 ${
                      darkTheme ? "text-[#aaa]" : "text-gray-600"
                    }  text-sm  font-medium flex-nowrap`}
                  >
                    <p className="cursor-pointer">Contact us</p>
                    <p className="cursor-pointer">Creators</p>
                  </div>
                  <div
                    className={`flex gap-1 ${
                      darkTheme ? "text-[#aaa]" : "text-gray-600"
                    }  text-sm  font-medium flex-nowrap`}
                  >
                    <p className=" cursor-pointer">Advertise</p>
                    <p className="cursor-pointer">Developers</p>
                  </div>
                </div>
                <div className="mt-3">
                  <div
                    className={`flex gap-1 ${
                      darkTheme ? "text-[#aaa]" : "text-gray-600"
                    }  text-sm  font-medium flex-nowrap`}
                  >
                    <p className=" cursor-pointer">Terms</p>{" "}
                    <p className="cursor-pointer">Privacy</p>
                    <p className="whitespace-nowrap cursor-pointer">
                      Policy & Safety
                    </p>
                  </div>
                  <div
                    className={`flex gap-1 ${
                      darkTheme ? "text-[#aaa]" : "text-gray-600"
                    }  text-sm  font-medium flex-nowrap`}
                  >
                    <p>How YouTube works</p>
                  </div>
                  <div
                    className={`flex gap-1 ${
                      darkTheme ? "text-[#aaa]" : "text-gray-600"
                    }  text-sm  font-medium flex-nowrap`}
                  >
                    <p className=" cursor-pointer">Test new features</p>
                  </div>
                </div>
                <div className="my-3">
                  <div className="flex  text-xs  text-gray-400 font-medium">
                    <p>© 2023 Google LLC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div
          onMouseOver={() => setIsHover(true)}
          onMouseOut={() => setIsHover(false)}
          className={` overflow-auto ${
            isHover ? "sidebarContainer" : "hide-scrollbar"
          }   hidden  ${showSidebar ? "xl:block" : "xl:hidden"}   ${
            darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
          }  h-full fixed left-0 bottom-0 top-14 z-40 w-[240px] transition-transform ease-out  duration-[225ms] ${
            showSidebar ? "translate-x-0" : "-translate-x-full"
          } `}
        >
          {/* Home section */}
        <div className="Container w-[220px] ml-2 ">
          <div className="homeContainer ">
            <Link to="/" onClick={handleCloseSidebar}>
              <div
                className={`px-3 h-11 mt-1 cursor-pointer rounded-lg py-2 ${
                  darkTheme
                    ? "  hover:bg-[#272727]  active:bg-[#3a3a3a]"
                    : "  hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                }
              ${
                path.pathname === "/"
                  ? darkTheme
                    ? "bg-[#272727]"
                    : "bg-[#f2f2f2]"
                  : ""
              }
              flex  items-center `}
              >
                <div className=" w-3/12 ">
                  <HomeIcon
                    color={darkTheme ? "#fff" : "#000"}
                    filled={path.pathname === "/"}
                  />
                </div>
                <div className="text-sm  w-9/12 font-semibold">Home</div>
              </div>
            </Link>

            <Link to="/shorts" onClick={handleCloseSidebar}>
              <div
                className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                  darkTheme
                    ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                    : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                }
              ${
                path.pathname === "/shorts"
                  ? darkTheme
                    ? "bg-[#272727]"
                    : "bg-[#f2f2f2]"
                  : ""
              }
                flex  items-center `}
              >
                <div className=" w-3/12 ">
                  <ShortsIcon
                    color={darkTheme ? "#fff" : "#000"}
                    filled={path.pathname === "/shorts"}
                  />
                </div>
                <div className="text-sm  w-9/12">Shorts</div>
              </div>
            </Link>

            <Link to="subscriptions" onClick={handleCloseSidebar}>
              <div
                c
                className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                  darkTheme
                    ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                    : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                } ${
                  path.pathname === "/subscriptions"
                    ? darkTheme
                      ? "bg-[#272727]"
                      : "bg-[#f2f2f2]"
                    : ""
                } flex  items-center `}
              >
                <div className=" w-3/12 ">
                  <SubcriptionsIcon
                    color={darkTheme ? "#fff" : "#000"}
                    filled={path.pathname === "/subscriptions"}
                  />
                </div>
                <div className="text-sm  w-9/12">Subcriptions</div>
              </div>
            </Link>
          </div>
        </div>
        <hr
          className={`  ${
            darkTheme
              ? "border-b border-[rgba(255,255,255,0.2)]"
              : "border-b border-[rgba(0,0,0,0.1)]"
          } my-3`}
        />

        {/* library section */}
        <div className="Container w-[220px] ml-2 ">
          <div className="libraryContainer ">
            <Link to="/library" onClick={handleCloseSidebar}>
              <div
                className={`px-3 h-11 mt-1 cursor-pointer rounded-lg py-2 ${
                  darkTheme
                    ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                    : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                } ${
                  path.pathname === "/library"
                    ? darkTheme
                      ? "bg-[#272727]"
                      : "bg-[#f2f2f2]"
                    : ""
                }  flex  items-center `}
              >
                <div className=" w-3/12 ">
                  <LibraryIcon
                    color={darkTheme ? "#fff" : "#000"}
                    filled={path.pathname === "/library"}
                  />
                </div>
                <div className="text-sm  w-9/12 ">Library</div>
              </div>
            </Link>

            <Link to="/history" onClick={handleCloseSidebar}>
              <div
                className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                  darkTheme
                    ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                    : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                } ${
                  path.pathname === "/history"
                    ? darkTheme
                      ? "bg-[#272727]"
                      : "bg-[#f2f2f2]"
                    : ""
                }  flex  items-center `}
              >
                <div className=" w-3/12 ">
                  <HistoryIcon color={darkTheme ? "#fff" : "#000"} />
                </div>
                <div className="text-sm  w-9/12">History</div>
              </div>
            </Link>
          </div>
        </div>
        <hr
          className={`  ${
            darkTheme
              ? "border-b border-[rgba(255,255,255,0.2)]"
              : "border-b border-[rgba(0,0,0,0.1)]"
          } my-3`}
        />


          {/* SignIn section */}
          <div className="Container w-[220px] ">
            <div className="signInContainer px-4 text-sm py-2 flex flex-col ml-2 items-start justify-center">
              <p>Sign in to like videos,</p>
              <p>comment, and subscribe.</p>
              <div className="mt-3">
                <SignInBtn />
              </div>
            </div>
          </div>
          <hr
            className={`  ${
              darkTheme
                ? "border-b border-[rgba(255,255,255,0.2)]"
                : "border-b border-[rgba(0,0,0,0.1)]"
            } my-3`}
          />

          {/* Explore section */}
          <div className="Container w-[220px] ml-2 ">
            <div className="exploreContainer ">
              <div className="px-3 flex mt-3 justify-between items-center ">
                <div className=" w-1/6 text-lg">Explore</div>
              </div>
              <div
                className={`px-3 h-11 mt-1 cursor-pointer rounded-lg py-2 ${
                  darkTheme
                    ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                    : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                }  flex  items-center `}
              >
                <div className=" w-3/12 ">
                  <TrendingIcon color={darkTheme ? "#fff" : "#000"} />
                </div>
                <div className="text-sm  w-9/12">Trending</div>
              </div>

              <div
                className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                  darkTheme
                    ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                    : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                }  flex  items-center `}
              >
                <div className=" w-3/12 ">
                  <ShoppingIcon color={darkTheme ? "#fff" : "#000"} />
                </div>
                <div className="text-sm  w-9/12">Shopping</div>
              </div>

              <div
                className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                  darkTheme
                    ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                    : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                }  flex  items-center `}
              >
                <div className=" w-3/12 ">
                  <MusicIcon color={darkTheme ? "#fff" : "#000"} />
                </div>
                <div className="text-sm  w-9/12">Music</div>
              </div>
              <div
                className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                  darkTheme
                    ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                    : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                }  flex  items-center `}
              >
                <div className=" w-3/12 ">
                  <LiveIcon color={darkTheme ? "#fff" : "#000"} />
                </div>
                <div className="text-sm  w-9/12">Live</div>
              </div>
              <div
                className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                  darkTheme
                    ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                    : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                }  flex  items-center `}
              >
                <div className=" w-3/12 ">
                  <GamingIcon color={darkTheme ? "#fff" : "#000"} />
                </div>
                <div className="text-sm  w-9/12">Gaming</div>
              </div>
              <div
                className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                  darkTheme
                    ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                    : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                }  flex  items-center `}
              >
                <div className=" w-3/12 ">
                  <NewsIcons color={darkTheme ? "#fff" : "#000"} />
                </div>
                <div className="text-sm  w-9/12">News</div>
              </div>

              <div
                className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                  darkTheme
                    ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                    : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                }  flex  items-center `}
              >
                <div className=" w-3/12 ">
                  <SportsIcons color={darkTheme ? "#fff" : "#000"} />
                </div>
                <div className="text-sm  w-9/12">Sports</div>
              </div>

              <div
                className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                  darkTheme
                    ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                    : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                }  flex  items-center `}
              >
                <div className=" w-3/12 ">
                  <LearningIcon color={darkTheme ? "#fff" : "#000"} />
                </div>
                <div className="text-sm  w-9/12">Learning</div>
              </div>
              <div
                className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                  darkTheme
                    ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                    : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                }  flex  items-center `}
              >
                <div className=" w-3/12 ">
                  <FashionIcon color={darkTheme ? "#fff" : "#000"} />
                </div>
                <div className="text-sm  w-9/12">Fashion & Beauty</div>
              </div>
            </div>
          </div>
          <hr
            className={`  ${
              darkTheme
                ? "border-b border-[rgba(255,255,255,0.2)]"
                : "border-b border-[rgba(0,0,0,0.1)]"
            } my-3`}
          />

          {/* Browse Channel section */}
          <div className="Container w-[220px] ml-2 ">
            <div className="libraryContainer ">
              <div
                className={`px-3 h-11 mt-1 cursor-pointer rounded-lg py-2 ${
                  darkTheme
                    ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                    : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                }  flex  items-center `}
              >
                <div className=" w-3/12 ">
                  <PlusIcon color={darkTheme ? "#fff" : "#000"} />
                </div>
                <div className="text-sm  w-9/12 ">Browse Channels</div>
              </div>
            </div>
          </div>
          <hr
            className={`border-  ${
              darkTheme
                ? "border-b border-[rgba(255,255,255,0.2)]"
                : "border-b border-[rgba(0,0,0,0.1)]"
            } my-3`}
          />

          {/* More From YT section */}
          <div className="Container w-[220px] ml-2 ">
            <div className="Container ">
              <div className="px-3 flex mt-3 justify-between items-center ">
                <div className=" w-1/6 text-base whitespace-nowrap">
                  More from YouTube
                </div>
              </div>
              <div
                className={`px-3 h-11 mt-1 cursor-pointer rounded-lg py-2 ${
                  darkTheme
                    ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                    : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                }  flex  items-center `}
              >
                <div className=" w-3/12 ">
                  <div className="w-6">
                    <YTPremiumIcon color={darkTheme ? "#fff" : "#000"} />
                  </div>
                </div>
                <div className="text-sm  w-9/12">YouTube Premium</div>
              </div>
              <div
                className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                  darkTheme
                    ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                    : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                }  flex  items-center `}
              >
                <div className=" w-3/12 ">
                  <div className="w-6">
                    <YTMusicIcon color={darkTheme ? "#fff" : "#000"} />
                  </div>
                </div>
                <div className="text-sm  w-9/12">YouTube Music</div>
              </div>
              <div
                className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                  darkTheme
                    ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                    : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                }  flex  items-center `}
              >
                <div className=" w-3/12 ">
                  <div className="w-6">
                    <YTKidsIcon color={darkTheme ? "#fff" : "#000"} />
                  </div>
                </div>
                <div className="text-sm  w-9/12">YouTube KIds</div>
              </div>
            </div>
          </div>
          <hr
            className={`border-  ${
              darkTheme
                ? "border-b border-[rgba(255,255,255,0.2)]"
                : "border-b border-[rgba(0,0,0,0.1)]"
            } my-3`}
          />

          {/* settings section */}
          <div className="Container w-[220px] ml-2 ">
            <div className="libraryContainer ">
              <div
                className={`px-3 h-11 mt-1 cursor-pointer rounded-lg py-2 ${
                  darkTheme
                    ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                    : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                }  flex  items-center `}
              >
                <div className=" w-3/12 ">
                  <SettingIcon color={darkTheme ? "#fff" : "#000"} />
                </div>
                <div className="text-sm  w-9/12 ">Settings</div>
              </div>
              <div
                className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                  darkTheme
                    ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                    : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                }  flex  items-center `}
              >
                <div className=" w-3/12 ">
                  <ReportHistoryIcon color={darkTheme ? "#fff" : "#000"} />
                </div>
                <div className="text-sm  w-9/12">Report history</div>
              </div>
              <div
                className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                  darkTheme
                    ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                    : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                }  flex  items-center `}
              >
                <div className=" w-3/12 ">
                  <HelpIcon color={darkTheme ? "#fff" : "#000"} />
                </div>
                <div className="text-sm  w-9/12">Help</div>
              </div>
              <div
                className={`px-3 h-11  cursor-pointer rounded-lg py-2 ${
                  darkTheme
                    ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                    : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                }  flex  items-center `}
              >
                <div className=" w-3/12 ">
                  <SendFeedBacksIcon color={darkTheme ? "#fff" : "#000"} />
                </div>
                <div className="text-sm  w-9/12">Send feedback</div>
              </div>
            </div>
          </div>
          <hr
            className={`border-  ${
              darkTheme
                ? "border-b border-[rgba(255,255,255,0.2)]"
                : "border-b border-[rgba(0,0,0,0.1)]"
            } my-3`}
          />

          {/* terms and condition section */}
          <div className="Container w-[220px] mb-12">
            <div className="signInContainer px-4 text-sm py-2 flex flex-col ml-2 items-start justify-center">
              <div className="">
                <div
                  className={`flex gap-1 ${
                    darkTheme ? "text-[#aaa]" : "text-gray-600"
                  }  text-sm  font-medium flex-nowrap`}
                >
                  <p className=" cursor-pointer">About</p>{" "}
                  <p className="cursor-pointer">Press</p>
                  <p className="cursor-pointer">Copyright</p>
                </div>
                <div
                  className={`flex gap-1 ${
                    darkTheme ? "text-[#aaa]" : "text-gray-600"
                  }  text-sm  font-medium flex-nowrap`}
                >
                  <p className="cursor-pointer">Contact us</p>
                  <p className="cursor-pointer">Creators</p>
                </div>
                <div
                  className={`flex gap-1 ${
                    darkTheme ? "text-[#aaa]" : "text-gray-600"
                  }  text-sm  font-medium flex-nowrap`}
                >
                  <p className=" cursor-pointer">Advertise</p>
                  <p className="cursor-pointer">Developers</p>
                </div>
              </div>
              <div className="mt-3">
                <div
                  className={`flex gap-1 ${
                    darkTheme ? "text-[#aaa]" : "text-gray-600"
                  }  text-sm  font-medium flex-nowrap`}
                >
                  <p className=" cursor-pointer">Terms</p>{" "}
                  <p className="cursor-pointer">Privacy</p>
                  <p className="whitespace-nowrap cursor-pointer">
                    Policy & Safety
                  </p>
                </div>
                <div
                  className={`flex gap-1 ${
                    darkTheme ? "text-[#aaa]" : "text-gray-600"
                  }  text-sm  font-medium flex-nowrap`}
                >
                  <p>How YouTube works</p>
                </div>
                <div
                  className={`flex gap-1 ${
                    darkTheme ? "text-[#aaa]" : "text-gray-600"
                  }  text-sm  font-medium flex-nowrap`}
                >
                  <p className=" cursor-pointer">Test new features</p>
                </div>
              </div>
              <div className="my-3">
                <div className="flex  text-xs  text-gray-400 font-medium">
                  <p>© 2023 Google LLC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
