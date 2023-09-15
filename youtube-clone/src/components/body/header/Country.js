import React from "react";
import RightIcon from "../../../assets/icons/svgs/SvgComponents/RightIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  setLocationCode,
  setLocationName,
} from "../../../utils/store/appSlice";
import { clearSearchCaches } from "../../../utils/store/searchSlice";

const Country = ({ name, code, setShowLocations, setshowMoreSettings }) => {
  const locationCode = useSelector((store) => store.app.locationCode);
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  
  const dispatch = useDispatch();
  const handleLocationCode = () => {
    dispatch(setLocationCode(code));
  };
  const handleLocationName = () => {
    dispatch(setLocationName(name));
  };
  const handleClearCaches = () => {
    dispatch(clearSearchCaches());
  };
  return (
    <>
      <div
        onClick={() => {
          handleLocationCode();
          handleLocationName();
          setShowLocations(false);
          handleClearCaches();
        }}
        className="px-3 h-12 w-full  flex md:hidden py-4 cursor-pointer justify-between items-center "
      >
        <div className="text-lg w-10/12">{name}</div>
        <div className=" w-2/12 flex justify-center">
          {code === locationCode ? (
            <RightIcon color={darkTheme ? "#fff" : "#000"} />
          ) : (
            ""
          )}
        </div>
      </div>

      {/* for large devices */}
      <div
        onClick={() => {
          handleLocationCode();
          handleLocationName();
          setShowLocations(false);
          setshowMoreSettings(false);
          handleClearCaches();
        }}
        className={`px-3 h-12 w-full  hidden md:flex  py-4 cursor-pointer justify-between items-center ${
          darkTheme
            ? " hover:bg-[#3a3a3a]  active:bg-[#575656]"
            : " hover:bg-[#f2f2f2]  active:bg-[#e5e3e3]"
        }}`}
      >
        <div className=" w-2/12 flex justify-center">
          {code === locationCode ? (
            <RightIcon color={darkTheme ? "#fff" : "#000"} />
          ) : (
            ""
          )}
        </div>
        <div className="text-base w-10/12">{name}</div>
      </div>
    </>
  );
};

export default Country;
