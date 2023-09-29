import React from "react";
import HomeIcon from "../../../assets/icons/svgs/SvgComponents/HomeIcon";
import ShortsIcon from "../../../assets/icons/svgs/SvgComponents/ShortsIcon";
import SubcriptionsIcon from "../../../assets/icons/svgs/SvgComponents/SubcriptionsIcon";
import LibraryIcon from "../../../assets/icons/svgs/SvgComponents/LibraryIcon";
import HistoryIcon from "../../../assets/icons/svgs/SvgComponents/HistoryIcon";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
const SideNavbar = () => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  const path = useLocation();
  return (
    <>
      {/* small to medium devices */}
      {path.pathname==="/watch"? "" :
      <div
        className={` md:hidden border border-[#0000001a]  w-full h-12 fixed z-20 bottom-0 right-0  ${
          darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
        }  flex `}
      >
        <Link
          to="/"
          className="Home   px-2 pt-4 pb-3  cursor-pointer w-full flex items-center flex-col justify-center"
        >
          {/* <div > */}
          <div className="icon">
            <HomeIcon
              color={darkTheme ? "#fff" : "#000"}
              filled={path.pathname === "/"}
            />
          </div>
          <div className="home text-xs mb-1">Home</div>
          {/* </div> */}
        </Link>

        <Link
          to="/shorts"
          className="shorts    px-2 pt-4 pb-3    cursor-pointer w-full flex items-center flex-col justify-center"
        >
          <div className="icon">
            <ShortsIcon
              color={darkTheme ? "#fff" : "#000"}
              filled={path.pathname === "/shorts"}
            />
          </div>
          <div className="home text-xs  mb-1">Shorts</div>
        </Link>

        <Link
          to="/library"
          className="library   px-2 pt-4 pb-3  cursor-pointer w-full flex items-center flex-col justify-center"
        >
          <div className="icon">
            <LibraryIcon
              color={darkTheme ? "#fff" : "#000"}
              filled={path.pathname === "/library"}
            />
          </div>
          <div className="home text-xs mb-1">Library</div>
        </Link>
      </div>}

      {/* from large devices */}
      {path.pathname === "/watch" ? (
        ""
      ) : (
        <div
          className={` hidden ${path.pathname === "/results"? "xl:block" : "md:block"}    w-[4.5rem] h-full fixed z-20 left-0 bottom-0 top-14  ${
            darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
          } `}
        >
          <Link to="/">
            <div
              className={`Home rounded-lg ml-1 w-16 px-2 pt-4 pb-3 ${
                darkTheme
                  ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                  : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
              }
            ${
              path.pathname === "/"
                ? darkTheme
                  ? "bg-[#272727]"
                  : "bg-[#f2f2f2]"
                : ""
            }
            mt-2  cursor-pointer  flex items-center flex-col justify-center`}
            >
              <div className="icon">
                <HomeIcon
                  color={darkTheme ? "#fff" : "#000"}
                  filled={path.pathname === "/"}
                />
              </div>
              <div className="home text-xs mt-1">Home</div>
            </div>
          </Link>

          <Link to="/shorts">
            <div
              className={`Home rounded-lg ml-1 w-16 px-2 pt-4 pb-3 ${
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
              mt-2  cursor-pointer  flex items-center flex-col justify-center`}
            >
              <div className="icon">
                <ShortsIcon
                  color={darkTheme ? "#fff" : "#000"}
                  filled={path.pathname === "/shorts"}
                />
              </div>
              <div className="home text-xs mt-1">Shorts</div>
            </div>
          </Link>

          <Link to="subscriptions">
            <div
              className={`Home rounded-lg ml-1 w-16 px-2 pt-4 pb-3 ${
                darkTheme
                  ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                  : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
              } ${
                path.pathname === "/subscriptions"
                  ? darkTheme
                    ? "bg-[#272727]"
                    : "bg-[#f2f2f2]"
                  : ""
              } mt-2  cursor-pointer  flex items-center flex-col justify-center`}
            >
              <div className="icon">
                <SubcriptionsIcon
                  color={darkTheme ? "#fff" : "#000"}
                  filled={path.pathname === "/subscriptions"}
                />
              </div>
              <div className="home text-[.66rem] mt-1">Subscriptions</div>
            </div>
          </Link>

          <Link to="library">
            <div
              className={`Home rounded-lg ml-1 w-16 px-2 pt-4 pb-3 ${
                darkTheme
                  ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                  : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
              }
              ${
                path.pathname === "/library"
                  ? darkTheme
                    ? "bg-[#272727]"
                    : "bg-[#f2f2f2]"
                  : ""
              }
              mt-2  cursor-pointer  flex items-center flex-col justify-center`}
            >
              <div className="icon">
                <LibraryIcon
                  color={darkTheme ? "#fff" : "#000"}
                  filled={path.pathname === "/library"}
                />
              </div>
              <div className="home text-xs mt-1">Library</div>
            </div>
          </Link>

          <Link to="history">
            <div
              className={`Home rounded-lg ml-1 w-16 px-2 pt-4 pb-3 ${
                darkTheme
                  ? " hover:bg-[#272727]  active:bg-[#3a3a3a]"
                  : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
              } 
              ${
                path.pathname === "/history"
                  ? darkTheme
                    ? "bg-[#272727]"
                    : "bg-[#f2f2f2]"
                  : ""
              }
              mt-2  cursor-pointer  flex items-center flex-col justify-center`}
            >
              <div className="icon">
                <HistoryIcon color={darkTheme ? "#fff" : "#000"} />
              </div>
              <div className="home text-xs mt-1">History</div>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default SideNavbar;
