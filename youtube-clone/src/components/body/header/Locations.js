import React from "react";
import CrossIcon from "../../../assets/icons/svgs/SvgComponents/CrossIcon";
import { useSelector } from "react-redux";
import Country from "./Country";
import { countries } from "../../../utils/constants/countriesList";
import ArrowRightIcon from "../../../assets/icons/svgs/SvgComponents/ArrowRightIcon";

const Locations = ({ setShowLocations, setshowMoreSettings }) => {
  const locationCode = useSelector((store) => store.app.locationCode);
  const darkTheme = useSelector((store) => store.theme.darkTheme);

  return (
    <>
      {/* for small to medium devices */}
      <div
        className={`AccountContainer md:hidden overflow-y-auto   ${
          darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
        }   w-full h-screen fixed  top-0 right-0 bottom-0 left-0  z-40`}
      >
        <div
          className={`px-3 h-14  ${
            darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
          }  sticky top-0 right-0 left-0 shadow-[0px_4px_2px_-2px_#00000033] flex justify-between items-center`}
        >
          <div
            className="closeAccount   w-1/12 "
            onClick={() => setShowLocations(false)}
          >
            <CrossIcon color={darkTheme ? "#fff" : "#000"} />
          </div>
          <div className="text-lg ml-2 w-11/12">Location</div>
        </div>
        <div className="LocationsList">
          {countries.map((country) => {
            return (
              <Country
                name={country.name}
                key={country.code}
                code={country.code}
                setShowLocations={setShowLocations}
                
              />
            );
          })}
        </div>
      </div>

      {/* for large device */}
      <div
        className={`locationsContainer hidden md:block  AccountContainer overflow-y-auto   ${
          darkTheme ? "bg-[#272727] text-white" : "bg-white text-black"
        }   w-full h-[100vh] fixed  -top-16 right-0 bottom-0 left-0 rounded-xl backdrop-blur  z-40`}
      >
        <div
          className={`px-3 rounded-xl backdrop-blur h-14 ${darkTheme ? "bg-[#272727] text-white" : "bg-white text-black"} sticky top-0 right-0 left-0  flex justify-between items-center`}
        >
          <div
            className="closeAccount cursor-pointer  w-2/12 "
            onClick={() => setShowLocations(false)}
          >
            <ArrowRightIcon color={darkTheme ? "#fff" : "#000"}/>
          </div>
          <div className="text-[1.1rem]  w-10/12">Choose your location</div>
        </div>
        <hr
          className={`border-  ${
            darkTheme
              ? "border-b border-[rgba(255,255,255,0.2)]"
              : "border-b border-[rgba(0,0,0,0.1)]"
          } my-3`}
        />
        <div className="LocationsList w-full">
          {countries.map((country) => {
            return (
              <Country
                name={country.name}
                key={country.code}
                code={country.code}
                setShowLocations={setShowLocations}
                setshowMoreSettings={setshowMoreSettings}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Locations;
