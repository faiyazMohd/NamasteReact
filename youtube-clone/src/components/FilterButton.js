import React from "react";

const FilterButton = ({ name }) => {
  return (
    <div
      className={`mx-2 cursor-pointer px-4 py-3 h-8 flex items-center  justify-center ${
        name === "All" ? "bg-[#606060] md:bg-[#0f0f0f]" : " bg-[#0000000d] "
      }  rounded-md`}
    >
      <div
        className={`text-base md:text-sm   tracking-tighter whitespace-nowrap ${
          name === "All" ? "text-white" : "text-[#0f0f0f]"
        } `}
      >
        {name}
      </div>
    </div>
  );
};

export default FilterButton;
