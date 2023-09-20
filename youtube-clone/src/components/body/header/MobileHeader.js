import React, { useEffect, useState } from "react";
import YoutubeLogoLight from "../../../assets/icons/pngs/Youtube-Logo-Dark.png";
import YoutubeLogoDark from "../../../assets/icons/pngs/Youtube-Logo-Light.png";
import SearchIcon from "../../../assets/icons/svgs/SvgComponents/SearchIcon";
import ProfileIcon from "../../../assets/icons/svgs/SvgComponents/ProfileIcon";
import ArrowRightIcon from "../../../assets/icons/svgs/SvgComponents/ArrowRightIcon";
import MicIcon from "../../../assets/icons/svgs/SvgComponents/MicIcon";
import MobileAccount from "./MobileAccount";
import useScrollUp from "../../../utils/hooks/useScrollUp";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_API_SUGGESTIONS } from "../../../utils/constants/constants";
import { cacheSearches } from "../../../utils/store/searchSlice";
import CrossIcon from "../../../assets/icons/svgs/SvgComponents/CrossIcon";
const MobileHeader = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [showSuggestionBox, setShowSuggestionBox] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setsuggestions] = useState([]);
  const isScrollUp = useScrollUp();
  const locationCode = useSelector((store) => store.app.locationCode);
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  const cachedSearch = useSelector((store) => store.search);
  const path = useLocation();
  const dispatch = useDispatch();
  // console.log("isScrollUp in header is :" + isScrollUp);

  const getSuggestions = async () => {
    if (searchQuery.length !== 0) {
      console.log(cachedSearch);
      if (cachedSearch[searchQuery]) {
        setsuggestions(cachedSearch[searchQuery]);
      } else {
        const data = await fetch(
          `https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=chrome&ds=yt&gl=${locationCode}&q=${searchQuery}`
        );
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
        className={`Mobile-Header fixed top-0 right-0 left-0 z-20  ${
          darkTheme
            ? showSearch
              ? "bg-[#212121]   "
              : "bg-[#0f0f0f] text-white"
            : "bg-white text-black"
        }   px-3 h-12 shadow-[0px_4px_2px_-2px_#00000033] flex justify-between items-center transition-transform ease-linear duration-200 ${
          path.pathname === "/watch"
            ? ""
            : isScrollUp
            ? "translate-y-0"
            : "-translate-y-full"
        } `}
      >
        <div className="logo w-28 ">
          <Link to="/">
            <div className="relative">
              <div className="text-[.6rem] absolute -top-2 right-3">
                {locationCode}
              </div>
              <img
                src={darkTheme ? YoutubeLogoDark : YoutubeLogoLight}
                className="w-[89px]"
                alt="Youtube"
              />
            </div>
          </Link>
        </div>
        <div className="rightSide flex justify-between items-center gap-6 ">
          <div className="searchBar" onClick={() => setShowSearch(true)}>
            <SearchIcon color={darkTheme ? "#fff" : "#000"} />
          </div>
          <div className="account" onClick={() => setShowAccount(true)}>
            <ProfileIcon color={darkTheme ? "#fff" : "#000"} />
          </div>
        </div>
      </div>

      {showSearch ? (
        <>
          <div
            className={`Mobile-Header fixed top-0 right-0 left-0 z-20  ${
              darkTheme
                ? showSearch
                  ? "bg-[#212121]   "
                  : "bg-[#0f0f0f] text-white"
                : "bg-white text-black"
            }   px-3 h-12 shadow-[0px_4px_2px_-2px_#00000033] flex justify-between items-center transition-transform ease-linear duration-200  `}
          >
            <div className={"left"} onClick={() => setShowSearch(false)}>
              <ArrowRightIcon color={darkTheme ? "#fff" : "#000"} />
            </div>
            <div
              className={`searchBar flex items-center h-8  ${
                showSuggestion || searchQuery !== 0 ? "w-full mx-2" : "w-3/4"
              }   `}
            >
              <input
                type="text"
                placeholder="Search YouTube"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestion(true)}
                onBlur={() =>
                  setTimeout(() => {
                    setShowSuggestion(false);
                  }, 200)
                }
                className={`${
                  darkTheme
                    ? "bg-[#ffffff1a] text-white placeholder-[#afaeae]"
                    : "bg-[#0000000d] text-[#0f0f0f] placeholder-[#606060]"
                }   focus:outline-none  h-full w-full px-4 py-4 rounded-l-full`}
              />
              <Link
                to={"/results?search_query=" + searchQuery}
                className={`${
                  darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
                }  h-full px-2 flex items-center rounded-r-full`}
              >
                <SearchIcon color={darkTheme ? "#fff" : "#000"} />
              </Link>
              {searchQuery.length !== 0 ? (
                <div
                  onClick={() => setSearchQuery("")}
                  className={`absolute right-14  ${
                    darkTheme ? "active:bg-[#ffffff1a]" : "b"
                  } cursor-pointer rounded-full p-[1px] mx-2 `}
                >
                  <CrossIcon height={16} color={darkTheme ? "#fff" : "#000"} />
                </div>
              ) : (
                ""
              )}
            </div>
            {searchQuery.length === 0 ? (
              <div
                className={`right ${
                  darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
                }  rounded-full p-1`}
              >
                <MicIcon color={darkTheme ? "#fff" : "#000"} />
              </div>
            ) : (
              ""
            )}
          </div>

          {showSuggestion && suggestions.length !== 0 ? (
            <div
              className={`w-[100%] py-2   ${
                darkTheme ? "bg-[#222222] text-white" : "bg-white text-black"
              }   fixed top-11 right-0 left-0 z-30 `}
            >
              {suggestions.map((suggestion) => {
                return (
                  <>
                    <Link to={"/results?search_query=" + suggestion}>
                      <div
                      onClick={()=>setSearchQuery(suggestion)}
                        className={`px-3 z-30 w-full  flex md:hidden  py-1.5 cursor-pointer justify-between items-center
                 
                  ${
                    darkTheme
                      ? " hover:bg-[#272727]  active:bg-[#3a3a3a] border-b border-[rgba(255,255,255,0.2)]"
                      : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3] border-b border-[rgba(0,0,0,0.1)]"
                  }}`}
                      >
                        <div className=" w-1/12 flex justify-center">
                          <SearchIcon color={darkTheme ? "#fff" : "#000"} />
                        </div>
                        <div className="text-base ml-1 w-11/12">
                          {suggestion}
                        </div>
                      </div>
                    </Link>
                    {/* <hr
                      className={`  ${
                        darkTheme
                          ? "border-b border-[rgba(255,255,255,0.2)]"
                          : "border-b border-[rgba(0,0,0,0.1)]"
                      } `}
                    /> */}
                  </>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}

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
/*
    <>
      <div
        className={`Mobile-Header fixed top-0 right-0 left-0 z-20  ${
          darkTheme
            ? showSearch
              ? "bg-[#212121]   "
              : "bg-[#0f0f0f] text-white"
            : "bg-white text-black"
        }   px-3 h-12 shadow-[0px_4px_2px_-2px_#00000033] flex justify-between items-center transition-transform ease-linear duration-200 ${
          path.pathname === "/watch"
            ? ""
            : isScrollUp
            ? "translate-y-0"
            : "-translate-y-full"
        } `}
      >
        <div className="logo w-28 ">
          <Link to="/">
            <div className="relative">
              <div className="text-[.6rem] absolute -top-2 right-3">
                {locationCode}
              </div>
              <img
                src={darkTheme ? YoutubeLogoDark : YoutubeLogoLight}
                className="w-[89px]"
                alt="Youtube"
              />
            </div>
          </Link>
        </div>
        <div className="rightSide flex justify-between items-center gap-6 ">
          <div className="searchBar" onClick={() => setShowSearch(true)}>
            <SearchIcon color={darkTheme ? "#fff" : "#000"} />
          </div>
          <div className="account" onClick={() => setShowAccount(true)}>
            <ProfileIcon color={darkTheme ? "#fff" : "#000"} />
          </div>
        </div>
      </div>

      {showSearch ? (
        <div>
          <div className={``}>
            <div className="fixed top-0 bottom-0 left-0 right-0 z-10 w-full h-screen bg-[rgba(0,0,0,0.6)]"></div>
          </div>
          <div
            className={`Mobile-Header fixed top-0 right-0 left-0 z-20  ${
              darkTheme
                ? showSearch
                  ? "bg-[#212121]   "
                  : "bg-[#0f0f0f] text-white"
                : "bg-white text-black"
            }   px-3 h-12 shadow-[0px_4px_2px_-2px_#00000033] flex justify-between items-center transition-transform ease-linear duration-200  `}
          >
            <div className={"left"} onClick={() => setShowSearch(false)}>
              <ArrowRightIcon color={darkTheme ? "#fff" : "#000"} />
            </div>
            <div
              className={`searchBar flex items-center h-8  ${
                showSuggestion || searchQuery !== 0 ? "w-full mx-2" : "w-3/4"
              }   `}
            >
              <input
                type="text"
                placeholder="Search YouTube"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestion(true)}
                onBlur={() => setShowSuggestion(false)}
                className={`${
                  darkTheme
                    ? "bg-[#ffffff1a] text-white placeholder-[#afaeae]"
                    : "bg-[#0000000d] text-[#0f0f0f] placeholder-[#606060]"
                }   focus:outline-none  h-full w-full px-4 py-4 rounded-l-full`}
              />
              <Link
                to={"/results?search_query=" + searchQuery}
                className={`${
                  darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
                }  h-full px-2 flex items-center rounded-r-full`}
              >
                <SearchIcon color={darkTheme ? "#fff" : "#000"} />
              </Link>
              {searchQuery.length !== 0 ? (
                <div
                  onClick={() => setSearchQuery("")}
                  className={`absolute right-14  ${
                    darkTheme ? "active:bg-[#ffffff1a]" : "b"
                  } cursor-pointer rounded-full p-[1px] mx-2 `}
                >
                  <CrossIcon height={16} color={darkTheme ? "#fff" : "#000"} />
                </div>
              ) : (
                ""
              )}
            </div>
            {searchQuery.length === 0 ? (
              <div
                className={`right ${
                  darkTheme ? "bg-[#ffffff1a]" : "bg-[#0000000d]"
                }  rounded-full p-1`}
              >
                <MicIcon color={darkTheme ? "#fff" : "#000"} />
              </div>
            ) : (
              ""
            )}
          </div>

          {showSuggestion && suggestions.length !== 0 ? (
            <div>
              {suggestions.map((suggestion) => {
                return (
                  <div
                    className={`w-[100%] py-2   ${
                      darkTheme
                        ? "bg-[#222222] text-white"
                        : "bg-white text-black"
                    }   fixed top-11 right-0 left-0 z-30 `}
                  >
                    <Link to={"/results?search_query=" + suggestion}>
                      <div
                        // onClick={() => {}}
                        className={`px-3  w-full  flex md:hidden  py-1.5 cursor-pointer justify-between items-center
                 
                  ${
                    darkTheme
                      ? " hover:bg-[#272727]  active:bg-[#3a3a3a] border- border-[rgba(255,255,255,0.2)]"
                      : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3] border- border-[rgba(0,0,0,0.1)]"
                  }}`}
                      >
                        <div className=" w-1/12 flex justify-center">
                          <SearchIcon color={darkTheme ? "#fff" : "#000"} />
                        </div>
                        <div className="text-base ml-1 w-11/12">
                          {suggestion}
                        </div>
                      </div>
                    </Link>

                    <hr
                      className={`  ${
                        darkTheme
                          ? "border-b border-[rgba(255,255,255,0.2)]"
                          : "border-b border-[rgba(0,0,0,0.1)]"
                      } `}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}

      {showAccount ? (
        <div className="AccountContainer">
          <MobileAccount setShowAccount={setShowAccount} />
        </div>
      ) : (
        ""
      )}

    </>
    */
