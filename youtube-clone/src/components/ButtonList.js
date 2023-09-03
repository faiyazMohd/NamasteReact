import React from "react";
import ExploreIcon from "../assets/icons/svgs/SvgComponents/ExploreIcon";
import FilterButton from "./FilterButton";
import { useDispatch } from "react-redux";
import { openSidebar, closeSidebar } from "../utils/store/appSlice";
import useScrollUp from "../utils/hooks/useScrollUp";
const ButtonList = () => {
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
  const dispatch = useDispatch();
  const handleOpenSidebar = () => {
    dispatch(openSidebar());
  };
  const isScrollUp = useScrollUp();
  return (
    <div
      className={`buttonlistContainer fixed top-11 md:top-12 right-0 left-0 md:left-20 h-12  md:h-14 bg-white flex items-center mt-1 transition-transform ease-linear  duration-200 ${
        isScrollUp ? "translate-y-0 " : "-translate-y-[200%] md:translate-y-0"
      } `}
    >
      <div className="exploreIcon ml-2 h-8 w-[4.5rem]  md:hidden  border-r-2  flex justify-center items-center">
        <div
          onClick={handleOpenSidebar}
          className="exploreIconCont h-8 w-11 bg-[#0000000d] flex justify-center items-center"
        >
          <div className="exploreIcon w-6">
            <ExploreIcon />
          </div>
        </div>
      </div>
      <div className="ButtonList  flex overflow-auto hide-scrollbar ">
        {filterButtons.map((btnName, index) => {
          return <FilterButton key={index} name={btnName} />;
        })}
      </div>
    </div>
  );
};

export default ButtonList;
