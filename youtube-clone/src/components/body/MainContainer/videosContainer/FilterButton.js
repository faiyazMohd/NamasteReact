import React from "react";
import { useSelector } from "react-redux";

const FilterButton = ({ name, id, categoryCode, setCategoryCode }) => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);

  return (
    <div
      onClick={() => {
        setCategoryCode(id);
        window.scrollTo(0, 0);

      }}
      className={`mx-1 md:mx-2 cursor-pointer px-4 py-3 h-8 flex items-center  justify-center 
      ${
        id === categoryCode
          ? darkTheme
            ? "bg-white"
            : "bg-[#606060] md:bg-[#0f0f0f]"
          : darkTheme
          ? "bg-[#ffffff1a] hover:bg-[#3a3a3a]  active:bg-[#575656]"
          : "bg-[#0000000d] hover:bg-[#e9e7e7]  active:bg-[#e5e3e3]"
      }
      rounded-lg `}
    >
      <div
        className={`text-base md:text-sm   tracking-tighter whitespace-nowrap 
        ${
          id === categoryCode
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
