import React from "react";
import { useSelector } from "react-redux";
import CrossIcon from "../../../../assets/icons/svgs/SvgComponents/CrossIcon";

const FiltersModal = ({
  showFilters,
  setShowFilters,
  searchFilters,
  setSearchFilters,
}) => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  return (
    <>
      <div>
        <div
          onClick={() => setShowFilters(false)}
          className="fixed top-0 bottom-0 left-0 right-0 z-30 w-full h-full bg-[rgba(0,0,0,0.6)]"
        ></div>
      </div>
      <div
        className={`w-[696px] h-[517.67px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2    rounded-xl backdrop-blur  shadow-[0px_4px_32px_0px_#0000001a]  ${
          darkTheme ? "bg-[#272727] text-white" : "bg-white text-black"
        }  z-40`}
      >
        <div className="innerContainer w-[90%] m-auto">
          <div className="w-full mt-6 mb-1 flex justify-between ">
            <div className="text-lg">Search filters</div>
            <div
              onClick={() => setShowFilters(false)}
              className="cursor-pointer"
            >
              <CrossIcon color={darkTheme ? "#fff" : "#000"} />
            </div>
          </div>
          <div className="w-full flex  gap-12">
            <div className="w-[130px]  ">
              <div
                className={`w-full h-12 border-b uppercase font-medium text-xs flex  items-center  ${
                  darkTheme ? "border-[#ffffff33]" : "border-[#0000001a]"
                }`}
              >
                Upload Date
              </div>
              <div className="w-full flex flex-col gap-5 mt-4">
                <div
                  onClick={() => {
                    setShowFilters(false);
                    if (searchFilters.uploadDate === "lastHour") {
                      setSearchFilters({
                        ...searchFilters,
                        uploadDate: "any",
                      });
                    } else {
                      setSearchFilters({
                        ...searchFilters,
                        uploadDate: "lastHour",
                      });
                    }
                  }}
                  className={`  ${
                    darkTheme
                      ? searchFilters.uploadDate === "lastHour"
                        ? "text-white"
                        : "text-[#a4a3a3]"
                      : searchFilters.uploadDate === "lastHour"
                      ? "text-black"
                      : "text-[#737373]"
                  } font-medium text-sm cursor-pointer flex items-center gap-2`}
                >
                  Last hour
                  {searchFilters.uploadDate === "lastHour" ? (
                    <div className="mt-1">
                      <CrossIcon
                        height={16}
                        color={darkTheme ? "#fff" : "#000"}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div
                  onClick={() => {
                    setShowFilters(false);
                    if (searchFilters.uploadDate === "today") {
                      setSearchFilters({ ...searchFilters, uploadDate: "any" });
                    } else {
                      setSearchFilters({
                        ...searchFilters,
                        uploadDate: "today",
                      });
                    }
                  }}
                  className={`  ${
                    darkTheme
                      ? searchFilters.uploadDate === "today"
                        ? "text-white"
                        : "text-[#a4a3a3]"
                      : searchFilters.uploadDate === "today"
                      ? "text-black"
                      : "text-[#737373]"
                  } font-medium text-sm cursor-pointer flex items-center gap-2`}
                >
                  Today
                  {searchFilters.uploadDate === "today" ? (
                    <div className="mt-1">
                      <CrossIcon
                        height={16}
                        color={darkTheme ? "#fff" : "#000"}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div
                  onClick={() => {
                    setShowFilters(false);
                    if (searchFilters.uploadDate === "thisWeek") {
                      setSearchFilters({ ...searchFilters, uploadDate: "any" });
                    } else {
                      setSearchFilters({
                        ...searchFilters,
                        uploadDate: "thisWeek",
                      });
                    }
                  }}
                  className={`  ${
                    darkTheme
                      ? searchFilters.uploadDate === "thisWeek"
                        ? "text-white"
                        : "text-[#a4a3a3]"
                      : searchFilters.uploadDate === "thisWeek"
                      ? "text-black"
                      : "text-[#737373]"
                  } font-medium text-sm cursor-pointer flex items-center gap-2`}
                >
                  This week
                  {searchFilters.uploadDate === "thisWeek" ? (
                    <div className="mt-1">
                      <CrossIcon
                        height={16}
                        color={darkTheme ? "#fff" : "#000"}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div
                  onClick={() => {
                    setShowFilters(false);
                    if (searchFilters.uploadDate === "thisMonth") {
                      setSearchFilters({ ...searchFilters, uploadDate: "any" });
                    } else {
                      setSearchFilters({
                        ...searchFilters,
                        uploadDate: "thisMonth",
                      });
                    }
                  }}
                  className={`  ${
                    darkTheme
                      ? searchFilters.uploadDate === "thisMonth"
                        ? "text-white"
                        : "text-[#a4a3a3]"
                      : searchFilters.uploadDate === "thisMonth"
                      ? "text-black"
                      : "text-[#737373]"
                  } font-medium text-sm cursor-pointer flex items-center gap-2`}
                >
                  This month
                  {searchFilters.uploadDate === "thisMonth" ? (
                    <div className="mt-1">
                      <CrossIcon
                        height={16}
                        color={darkTheme ? "#fff" : "#000"}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div
                  onClick={() => {
                    setShowFilters(false);
                    if (searchFilters.uploadDate === "thisYear") {
                      setSearchFilters({ ...searchFilters, uploadDate: "any" });
                    } else {
                      setSearchFilters({
                        ...searchFilters,
                        uploadDate: "thisYear",
                      });
                    }
                  }}
                  className={`  ${
                    darkTheme
                      ? searchFilters.uploadDate === "thisYear"
                        ? "text-white"
                        : "text-[#a4a3a3]"
                      : searchFilters.uploadDate === "thisYear"
                      ? "text-black"
                      : "text-[#737373]"
                  } font-medium text-sm cursor-pointer flex items-center gap-2`}
                >
                  This year
                  {searchFilters.uploadDate === "thisYear" ? (
                    <div className="mt-1">
                      <CrossIcon
                        height={16}
                        color={darkTheme ? "#fff" : "#000"}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>

            <div className="w-[130px]  ">
              <div
                className={`w-full h-12 border-b uppercase font-medium text-xs flex  items-center  ${
                  darkTheme ? "border-[#ffffff33]" : "border-[#0000001a]"
                }`}
              >
                Type
              </div>
              <div className="w-full flex flex-col gap-5 mt-4">
                <div
                  onClick={() => {
                    setShowFilters(false);
                    if (searchFilters.type === "video") {
                      setSearchFilters({ ...searchFilters, type: "all" });
                    } else {
                      setSearchFilters({ ...searchFilters, type: "video" });
                    }
                  }}
                  className={`  ${
                    darkTheme
                      ? searchFilters.type === "video"
                        ? "text-white"
                        : "text-[#a4a3a3]"
                      : searchFilters.type === "video"
                      ? "text-black"
                      : "text-[#737373]"
                  } font-medium text-sm cursor-pointer flex items-center gap-2`}
                >
                  Video
                  {searchFilters.type === "video" ? (
                    <div className="mt-1">
                      <CrossIcon
                        height={16}
                        color={darkTheme ? "#fff" : "#000"}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div
                  onClick={() => {
                    setShowFilters(false);
                    if (searchFilters.type === "channel") {
                      setSearchFilters({ ...searchFilters, type: "all"});
                    } else {
                      setSearchFilters({ ...searchFilters, type: "channel" ,duration: "any"});
                    }
                  }}
                  className={`  ${
                    darkTheme
                      ? searchFilters.type === "channel"
                        ? "text-white"
                        : "text-[#a4a3a3]"
                      : searchFilters.type === "channel"
                      ? "text-black"
                      : "text-[#737373]"
                  } font-medium text-sm cursor-pointer flex items-center gap-2`}
                >
                  Channel
                  {searchFilters.type === "channel" ? (
                    <div className="mt-1">
                      <CrossIcon
                        height={16}
                        color={darkTheme ? "#fff" : "#000"}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div
                  onClick={() => {
                    setShowFilters(false);
                    if (searchFilters.type === "playlist") {
                      setSearchFilters({ ...searchFilters, type: "all" });
                    } else {
                      setSearchFilters({ ...searchFilters, type: "playlist",duration: "any" });
                    }
                  }}
                  className={`  ${
                    darkTheme
                      ? searchFilters.type === "playlist"
                        ? "text-white"
                        : "text-[#a4a3a3]"
                      : searchFilters.type === "playlist"
                      ? "text-black"
                      : "text-[#737373]"
                  } font-medium text-sm cursor-pointer flex items-center gap-2`}
                >
                  Playlist
                  {searchFilters.type === "playlist" ? (
                    <div className="mt-1">
                      <CrossIcon
                        height={16}
                        color={darkTheme ? "#fff" : "#000"}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>

            <div className="w-[130px]  ">
              <div
                className={`w-full h-12 border-b uppercase font-medium text-xs flex  items-center  ${
                  darkTheme ? "border-[#ffffff33]" : "border-[#0000001a]"
                }`}
              >
                Duration
              </div>
              <div className="w-full flex flex-col gap-5 mt-4">
                <div
                  onClick={() => {
                    setShowFilters(false);
                    if (searchFilters.duration === "short") {
                      setSearchFilters({ ...searchFilters, duration: "any" });
                    } else {
                      setSearchFilters({
                        ...searchFilters,
                        duration: "short",
                        type: "video",
                      });
                    }
                  }}
                  className={`  ${
                    darkTheme
                      ? searchFilters.duration === "short"
                        ? "text-white"
                        : "text-[#a4a3a3]"
                      : searchFilters.duration === "short"
                      ? "text-black"
                      : "text-[#737373]"
                  } font-medium text-sm cursor-pointer flex items-center gap-2`}
                >
                  Under 4 minutes
                  {searchFilters.duration === "short" ? (
                    <div className="mt-1">
                      <CrossIcon
                        height={16}
                        color={darkTheme ? "#fff" : "#000"}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div
                  onClick={() => {
                    setShowFilters(false);
                    if (searchFilters.duration === "medium") {
                      setSearchFilters({ ...searchFilters, duration: "any" });
                    } else {
                      setSearchFilters({
                        ...searchFilters,
                        duration: "medium",
                        type: "video",
                      });
                    }
                  }}
                  className={`  ${
                    darkTheme
                      ? searchFilters.duration === "medium"
                        ? "text-white"
                        : "text-[#a4a3a3]"
                      : searchFilters.duration === "medium"
                      ? "text-black"
                      : "text-[#737373]"
                  } font-medium text-sm cursor-pointer flex items-center gap-2`}
                >
                  4-20 minutes
                  {searchFilters.duration === "medium" ? (
                    <div className="mt-1">
                      <CrossIcon
                        height={16}
                        color={darkTheme ? "#fff" : "#000"}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div
                  onClick={() => {
                    setShowFilters(false);
                    if (searchFilters.duration === "long") {
                      setSearchFilters({ ...searchFilters, duration: "any" });
                    } else {
                      setSearchFilters({
                        ...searchFilters,
                        duration: "long",
                        type: "video",
                      });
                    }
                  }}
                  className={`  ${
                    darkTheme
                      ? searchFilters.duration === "long"
                        ? "text-white"
                        : "text-[#a4a3a3]"
                      : searchFilters.duration === "long"
                      ? "text-black"
                      : "text-[#737373]"
                  } font-medium text-sm cursor-pointer flex items-center gap-2`}
                >
                  Over 20 minutes
                  {searchFilters.duration === "long" ? (
                    <div className="mt-1">
                      <CrossIcon
                        height={16}
                        color={darkTheme ? "#fff" : "#000"}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>

            <div className="w-[130px]  ">
              <div
                className={`w-full h-12 border-b uppercase font-medium text-xs flex  items-center  ${
                  darkTheme ? "border-[#ffffff33]" : "border-[#0000001a]"
                }`}
              >
                Sort by
              </div>
              <div className="w-full flex flex-col gap-5 mt-4">
                <div
                  onClick={() => {
                    setShowFilters(false);
                    setSearchFilters({ ...searchFilters, sortBy: "relevance" });
                  }}
                  className={`  ${
                    darkTheme
                      ? searchFilters.sortBy === "relevance"
                        ? "text-white"
                        : "text-[#a4a3a3]"
                      : searchFilters.sortBy === "relevance"
                      ? "text-black"
                      : "text-[#737373]"
                  } font-medium text-sm cursor-pointer flex items-center gap-2`}
                >
                  Relevance
                </div>
                <div
                  onClick={() => {
                    setShowFilters(false);
                    if (searchFilters.sortBy === "date") {
                      setSearchFilters({
                        ...searchFilters,
                        sortBy: "relevance",
                      });
                    } else {
                      setSearchFilters({ ...searchFilters, sortBy: "date" });
                    }
                  }}
                  className={`  ${
                    darkTheme
                      ? searchFilters.sortBy === "date"
                        ? "text-white"
                        : "text-[#a4a3a3]"
                      : searchFilters.sortBy === "date"
                      ? "text-black"
                      : "text-[#737373]"
                  } font-medium text-sm cursor-pointer flex items-center gap-2`}
                >
                  Upload date
                  {searchFilters.sortBy === "date" ? (
                    <div className="mt-1">
                      <CrossIcon
                        height={16}
                        color={darkTheme ? "#fff" : "#000"}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div
                  onClick={() => {
                    setShowFilters(false);
                    if (searchFilters.sortBy === "viewCount") {
                      setSearchFilters({
                        ...searchFilters,
                        sortBy: "relevance",
                      });
                    } else {
                      setSearchFilters({
                        ...searchFilters,
                        sortBy: "viewCount",
                      });
                    }
                  }}
                  className={`  ${
                    darkTheme
                      ? searchFilters.sortBy === "viewCount"
                        ? "text-white"
                        : "text-[#a4a3a3]"
                      : searchFilters.sortBy === "viewCount"
                      ? "text-black"
                      : "text-[#737373]"
                  } font-medium text-sm cursor-pointer flex items-center gap-2`}
                >
                  View Count
                  {searchFilters.sortBy === "viewCount" ? (
                    <div className="mt-1">
                      <CrossIcon
                        height={16}
                        color={darkTheme ? "#fff" : "#000"}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div
                  onClick={() => {
                    setShowFilters(false);
                    if (searchFilters.sortBy === "rating") {
                      setSearchFilters({
                        ...searchFilters,
                        sortBy: "relevance",
                      });
                    } else {
                      setSearchFilters({ ...searchFilters, sortBy: "rating" });
                    }
                  }}
                  className={`  ${
                    darkTheme
                      ? searchFilters.sortBy === "rating"
                        ? "text-white"
                        : "text-[#a4a3a3]"
                      : searchFilters.sortBy === "rating"
                      ? "text-black"
                      : "text-[#737373]"
                  } font-medium text-sm cursor-pointer flex items-center gap-2`}
                >
                  Rating
                  {searchFilters.sortBy === "rating" ? (
                    <div className="mt-1">
                      <CrossIcon
                        height={16}
                        color={darkTheme ? "#fff" : "#000"}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FiltersModal;
