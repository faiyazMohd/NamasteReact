import React from "react";
import LibraryIcon from "../../../../assets/icons/svgs/SvgComponents/LibraryIcon";
import SignInBtn from "../../../others/SignInBtn";
import { useSelector } from "react-redux";

const LibraryPage = () => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  document.title = "Library - YouTube";
  return (
    <div
      className={`flex flex-col items-center justify-center w-full h-screen ${
        darkTheme
          ? "bg-[#ffffff1a] md:bg-inherit text-white "
          : "bg-[#0000000d] md:bg-white text-[#0f0f0f] "
      }`}
    >
      <div className="icon  md:hidden">
        {/* <LibraryIcon size={90} color={darkTheme ? "#fff" : "#000"} /> */}
        <img
          class="promo-img"
          alt=""
          src="https://m.youtube.com/static/sign_in_promo.png"
        />
      </div>
      <div className="icon hidden md:block ">
        <LibraryIcon size={120} color={darkTheme ? "#fff" : "#000"} />
      </div>
      <div className="text-xl font-medium md:text-2xl mt-3">
        Enjoy your favorite videos
      </div>
      <div className=" text-xs md:text-base  mt-2  text-center">
        Sign in to access videos that you’ve liked or saved
      </div>
      <div className="mt-4">
        <SignInBtn />
      </div>
    </div>
  );
};

export default LibraryPage;
