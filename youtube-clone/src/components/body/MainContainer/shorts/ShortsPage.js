import React from "react";
import OfflineCloudIcon from "../../../../assets/icons/svgs/SvgComponents/OfflineCloudIcon";
import ManOnSpaceIcon from "../../../../assets/icons/svgs/SvgComponents/ManOnSpaceIcon";
import { useSelector } from "react-redux";
import ShortsIcon from "../../../../assets/icons/svgs/SvgComponents/ShortsIcon";

const ShortsPage = () => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  document.title = "Shorts - YouTube";
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen ">
      <div className="shorts flex justify-center items-center gap-3">
        <div className="">
          <ShortsIcon size={90} color={darkTheme ? "red" : "red"} />
        </div>
        <div className="text-3xl font-medium">Shorts</div>
      </div>
      <div className="text-xl font-medium md:text-2xl mt-3">
        Coming soon.. on  You<span className="text-red-600">Tube</span>
      </div>
    </div>
  );
};

export default ShortsPage;
