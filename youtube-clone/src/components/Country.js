import React from "react";
import RightIcon from "../assets/icons/svgs/SvgComponents/RightIcon";
import { useDispatch, useSelector } from "react-redux";
import { setLocationCode } from "../utils/store/appSlice";

const Country = ({ name, code, setShowLocations }) => {
  const locationCode = useSelector((store) => store.app.locationCode);
  const dispatch = useDispatch();
  const handleLocationCode = () => {
    dispatch(setLocationCode(code));
  };
  return (
    <div
      onClick={() => {
        handleLocationCode();
        setShowLocations(false);
      }}
      className="px-3 h-12 w-full  flex py-4 cursor-pointer justify-between items-center hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
    >
      <div className=" w-2/12 flex justify-center">
        {code === locationCode ? <RightIcon /> : ""}
      </div>
      <div className="text-base w-10/12">{name}</div>
    </div>
  );
};

export default Country;
