import React, { useState } from "react";
import { useSelector } from "react-redux";
import YoutubeLogoLight from "../assets/icons/pngs/Youtube-Logo-Dark.png";
import TrendingIcon from "../assets/icons/svgs/SvgComponents/Explore/TrendingIcon";
import MusicIcon from "../assets/icons/svgs/SvgComponents/Explore/MusicIcon";
import LiveIcon from "../assets/icons/svgs/SvgComponents/Explore/LiveIcon";
import GamingIcon from "../assets/icons/svgs/SvgComponents/Explore/GamingIcon";
import NewsIcons from "../assets/icons/svgs/SvgComponents/Explore/NewsIcons";
import SportsIcons from "../assets/icons/svgs/SvgComponents/Explore/SportsIcons";
import LearningIcon from "../assets/icons/svgs/SvgComponents/Explore/LearningIcon";
import FashionIcon from "../assets/icons/svgs/SvgComponents/Explore/FashionIcon";
import ShoppingIcon from "../assets/icons/svgs/SvgComponents/Explore/ShoppingIcon";
import HomeIcon from "../assets/icons/svgs/SvgComponents/HomeIcon";
import ShortsIcon from "../assets/icons/svgs/SvgComponents/ShortsIcon";
import { useDispatch } from "react-redux";
import { closeSidebar, openSidebar } from "../utils/store/appSlice";
import CrossIcon from "../assets/icons/svgs/SvgComponents/CrossIcon";
import HamBurgerIcon from "../assets/icons/svgs/SvgComponents/HamBurgerIcon";
import SubcriptionsIcon from "../assets/icons/svgs/SvgComponents/SubcriptionsIcon";
import LibraryIcon from "../assets/icons/svgs/SvgComponents/LibraryIcon";
import HistoryIcon from "../assets/icons/svgs/SvgComponents/HistoryIcon";
import PlusIcon from "../assets/icons/svgs/SvgComponents/PlusIcon";
import YTPremiumIcon from "../assets/icons/svgs/SvgComponents/YTPremiumIcon";
import YTMusicIcon from "../assets/icons/svgs/SvgComponents/YTMusicIcon";
import YTKidsIcon from "../assets/icons/svgs/SvgComponents/YTKidsIcon";
import SettingIcon from "../assets/icons/svgs/SvgComponents/SettingIcon";
import HelpIcon from "../assets/icons/svgs/SvgComponents/HelpIcon";
import SendFeedBacksIcon from "../assets/icons/svgs/SvgComponents/SendFeedBacksIcon";
import ReportHistoryIcon from "../assets/icons/svgs/SvgComponents/ReportHistoryIcon";
import SignInBtn from "./SignInBtn";
import { Link } from "react-router-dom";
const SideBar = () => {
  const showSidebar = useSelector((store) => store.app.showSidebar);
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
          className="fixed top-0 bottom-0 left-0 right-0 z-30 w-full h-full bg-[rgba(0,0,0,0.6)]"
        ></div>
      </div>
      
      {/*Sidebar for small to medium devices  */}
      <div
        className={`sidebar md:hidden fixed  top-0 bottom-0 left-0 bg-white h-screen w-[70%] z-40 transition-transform ease-out  duration-[225ms] ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        <div className="px-4 h-12 flex  justify-between items-center  ">
          <Link to="/">
            <img src={YoutubeLogoLight} className="w-[89px]" alt="Youtube" />
          </Link>
          <div className="closeAccount " onClick={handleCloseSidebar}>
            <CrossIcon />
          </div>
        </div>
        <div className="px-5 h-12  flex mt-3 justify-between items-center ">
          <div className=" w-1/6 ">
            <TrendingIcon />
          </div>
          <div className="text-base  w-5/6">Trending</div>
        </div>
        <div className="px-5 h-12  flex mt-1 justify-between items-center ">
          <div className=" w-1/6 ">
            <MusicIcon />
          </div>
          <div className="text-base  w-5/6">Music</div>
        </div>
        <div className="px-5 h-12  flex mt-1 justify-between items-center ">
          <div className=" w-1/6 ">
            <LiveIcon />
          </div>
          <div className="text-base  w-5/6">Live</div>
        </div>
        <div className="px-5 h-12  flex mt-1 justify-between items-center ">
          <div className=" w-1/6 ">
            <GamingIcon />
          </div>
          <div className="text-base  w-5/6">Gaming</div>
        </div>
        <div className="px-5 h-12  flex mt-1 justify-between items-center ">
          <div className=" w-1/6 ">
            <NewsIcons />
          </div>
          <div className="text-base  w-5/6">News</div>
        </div>
        <div className="px-5 h-12  flex mt-1 justify-between items-center ">
          <div className=" w-1/6 ">
            <SportsIcons />
          </div>
          <div className="text-base  w-5/6">Sports</div>
        </div>
        <div className="px-5 h-12  flex mt-1 justify-between items-center ">
          <div className=" w-1/6 ">
            <LearningIcon />
          </div>
          <div className="text-base  w-5/6">Learning</div>
        </div>
        <div className="px-5 h-12  flex mt-1 justify-between items-center ">
          <div className=" w-1/6 ">
            <FashionIcon />
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
        }  overflow-auto hidden  md:block xl:hidden fixed top-0 bottom-0 left-0 bg-white h-full w-[240px] z-40 transition-transform ease-out  duration-[225ms] ${
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
              <HamBurgerIcon />
            </div>
            <div className="logo cursor-pointer ">
              <a href="/">
                <img
                  src={YoutubeLogoLight}
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
            <div className="px-3 h-11 mt-1 cursor-pointer rounded-lg py-2 bg-[#f2f2f2]  hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]  flex  items-center ">
              <div className=" w-3/12 ">
                <HomeIcon />
              </div>
              <div className="text-sm  w-9/12 font-semibold">Home</div>
            </div>
            <div className="px-3 h-11 cursor-pointer rounded-lg py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]   flex   items-center ">
              <div className=" w-3/12 ">
                <ShortsIcon />
              </div>
              <div className="text-sm  w-9/12">Shorts</div>
            </div>
            <div className="px-3 h-11 cursor-pointer rounded-lg py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]   flex   items-center ">
              <div className=" w-3/12 ">
                <SubcriptionsIcon />
              </div>
              <div className="text-sm  w-9/12">Subcriptions</div>
            </div>
          </div>
        </div>
        <hr className="border-b border-[rgba(0,0,0,0.1) my-3" />

        {/* library section */}
        <div className="Container w-[220px] ml-2 ">
          <div className="libraryContainer ">
            <div className="px-3 h-11 mt-1 cursor-pointer rounded-lg py-2   hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]  flex  items-center ">
              <div className=" w-3/12 ">
                <LibraryIcon />
              </div>
              <div className="text-sm  w-9/12 ">Library</div>
            </div>
            <div className="px-3 h-11 cursor-pointer rounded-lg py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]   flex  items-center ">
              <div className=" w-3/12 ">
                <HistoryIcon />
              </div>
              <div className="text-sm  w-9/12">History</div>
            </div>
          </div>
        </div>
        <hr className="border-b border-[rgba(0,0,0,0.1) my-3" />

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
        <hr className="border-b border-[rgba(0,0,0,0.1) my-3" />

        {/* Explore section */}
        <div className="Container w-[220px] ml-2 ">
          <div className="exploreContainer ]">
            <div className="px-3 flex mt-3 justify-between items-center ">
              <div className=" w-1/6 text-lg">Explore</div>
            </div>
            <div className="px-3 h-11 mt-1 cursor-pointer rounded-lg py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]  flex  items-center ">
              <div className=" w-3/12 ">
                <TrendingIcon />
              </div>
              <div className="text-sm  w-9/12">Trending</div>
            </div>
            <div className="px-3 h-11 cursor-pointer rounded-lg py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]   flex   items-center ">
              <div className=" w-3/12 ">
                <ShoppingIcon />
              </div>
              <div className="text-sm  w-9/12">Shopping</div>
            </div>
            <div className="px-3 h-11 cursor-pointer rounded-lg py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]   flex   items-center ">
              <div className=" w-3/12 ">
                <MusicIcon />
              </div>
              <div className="text-sm  w-9/12">Music</div>
            </div>
            <div className="px-3 h-11 cursor-pointer rounded-lg py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]   flex   items-center ">
              <div className=" w-3/12 ">
                <LiveIcon />
              </div>
              <div className="text-sm  w-9/12">Live</div>
            </div>
            <div className="px-3 h-11  cursor-pointer rounded-lg py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]   flex   items-center ">
              <div className=" w-3/12 ">
                <GamingIcon />
              </div>
              <div className="text-sm  w-9/12">Gaming</div>
            </div>
            <div className="px-3 h-11  cursor-pointer rounded-lg py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]    flex   items-center ">
              <div className=" w-3/12 ">
                <NewsIcons />
              </div>
              <div className="text-sm  w-9/12">News</div>
            </div>
            <div className="px-3 h-11  cursor-pointer rounded-lg py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]    flex   items-center ">
              <div className=" w-3/12 ">
                <SportsIcons />
              </div>
              <div className="text-sm  w-9/12">Sports</div>
            </div>
            <div className="px-3 h-11  cursor-pointer rounded-lg py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]    flex   items-center ">
              <div className=" w-3/12 ">
                <LearningIcon />
              </div>
              <div className="text-sm  w-9/12">Learning</div>
            </div>
            <div className="px-3 h-11  cursor-pointer rounded-lg py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]    flex   items-center ">
              <div className=" w-3/12 ">
                <FashionIcon />
              </div>
              <div className="text-sm  w-9/12">Fashion & Beauty</div>
            </div>
          </div>
        </div>
        <hr className="border-b border-[rgba(0,0,0,0.1) my-3" />

        {/* Browse Channel section */}
        <div className="Container w-[220px] ml-2 ">
          <div className="libraryContainer ">
            <div className="px-3 h-11 mt-1 cursor-pointer rounded-lg py-2   hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]  flex  items-center ">
              <div className=" w-3/12 ">
                <PlusIcon />
              </div>
              <div className="text-sm  w-9/12 ">Browse Channels</div>
            </div>
          </div>
        </div>
        <hr className="border-b border-[rgba(0,0,0,0.1) my-3" />

        {/* More From YT section */}
        <div className="Container w-[220px] ml-2 ">
          <div className="Container ]">
            <div className="px-3 flex mt-3 justify-between items-center ">
              <div className=" w-1/6 text-base whitespace-nowrap">
                More from YouTube
              </div>
            </div>
            <div className="px-3 h-11 mt-1 cursor-pointer rounded-lg py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]  flex  items-center ">
              <div className=" w-3/12 ">
                <div className="w-6">
                  <YTPremiumIcon />
                </div>
              </div>
              <div className="text-sm  w-9/12">YouTube Premium</div>
            </div>
            <div className="px-3 h-11 cursor-pointer rounded-lg py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]   flex   items-center ">
              <div className=" w-3/12 ">
                <div className="w-6">
                  <YTMusicIcon />
                </div>
              </div>
              <div className="text-sm  w-9/12">YouTube Music</div>
            </div>
            <div className="px-3 h-11 cursor-pointer rounded-lg py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]   flex   items-center ">
              <div className=" w-3/12 ">
                <div className="w-6">
                  <YTKidsIcon />
                </div>
              </div>
              <div className="text-sm  w-9/12">YouTube KIds</div>
            </div>
          </div>
        </div>
        <hr className="border-b border-[rgba(0,0,0,0.1) my-3" />

        {/* settings section */}
        <div className="Container w-[220px] ml-2 ">
          <div className="libraryContainer ">
            <div className="px-3 h-11 mt-1 cursor-pointer rounded-lg py-2   hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]  flex  items-center ">
              <div className=" w-3/12 ">
                <SettingIcon />
              </div>
              <div className="text-sm  w-9/12 ">Settings</div>
            </div>
            <div className="px-3 h-11 cursor-pointer rounded-lg py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]   flex  items-center ">
              <div className=" w-3/12 ">
                <ReportHistoryIcon />
              </div>
              <div className="text-sm  w-9/12">Report history</div>
            </div>
            <div className="px-3 h-11 cursor-pointer rounded-lg py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]   flex  items-center ">
              <div className=" w-3/12 ">
                <HelpIcon />
              </div>
              <div className="text-sm  w-9/12">Help</div>
            </div>
            <div className="px-3 h-11 cursor-pointer rounded-lg py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]   flex  items-center ">
              <div className=" w-3/12 ">
                <SendFeedBacksIcon />
              </div>
              <div className="text-sm  w-9/12">Send feedback</div>
            </div>
          </div>
        </div>
        <hr className="border-b border-[rgba(0,0,0,0.1) my-3" />

        {/* terms and condition section */}
        <div className="Container w-[220px] ">
          <div className="signInContainer px-4 text-sm py-2 flex flex-col ml-2 items-start justify-center">
            <div className="">
              <div className="flex gap-1 text-gray-600 text-sm  font-medium">
                <p className=" cursor-pointer">About</p>{" "}
                <p className="cursor-pointer">Press</p>
                <p className="cursor-pointer">Copyright</p>
              </div>
              <div className="flex gap-1 text-gray-600 text-sm  font-medium">
                <p className="cursor-pointer">Contact us</p>
                <p className="cursor-pointer">Creators</p>
              </div>
              <div className="flex gap-1 text-gray-600 text-sm  font-medium">
                <p className=" cursor-pointer">Advertise</p>
                <p className="cursor-pointer">Developers</p>
              </div>
            </div>
            <div className="mt-3">
              <div className="flex gap-1 text-gray-600 text-sm font-medium flex-nowrap">
                <p className=" cursor-pointer">Terms</p>{" "}
                <p className="cursor-pointer">Privacy</p>
                <p className="whitespace-nowrap cursor-pointer">
                  Policy & Safety
                </p>
              </div>
              <div className="flex gap-1 text-gray-600 text-sm  font-medium">
                <p>How YouTube works</p>
              </div>
              <div className="flex gap-1 text-gray-600  text-sm font-medium">
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
      <div
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
        className={` overflow-auto ${
          isHover ? "sidebarContainer" : "hide-scrollbar"
        }   hidden  ${
          showSidebar ? "xl:block" : "xl:hidden"
        }  bg-white h-full fixed left-0 bottom-0 top-16 z-40 w-[240px] transition-transform ease-out  duration-[225ms] ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        {/* Home section */}
        <div className="Container w-[220px] ml-2 ">
          <div className="homeContainer ">
            <div className="px-3 h-11 mt-1 cursor-pointer rounded-lg py-2 bg-[#f2f2f2]  hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]  flex  items-center ">
              <div className=" w-3/12 ">
                <HomeIcon />
              </div>
              <div className="text-sm  w-9/12 font-semibold">Home</div>
            </div>
            <div className="px-3 h-11 cursor-pointer rounded-lg py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]   flex   items-center ">
              <div className=" w-3/12 ">
                <ShortsIcon />
              </div>
              <div className="text-sm  w-9/12">Shorts</div>
            </div>
            <div className="px-3 h-11 cursor-pointer rounded-lg py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]   flex   items-center ">
              <div className=" w-3/12 ">
                <SubcriptionsIcon />
              </div>
              <div className="text-sm  w-9/12">Subcriptions</div>
            </div>
          </div>
        </div>
        <hr className="border-b border-[rgba(0,0,0,0.1) my-3" />

        {/* library section */}
        <div className="Container w-[220px] ml-2 ">
          <div className="libraryContainer ">
            <div className="px-3 h-11 mt-1 cursor-pointer rounded-lg py-2   hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]  flex  items-center ">
              <div className=" w-3/12 ">
                <LibraryIcon />
              </div>
              <div className="text-sm  w-9/12 ">Library</div>
            </div>
            <div className="px-3 h-11 cursor-pointer rounded-lg py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]   flex  items-center ">
              <div className=" w-3/12 ">
                <HistoryIcon />
              </div>
              <div className="text-sm  w-9/12">History</div>
            </div>
          </div>
        </div>
        <hr className="border-b border-[rgba(0,0,0,0.1) my-3" />

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
        <hr className="border-b border-[rgba(0,0,0,0.1) my-3" />

        {/* Explore section */}
        <div className="Container w-[220px] ml-2 ">
          <div className="exploreContainer ]">
            <div className="px-3 flex mt-3 justify-between items-center ">
              <div className=" w-1/6 text-lg">Explore</div>
            </div>
            <div className="px-3 h-11 mt-1 cursor-pointer rounded-lg py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]  flex  items-center ">
              <div className=" w-3/12 ">
                <TrendingIcon />
              </div>
              <div className="text-sm  w-9/12">Trending</div>
            </div>
            <div className="px-3 h-11 cursor-pointer rounded-lg py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]   flex   items-center ">
              <div className=" w-3/12 ">
                <ShoppingIcon />
              </div>
              <div className="text-sm  w-9/12">Shopping</div>
            </div>
            <div className="px-3 h-11 cursor-pointer rounded-lg py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]   flex   items-center ">
              <div className=" w-3/12 ">
                <MusicIcon />
              </div>
              <div className="text-sm  w-9/12">Music</div>
            </div>
            <div className="px-3 h-11 cursor-pointer rounded-lg py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]   flex   items-center ">
              <div className=" w-3/12 ">
                <LiveIcon />
              </div>
              <div className="text-sm  w-9/12">Live</div>
            </div>
            <div className="px-3 h-11  cursor-pointer rounded-lg py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]   flex   items-center ">
              <div className=" w-3/12 ">
                <GamingIcon />
              </div>
              <div className="text-sm  w-9/12">Gaming</div>
            </div>
            <div className="px-3 h-11  cursor-pointer rounded-lg py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]    flex   items-center ">
              <div className=" w-3/12 ">
                <NewsIcons />
              </div>
              <div className="text-sm  w-9/12">News</div>
            </div>
            <div className="px-3 h-11  cursor-pointer rounded-lg py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]    flex   items-center ">
              <div className=" w-3/12 ">
                <SportsIcons />
              </div>
              <div className="text-sm  w-9/12">Sports</div>
            </div>
            <div className="px-3 h-11  cursor-pointer rounded-lg py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]    flex   items-center ">
              <div className=" w-3/12 ">
                <LearningIcon />
              </div>
              <div className="text-sm  w-9/12">Learning</div>
            </div>
            <div className="px-3 h-11  cursor-pointer rounded-lg py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]    flex   items-center ">
              <div className=" w-3/12 ">
                <FashionIcon />
              </div>
              <div className="text-sm  w-9/12">Fashion & Beauty</div>
            </div>
          </div>
        </div>
        <hr className="border-b border-[rgba(0,0,0,0.1) my-3" />

        {/* Browse Channel section */}
        <div className="Container w-[220px] ml-2 ">
          <div className="libraryContainer ">
            <div className="px-3 h-11 mt-1 cursor-pointer rounded-lg py-2   hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]  flex  items-center ">
              <div className=" w-3/12 ">
                <PlusIcon />
              </div>
              <div className="text-sm  w-9/12 ">Browse Channels</div>
            </div>
          </div>
        </div>
        <hr className="border-b border-[rgba(0,0,0,0.1) my-3" />

        {/* More From YT section */}
        <div className="Container w-[220px] ml-2 ">
          <div className="Container ]">
            <div className="px-3 flex mt-3 justify-between items-center ">
              <div className=" w-1/6 text-base whitespace-nowrap">
                More from YouTube
              </div>
            </div>
            <div className="px-3 h-11 mt-1 cursor-pointer rounded-lg py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]  flex  items-center ">
              <div className=" w-3/12 ">
                <div className="w-6">
                  <YTPremiumIcon />
                </div>
              </div>
              <div className="text-sm  w-9/12">YouTube Premium</div>
            </div>
            <div className="px-3 h-11 cursor-pointer rounded-lg py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]   flex   items-center ">
              <div className=" w-3/12 ">
                <div className="w-6">
                  <YTMusicIcon />
                </div>
              </div>
              <div className="text-sm  w-9/12">YouTube Music</div>
            </div>
            <div className="px-3 h-11 cursor-pointer rounded-lg py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]   flex   items-center ">
              <div className=" w-3/12 ">
                <div className="w-6">
                  <YTKidsIcon />
                </div>
              </div>
              <div className="text-sm  w-9/12">YouTube KIds</div>
            </div>
          </div>
        </div>
        <hr className="border-b border-[rgba(0,0,0,0.1) my-3" />

        {/* settings section */}
        <div className="Container w-[220px] ml-2 ">
          <div className="libraryContainer ">
            <div className="px-3 h-11 mt-1 cursor-pointer rounded-lg py-2   hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]  flex  items-center ">
              <div className=" w-3/12 ">
                <SettingIcon />
              </div>
              <div className="text-sm  w-9/12 ">Settings</div>
            </div>
            <div className="px-3 h-11 cursor-pointer rounded-lg py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]   flex  items-center ">
              <div className=" w-3/12 ">
                <ReportHistoryIcon />
              </div>
              <div className="text-sm  w-9/12">Report history</div>
            </div>
            <div className="px-3 h-11 cursor-pointer rounded-lg py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]   flex  items-center ">
              <div className=" w-3/12 ">
                <HelpIcon />
              </div>
              <div className="text-sm  w-9/12">Help</div>
            </div>
            <div className="px-3 h-11 cursor-pointer rounded-lg py-2 hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]   flex  items-center ">
              <div className=" w-3/12 ">
                <SendFeedBacksIcon />
              </div>
              <div className="text-sm  w-9/12">Send feedback</div>
            </div>
          </div>
        </div>
        <hr className="border-b border-[rgba(0,0,0,0.1) my-3" />

        {/* terms and condition section */}
        <div className="Container w-[220px] ">
          <div className="signInContainer px-4 text-sm py-2 flex flex-col ml-2 items-start justify-center">
            <div className="">
              <div className="flex gap-1 text-gray-600 text-sm  font-medium">
                <p className=" cursor-pointer">About</p>{" "}
                <p className="cursor-pointer">Press</p>
                <p className="cursor-pointer">Copyright</p>
              </div>
              <div className="flex gap-1 text-gray-600 text-sm  font-medium">
                <p className="cursor-pointer">Contact us</p>
                <p className="cursor-pointer">Creators</p>
              </div>
              <div className="flex gap-1 text-gray-600 text-sm  font-medium">
                <p className=" cursor-pointer">Advertise</p>
                <p className="cursor-pointer">Developers</p>
              </div>
            </div>
            <div className="mt-3">
              <div className="flex gap-1 text-gray-600 text-sm font-medium flex-nowrap">
                <p className=" cursor-pointer">Terms</p>{" "}
                <p className="cursor-pointer">Privacy</p>
                <p className="whitespace-nowrap cursor-pointer">
                  Policy & Safety
                </p>
              </div>
              <div className="flex gap-1 text-gray-600 text-sm  font-medium">
                <p>How YouTube works</p>
              </div>
              <div className="flex gap-1 text-gray-600  text-sm font-medium">
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
  );
};

export default SideBar;
