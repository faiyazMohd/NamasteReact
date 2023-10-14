import React, { useEffect, useState } from "react";
import YoutubeLogoLight from "../../../assets/icons/pngs/Youtube-Logo-Dark.png";
import YoutubeLogoDark from "../../../assets/icons/pngs/Youtube-Logo-Light.png";
import SearchIcon from "../../../assets/icons/svgs/SvgComponents/SearchIcon";
import MicIcon from "../../../assets/icons/svgs/SvgComponents/MicIcon";
import MoreSettingIcon from "../../../assets/icons/svgs/SvgComponents/MoreSettingIcon";
import HamBurgerIcon from "../../../assets/icons/svgs/SvgComponents/HamBurgerIcon";
import CrossIcon from "../../../assets/icons/svgs/SvgComponents/CrossIcon";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_API_SUGGESTIONS } from "../../../utils/constants/constants";
import { openSidebar, toggleSidebar } from "../../../utils/store/appSlice";
import SignInBtn from "../../others/SignInBtn";
import { Link } from "react-router-dom";
import MoreSettings from "./MoreSettings";
import { cacheSearches } from "../../../utils/store/searchSlice";
import VoiceSearchModal from "./VoiceSearchModal";

const Header = () => {
  const [showSearchIcon, setShowSearchIcon] = useState(false);
  const [showMoreSettings, setshowMoreSettings] = useState(false);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [openVoiceSearchModal, setOpenVoiceSearchModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setsuggestions] = useState([]);
  const showSidebar = useSelector((store) => store.app.showSidebar);
  const locationCode = useSelector((store) => store.app.locationCode);
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  const cachedSearch = useSelector((store) => store.search);
  console.log(searchQuery);
  const dispatch = useDispatch();
  const handleOpenSideBar = () => {
    dispatch(openSidebar());
  };
  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };
  const getSuggestions = async () => {
    if (searchQuery.length !== 0) {
      console.log(cachedSearch);
      if (cachedSearch[searchQuery]) {
        setsuggestions(cachedSearch[searchQuery]);
      } else {
        const data = await fetch(
          `https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=chrome&ds=yt&gl=${locationCode}&q=${searchQuery}`
        );
        // console.log(data);
        const json = await data.json();
        console.log(json);
        console.log(searchQuery);
        dispatch(
          cacheSearches({
            [searchQuery]: json[1],
          })
        );
        setsuggestions(json[1]);
      }
    } else {
      setsuggestions([]);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      getSuggestions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  return (
    <>
      <div
        className={`Header fixed top-0 right-0 left-0 z-20 ${
          darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
        }  px-3 h-14 flex justify-between items-center `}
      >
        <>
          <div className="left w-1/5 flex justify-start  items-center">
            <div
              className="hamBurger  ml-3 mr-6 cursor-pointer "
              onClick={handleToggleSidebar}
            >
              <HamBurgerIcon color={darkTheme ? "#fff" : "#000"} />
            </div>
            <div className="logo cursor-pointer ">
              <Link to="/">
                <div className="relative">
                  <div className="text-[.7rem] absolute -top-2 -right-4">
                    {locationCode}
                  </div>
                  <img
                    src={darkTheme ? YoutubeLogoDark : YoutubeLogoLight}
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
                showSearchIcon ? "block border-blue-700" : "invisible"
              } ${
                darkTheme
                  ? "bg-[#121212] border border-[#282828]"
                  : "border border-[#ccc] shadow-[0px_1px_2px_#eee]"
              }  h-8 px-5 py-5 flex items-center rounded-l-full border-r-0`}
            >
              <SearchIcon color={darkTheme ? "#fff " : "#000"} />
            </div>
            <div className="searchBar flex items-center h-8 w-3/4 relative">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => {
                  setShowSearchIcon(true);
                }}
                onBlur={() =>
                  setTimeout(() => {
                    setShowSearchIcon(false);
                  }, 200)
                }
                className={`${
                  showSearchIcon
                    ? "rounded-none border-l-0  px-0  py-5 border-blue-700"
                    : "rounded-l-full  px-5  py-5"
                }  ${
                  darkTheme
                    ? " bg-[#121212] text-white placeholder-[#afaeae] border border-[#282828]"
                    : "bg-white text-[#0f0f0f] placeholder-[#606060] border border-[#ccc] text-lg shadow-[0px_1px_2px_#eee]"
                }   focus:outline-none  h-full w-[100%] `}
              />
              {searchQuery.length !== 0 ? (
                <div
                  onClick={() => setSearchQuery("")}
                  className={`absolute right-12  ${
                    darkTheme ? "hover:bg-[#ffffff1a]" : "bg-[#0000000d]"
                  } cursor-pointer rounded-full  p-[8px] mx-4 `}
                >
                  <CrossIcon color={darkTheme ? "#fff" : "#000"} />
                </div>
              ) : (
                ""
              )}

              {searchQuery.length === 0 ? (
                <div
                  className={` ${
                    darkTheme
                      ? "bg-[#222222] border border-[#282828]"
                      : "bg-[#0000000d] border border-[#ccc] shadow-[0px_1px_2px_#eee] "
                  } ${
                    darkTheme
                      ? "  hover:bg-[#272727]  active:bg-[#3a3a3a]"
                      : "  hover:bg-[#e9e7e7]  active:bg-[#e5e3e3] hover:shadow-[0px_1px_2px_#eee]"
                  } h-full px-5 py-5  flex items-center rounded-r-full cursor-pointer`}
                >
                  <SearchIcon color={darkTheme ? "#fff" : "#000"} />
                </div>
              ) : (
                <Link
                  to={"/results?search_query=" + searchQuery}
                  className={` ${
                    darkTheme
                      ? "bg-[#222222] border border-[#282828]"
                      : "bg-[#0000000d] border border-[#ccc] shadow-[0px_1px_2px_#eee] "
                  } ${
                    darkTheme
                      ? "  hover:bg-[#272727]  active:bg-[#3a3a3a]"
                      : "  hover:bg-[#e9e7e7]  active:bg-[#e5e3e3] hover:shadow-[0px_1px_2px_#eee]"
                  } h-full px-5 py-5  flex items-center rounded-r-full cursor-pointer`}
                >
                  <SearchIcon color={darkTheme ? "#fff" : "#000"} />
                </Link>
              )}
            </div>

            {showSearchIcon && suggestions.length !== 0 ? (
              <>
                <div
                  className={`w-[46%]  py-4  ${
                    darkTheme
                      ? "bg-[#222222] text-white"
                      : "bg-white text-black"
                  }   absolute top-14 z-40 rounded-xl shadow-[0px_4px_24px_#00000026]`}
                >
                  {suggestions.map((suggestion) => {
                    return (
                      <Link to={"/results?search_query=" + suggestion}>
                        <div
                          onClick={() => {
                            setSearchQuery(suggestion);
                          }}
                          className={`px-3  w-full  hidden md:flex  py-1 cursor-pointer justify-between items-center ${
                            darkTheme
                              ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                              : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
                          }}`}
                        >
                          <div className=" w-1/12 flex justify-center">
                            <SearchIcon color={darkTheme ? "#fff" : "#000"} />
                          </div>
                          <div className="text-base w-11/12">{suggestion}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </>
            ) : (
              ""
            )}

            <div
              onClick={() => setOpenVoiceSearchModal(true)}
              className={` ${
                darkTheme
                  ? "bg-[#ffffff1a] hover:bg-[#3a3a3a]  active:bg-[#575656]"
                  : "bg-[#0000000d] hover:bg-[#e9e7e7]  active:bg-[#e5e3e3]"
              } cursor-pointer rounded-full p-[10px] mx-4 `}
            >
              <MicIcon color={darkTheme ? "#fff" : "#000"} />
            </div>
          </div>

          <div className="rightSide  w-1/5 flex justify-end  items-center ">
            <div
              onClick={() => setshowMoreSettings(true)}
              className={`rounded-full p-[10px]  ${
                darkTheme ? "active:bg-[#ffffff1a]" : "active:bg-[#f2f2f2]"
              }    cursor-pointer`}
            >
              <MoreSettingIcon color={darkTheme ? "#fff" : "#000"} />
            </div>
            <div className="mx-3">
              <SignInBtn color={darkTheme ? "#fff" : "#000"} />
            </div>
          </div>
        </>
      </div>

      {showMoreSettings ? (
        <MoreSettings setshowMoreSettings={setshowMoreSettings} />
      ) : (
        ""
      )}
      {openVoiceSearchModal? (
        <VoiceSearchModal
          openVoiceSearchModal={openVoiceSearchModal}
          setOpenVoiceSearchModal={setOpenVoiceSearchModal}
          setSearchQuery={setSearchQuery}
        />
      ):""}
    </>
  );
};

export default Header;
