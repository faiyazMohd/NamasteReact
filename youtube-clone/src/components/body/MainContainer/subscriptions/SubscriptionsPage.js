import React from "react";
import { useSelector } from "react-redux";
import SubbedPageIcon from "../../../../assets/icons/svgs/SvgComponents/SubbedPageIcon";
import SignInBtn from "../../../others/SignInBtn";

const SubscriptionsPage = () => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  document.title = "Subscriptions - YouTube";
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      
      <div className="icon  md:hidden">
        <SubbedPageIcon size={90} color={darkTheme ? "#fff" : "#000"} />
      </div>
      <div className="icon hidden md:block">
        <SubbedPageIcon size={120} color={darkTheme ? "#fff" : "#000"} />
      </div>
      <div className="text-xl font-medium md:text-2xl mt-3">
        Don’t miss new videos
      </div>
      <div className=" text-xs md:text-base  mt-2  text-center">
        Sign in to see updates from your favorite YouTube channels
      </div>
      <div className="mt-4">
        <SignInBtn />
      </div>
    </div>
  );
};

export default SubscriptionsPage;
