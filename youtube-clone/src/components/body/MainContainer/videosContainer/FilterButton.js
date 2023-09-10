import React from "react";
import { useSelector } from "react-redux";

const FilterButton = ({ name }) => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);

  return (
    <div
      className={`mx-2 cursor-pointer px-4 py-3 h-8 flex items-center  justify-center 
      ${
        name === "All"
          ? darkTheme
            ? "bg-white"
            : "bg-[#606060] md:bg-[#0f0f0f]"
          : darkTheme
          ? "bg-[#222222] "
          : "bg-[#0000000d]"
      }
      rounded-md `}
    >
      <div
        className={`text-base md:text-sm   tracking-tighter whitespace-nowrap 
        ${
          name === "All"
            ? darkTheme
              ? "text-black"
              : "text-white"
            : darkTheme
            ? "text-white"
            : "text-black"
        }
        `}
      >
        {name}
      </div>
    </div>
  );
};

export default FilterButton;
