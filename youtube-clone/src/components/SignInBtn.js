import React from "react";
import ProfileIcon from "../assets/icons/svgs/SvgComponents/ProfileIcon";

const SignInBtn = () => {
  return (
    <div className=" border w-24 h-9 flex items-center pl-[8px] pr-[12px] py-[5px] rounded-full cursor-pointer  border-[#ccc] active:bg-blue-200 hover:bg-blue-100">
      <div className="profileIcon">
        <ProfileIcon />
      </div>
      <div className="text-[#065fd4] ml-2 text-sm font-semibold whitespace-nowrap">Sign in</div>
    </div>
  );
};

export default SignInBtn;
