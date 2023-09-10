import React from "react";
import ProfileIcon from "../../assets/icons/svgs/SvgComponents/ProfileIcon";
import { useSelector } from "react-redux";

const SignInBtn = ({ color }) => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);

  return (
    <div
      className={` w-24 h-9 flex items-center pl-[8px] pr-[12px] py-[5px] rounded-full cursor-pointer
     ${
       darkTheme
         ? "border border-[#333333] active:bg-[#639ed263] hover:bg-[#3e8cd063] transition-colors ease "
         : "border border-[#ccc] active:bg-blue-200 hover:bg-blue-100 transition-colors ease "
     }  `}
    >
      <div className="profileIcon">
        <ProfileIcon color={darkTheme ? "#4988dcf3" : "#065fd4"} />
      </div>
      <div
        className={`${
          darkTheme ? "text-blue-400" : "text-[#065fd4]"
        }  ml-2 text-sm font-semibold whitespace-nowrap`}
      >
        Sign in
      </div>
    </div>
  );
};

export default SignInBtn;
