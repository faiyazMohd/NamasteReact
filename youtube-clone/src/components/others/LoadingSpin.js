import React from "react";
import { useSelector } from "react-redux";

const LoadingSpin = ({ top }) => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);

  return (
    <div
      className={`flex flex-col items-center justify-center w-full ${
        top ? " pt-14 md:pt-20" : "h-screen"
      } `}
    >
      <div
        className={`w-10 h-10 md:w-16 md:h-16 rounded-full border-4  "border-[#0000000d] border-t-gray-700"`}
      ></div>
    </div>
  );
};

export default LoadingSpin;
