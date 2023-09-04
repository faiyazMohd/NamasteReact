import React from "react";
import ExploreIcon from "../../../../assets/icons/svgs/SvgComponents/ExploreIcon";
import FilterButton from "./FilterButton";
import { useDispatch, useSelector } from "react-redux";
import { openSidebar, closeSidebar } from "../../../../utils/store/appSlice";
import useScrollUp from "../../../../utils/hooks/useScrollUp";
let filterButtons = [
  "All",
  "Music",
  "Gaming",
  "Coding",
  "Jawan Trailer",
  "Geopolitics",
  "Politics",
  "Chess",
  "Science",
  "Comedy",
  "Sports",
  "Chandrayaan3",
  "Moon",
  "React js",
  "Cars",
];
const ButtonList = () => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);

  const dispatch = useDispatch();
  const handleOpenSidebar = () => {
    dispatch(openSidebar());
  };
  const isScrollUp = useScrollUp();
  return (
    <div
      className={`buttonlistContainer  ${
        darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
      }  fixed top-11 md:top-12 right-0 left-0 md:left-20 h-12  md:h-14  flex items-center mt-1 transition-transform ease-linear  duration-200 ${
        isScrollUp ? "translate-y-0 " : "-translate-y-[200%] md:translate-y-0"
      } `}
    >
      <div className="exploreIcon ml-2 h-8 w-[4.5rem]  md:hidden   flex justify-center items-center">
        <div
          onClick={handleOpenSidebar}
          className={`exploreIconCont h-8 w-11 ${darkTheme? "bg-[#222222]": "bg-[#0000000d]"}  flex justify-center items-center`}
        >
          <div className="exploreIcon w-6">
            <ExploreIcon color={darkTheme ? "#fff" : "#000"}/>
          </div>
        </div>
      </div>
      <div className={` h-8 ml-2  ${darkTheme? " border border-[#3f3f3f]": " border bg-[#0000000d] "}`}></div>
      <div className="ButtonList  flex overflow-auto hide-scrollbar ">
        {filterButtons.map((btnName, index) => {
          return <FilterButton key={index} name={btnName} />;
        })}
      </div>
    </div>
  );
};

export default ButtonList;
