import React from "react";
import { useSelector } from "react-redux";
import NoResultsIcon from "../../../../assets/icons/svgs/SvgComponents/NoResultsIcon";

const NoResults = () => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);

  return (
    <div
      className={`flex flex-col items-center justify-center w-full h-[70vvh] md:h-screen`}
    >
      <div className="icon  sm:hidden">
        <NoResultsIcon width={224} height={140}/>
      </div>
      <div className="icon hidden sm:block">
        <NoResultsIcon width={424} height={240}/>
      </div>
      <div className="text-xl font-medium md:text-2xl mt-3">
        No results found
      </div>
      <div className=" text-xs md:text-base  mt-2  text-center">
        Try different keywords or remove search filters
      </div>
    </div>
  );
};

export default NoResults;
