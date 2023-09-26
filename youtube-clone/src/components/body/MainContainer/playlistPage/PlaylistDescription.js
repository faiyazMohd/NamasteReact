import React from "react";
import { useSelector } from "react-redux";
import CrossIcon from "../../../../assets/icons/svgs/SvgComponents/CrossIcon";

const PlaylistDescription = ({ description, setShowPlaylistDesc }) => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);

  return (
    <>
      <div>
        <div
          onClick={() => setShowPlaylistDesc(false)}
          className="fixed top-0 bottom-0 left-0 right-0 z-30 w-full h-full bg-[rgba(0,0,0,0.6)]"
        ></div>
      </div>

      <div
        className={` w-[80%] min-w-[250px] max-w-[356px]  md:hidden fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2    rounded-xl backdrop-blur  shadow-[0px_4px_32px_0px_#0000001a]  ${
          darkTheme ? "bg-[#272727] text-white" : "bg-white text-black"
        }  z-40`}
      >
        <div className="innerContainer w-[90%] m-auto">
          <div className="w-full mt-3  flex items-center   h-9">
            <div className="text-lg font-medium">Description</div>
          </div>
          <div className="overflow-y-auto max-h-[calc(90vh-72px)]">
            <pre className="text-sm font-sans  whitespace-pre-wrap">
              {description}
            </pre>
          </div>
          <div className="flex justify-end items-center h-9 ">
            <div onClick={()=>setShowPlaylistDesc(false)} className="text-base font-medium">Close</div>
          </div>
        </div>
      
        
      </div>
    </>
  );
};

export default PlaylistDescription;
