import React, { createRef, useEffect, useRef, useState } from "react";
import ExploreIcon from "../../../../assets/icons/svgs/SvgComponents/ExploreIcon";
import FilterButton from "./FilterButton";
import { useDispatch, useSelector } from "react-redux";
import { openSidebar } from "../../../../utils/store/appSlice";
import useScrollUp from "../../../../utils/hooks/useScrollUp";
import { filterButtonsData } from "../../../../utils/constants/categories";
import RightDirectionIcon from "../../../../assets/icons/svgs/SvgComponents/RightDirectionIcon";

const ButtonList = ({ categoryCode, setCategoryCode }) => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  const showSidebar = useSelector((store) => store.app.showSidebar);
  const buttonListRef = useRef();
  const [scrollX, setScrollX] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);
  const dispatch = useDispatch();
  const handleOpenSidebar = () => {
    dispatch(openSidebar());
  };
  const isScrollUp = useScrollUp();

  useEffect(() => {
    if (buttonListRef.current) {
      setScrollX(buttonListRef.current.scrollLeft);

      setContainerWidth(buttonListRef.current.clientWidth);

      setScrollWidth(buttonListRef.current.scrollWidth);
    }
  }, []);
  const scrollToRight = () => {
    buttonListRef.current.scrollLeft += 85;
  };
  const scrollToLeft = () => {
    buttonListRef.current.scrollLeft -= 85;
  };
  return (
    <div
      className={`buttonlistContainer z-10 ${
        darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
      }  fixed top-11 md:top-12 right-0 left-0 md:left-20 h-12  md:h-14  flex items-center mt-1 transition-transform ease-linear   duration-200 ${
        isScrollUp ? "translate-y-0 " : "-translate-y-[200%] md:translate-y-0"
      }  
      ${
        showSidebar
          ? "xl:translate-x-44 xl:transition-none"
          : "xl:transition-none"
      }
      `}
    >
      <div className="exploreIcon ml-2 h-8 w-[4.5rem]  md:hidden   flex justify-center items-center">
        <div
          onClick={handleOpenSidebar}
          className={`exploreIconCont h-8 w-11 ${
            darkTheme ? "bg-[#222222]" : "bg-[#0000000d]"
          }  flex justify-center items-center`}
        >
          <div className="exploreIcon w-6">
            <ExploreIcon color={darkTheme ? "#fff" : "#000"} />
          </div>
        </div>
      </div>
      <div
        className={` h-8 ml-2 md:hidden ${
          darkTheme ? " border border-[#3f3f3f]" : " border bg-[#0000000d] "
        }`}
      ></div>
      <div className="ButtonListContainer relative overflow-auto  h-9">
        <div
          ref={buttonListRef}
          onScroll={() => {
            setScrollX(buttonListRef.current.scrollLeft);
            setContainerWidth(buttonListRef.current.clientWidth);
            setScrollWidth(buttonListRef.current.scrollWidth);
          }}
          className="ButtonList  flex overflow-auto hide-scrollbar scroll-smooth "
        >
          {filterButtonsData.map((btnName) => {
            return (
              <FilterButton
                key={btnName?.id}
                name={btnName?.snippet?.title}
                id={btnName?.id}
                categoryCode={categoryCode}
                setCategoryCode={setCategoryCode}
              />
            );
          })}
        </div>
        {scrollX === 0 ? (
          ""
        ) : (
          <div
            className={`leftToScrolButton absolute  left-0 top-0 w-12  ${
              darkTheme
                ? "shadow-[10px_0px_15px_15px_#0f0f0f]"
                : "shadow-[4px_0px_15px_10px_#fff]"
            } hidden   md:flex justify-center items-center  ${
              darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
            } `}
          >
            <div
              onClick={scrollToLeft}
              className={`cursor-pointer ${
                darkTheme
                  ? "bg-[#0f0f0f] hover:bg-[#3a3a3a]  active:bg-[#575656]"
                  : "bg-white hover:bg-[#e9e7e7]  active:bg-[#e5e3e3]"
              } cursor-pointer rounded-full h-8  w-8 flex justify-center items-center rotate-180`}
            >
              <RightDirectionIcon color={darkTheme ? "#fff" : "#000"} />
            </div>
          </div>
        )}
        {Math.round(scrollX) + containerWidth === scrollWidth ? (
          ""
        ) : (
          <div
            className={`rightToScrolButton hidden  absolute  right-0 top-0 w-16 md:flex justify-center items-center ${
              darkTheme
                ? "shadow-[-10px_0px_15px_15px_#0f0f0f]"
                : "shadow-[-4px_0px_15px_10px_#fff]"
            }   ${
              darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
            } `}
          >
            <div
              onClick={scrollToRight}
              className={`cursor-pointer ${
                darkTheme
                  ? "bg-[#0f0f0f] hover:bg-[#3a3a3a]  active:bg-[#575656]"
                  : "bg-white hover:bg-[#e9e7e7]  active:bg-[#e5e3e3]"
              } cursor-pointer rounded-full h-8 w-8 flex justify-center items-center `}
            >
              <RightDirectionIcon color={darkTheme ? "#fff" : "#000"} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ButtonList;
