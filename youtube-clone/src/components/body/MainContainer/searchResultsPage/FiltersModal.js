import React, { useState } from "react";
import { useSelector } from "react-redux";
import CrossIcon from "../../../../assets/icons/svgs/SvgComponents/CrossIcon";
import DownArrowIcon from "../../../../assets/icons/svgs/SvgComponents/DownArrowIcon";

const FiltersModal = ({
  showFilters,
  setShowFilters,
  searchFilters,
  setSearchFilters,
}) => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  const [showInnerModals, setShowInnerModals] = useState(false);
  const [showSortBy, setShowSortBy] = useState(false);
  const [showType, setShowType] = useState(false);
  const [showUploadDate, setshowUploadDate] = useState(false);
  const [showDuration, setShowDuration] = useState(false);
  const [modalSearchFilters, setModalSearchFilters] = useState(searchFilters);

  console.log(modalSearchFilters);
  const handleApplyFilters = () => {
    console.log(modalSearchFilters);
    setSearchFilters({ ...modalSearchFilters });
    setShowFilters(false);
  };
  console.log("showSortBy is : ");
  console.log(showSortBy);
  console.log("showType is : ");
  console.log(showType);
  console.log("showUploadDate is : ");
  console.log(showUploadDate);
  console.log("showDuration is : ");
  console.log(showDuration);
  return (
    <>
      <div>
        <div
          onClick={() => setShowFilters(false)}
          className="fixed top-0 bottom-0 left-0 right-0 z-30 w-full h-full bg-[rgba(0,0,0,0.6)]"
        ></div>
      </div>

      {showInnerModals ? (
        <div
          onClick={() => {
            setShowInnerModals(false);
            setShowSortBy(false);
            setShowType(false);
            setshowUploadDate(false);
            setShowDuration(false);
          }}
          className="fixed top-0 bottom-0 left-0 right-0 z-40 w-full h-full bg-transparent"
        ></div>
      ) : (
        ""
      )}

      {/* for mobile devices */}
      <div
        className={` sm:hidden w-[280px] h-[350px] fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3  backdrop-blur  shadow-[0px_4px_32px_0px_#0000001a]  ${
          darkTheme ? "bg-[#272727] text-white" : "bg-white text-black"
        }  z-40`}
      >
        {showInnerModals ? (
          <div
            onClick={() => {
              setShowInnerModals(false);
              setShowSortBy(false);
              setShowType(false);
              setshowUploadDate(false);
              setShowDuration(false);
            }}
            className="fixed top-0 bottom-0 left-0 right-0 z-40 w-full h-full bg-transparent"
          ></div>
        ) : (
          ""
        )}
        <div className="innerContainer w-[85%] m-auto">
          <div className="w-full mt-6 mb-1 flex justify-between ">
            <div className="text-xl">Search filters</div>
          </div>
          <div className="w-full flex items-center mt-3">
            <div className="w-[40%]  my-3">
              <div
                className={`  ${
                  darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
                } font-medium text-sm cursor-pointer flex items-center gap-2`}
              >
                Sort by
              </div>
            </div>
            <div
              onClick={() => {
                setShowInnerModals(true);
                setShowSortBy(true);
              }}
              className="w-[60%] relative text-lg my-3 flex justify-between"
            >
              <div className="">
                {modalSearchFilters.sortBy === "relevance"
                  ? "Relevance"
                  : modalSearchFilters.sortBy === "date"
                  ? "Upload date"
                  : modalSearchFilters.sortBy === "viewCount"
                  ? "View count"
                  : "Rating"}
              </div>
              <DownArrowIcon color={darkTheme ? "#fff" : "#000"} />

              {showSortBy && showInnerModals ? (
                <>
                  <div
                    className={` absolute backdrop-blur  z-50 w-full top-0 shadow-[2px_4px_38px_5px_#0000001a]  ${
                      darkTheme
                        ? "bg-[#2b2a2a] text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    <div className=" flex flex-col ">
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalSearchFilters({
                            ...modalSearchFilters,
                            sortBy: "relevance",
                          });
                          setShowSortBy(false);
                          setShowInnerModals(false);
                        }}
                        className={`text-lg py-2 pl-4 flex  ${
                          darkTheme
                            ? "  active:bg-[#3a3a3a]"
                            : "  active:bg-[#e5e3e3]"
                        }`}
                      >
                        <div className="">Relevance</div>
                      </div>
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalSearchFilters({
                            ...modalSearchFilters,
                            sortBy: "date",
                          });
                          setShowSortBy(false);
                          setShowInnerModals(false);
                        }}
                        className={`text-lg py-2 pl-4 flex  ${
                          darkTheme
                            ? "  active:bg-[#3a3a3a]"
                            : "  active:bg-[#e5e3e3]"
                        }`}
                      >
                        <div className="">Upload date</div>
                      </div>
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalSearchFilters({
                            ...modalSearchFilters,
                            sortBy: "viewCount",
                          });
                          setShowSortBy(false);
                          setShowInnerModals(false);
                        }}
                        className={`text-lg py-2 pl-4 flex  ${
                          darkTheme
                            ? "  active:bg-[#3a3a3a]"
                            : "  active:bg-[#e5e3e3]"
                        }`}
                      >
                        <div className="">View count</div>
                      </div>
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalSearchFilters({
                            ...modalSearchFilters,
                            sortBy: "rating",
                          });
                          setShowSortBy(false);
                          setShowInnerModals(false);
                        }}
                        className={`text-lg py-2 pl-4 flex  ${
                          darkTheme
                            ? "  active:bg-[#3a3a3a]"
                            : "  active:bg-[#e5e3e3]"
                        }`}
                      >
                        <div className="">Rating</div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="w-full flex items-center ">
            <div className="w-[40%]  my-3">
              <div
                className={`  ${
                  darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
                } font-medium text-sm cursor-pointer flex items-center gap-2`}
              >
                Type
              </div>
            </div>
            <div
              onClick={() => {
                setShowInnerModals(true);
                setShowType(true);
              }}
              className="w-[60%] relative text-lg my-3 flex justify-between"
            >
              <div className="capitalize">{modalSearchFilters.type}</div>
              <DownArrowIcon color={darkTheme ? "#fff" : "#000"} />
              {showType && showInnerModals ? (
                <>
                  <div
                    className={` absolute backdrop-blur  z-50 w-full top-0 shadow-[2px_4px_38px_5px_#0000001a]  ${
                      darkTheme
                        ? "bg-[#2b2a2a] text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    <div className=" flex flex-col ">
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalSearchFilters({
                            ...modalSearchFilters,
                            type: "all",
                          });
                          setShowType(false);
                          setShowInnerModals(false);
                        }}
                        className={`text-lg py-2 pl-4 flex  ${
                          darkTheme
                            ? "  active:bg-[#3a3a3a]"
                            : "  active:bg-[#e5e3e3]"
                        }`}
                      >
                        <div className="">All</div>
                      </div>
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalSearchFilters({
                            ...modalSearchFilters,
                            type: "video",
                          });
                          setShowType(false);
                          setShowInnerModals(false);
                        }}
                        className={`text-lg py-2 pl-4 flex  ${
                          darkTheme
                            ? "  active:bg-[#3a3a3a]"
                            : "  active:bg-[#e5e3e3]"
                        }`}
                      >
                        <div className="">Video</div>
                      </div>
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalSearchFilters({
                            ...modalSearchFilters,
                            type: "channel",
                          });
                          setShowType(false);
                          setShowInnerModals(false);
                        }}
                        className={`text-lg py-2 pl-4 flex  ${
                          darkTheme
                            ? "  active:bg-[#3a3a3a]"
                            : "  active:bg-[#e5e3e3]"
                        }`}
                      >
                        <div className="">Channel</div>
                      </div>
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalSearchFilters({
                            ...modalSearchFilters,
                            type: "playlist",
                          });
                          setShowType(false);
                          setShowInnerModals(false);
                        }}
                        className={`text-lg py-2 pl-4 flex  ${
                          darkTheme
                            ? "  active:bg-[#3a3a3a]"
                            : "  active:bg-[#e5e3e3]"
                        }`}
                      >
                        <div className="">Playlist</div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="w-full flex items-center ">
            <div className="w-[40%]  my-3">
              <div
                className={`  ${
                  darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
                } font-medium text-sm cursor-pointer flex items-center gap-2`}
              >
                Upload date
              </div>
            </div>
            <div
              onClick={() => {
                setShowInnerModals(true);
                setshowUploadDate(true);
              }}
              className="w-[60%] relative text-lg my-3 flex justify-between"
            >
              <div className="">
                {modalSearchFilters.uploadDate === "any"
                  ? "Anytime"
                  : modalSearchFilters.uploadDate === "lastHour"
                  ? "Last hour"
                  : modalSearchFilters.uploadDate === "today"
                  ? "Today"
                  : modalSearchFilters.uploadDate === "thisWeek"
                  ? "This week"
                  : modalSearchFilters.uploadDate === "thisMonth"
                  ? "This month"
                  : "This year"}
              </div>
              <DownArrowIcon color={darkTheme ? "#fff" : "#000"} />
              {showUploadDate && showInnerModals ? (
                <>
                  <div
                    className={` absolute backdrop-blur  z-50 w-full top-0 shadow-[2px_4px_38px_5px_#0000001a]  ${
                      darkTheme
                        ? "bg-[#2b2a2a] text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    <div className=" flex flex-col ">
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalSearchFilters({
                            ...modalSearchFilters,
                            uploadDate: "any",
                          });
                          setshowUploadDate(false);
                          setShowInnerModals(false);
                        }}
                        className={`text-lg py-2 pl-4 flex  ${
                          darkTheme
                            ? "  active:bg-[#3a3a3a]"
                            : "  active:bg-[#e5e3e3]"
                        }`}
                      >
                        <div className="">Anytime</div>
                      </div>
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalSearchFilters({
                            ...modalSearchFilters,
                            uploadDate: "lastHour",
                          });
                          setshowUploadDate(false);
                          setShowInnerModals(false);
                        }}
                        className={`text-lg py-2 pl-4 flex  ${
                          darkTheme
                            ? "  active:bg-[#3a3a3a]"
                            : "  active:bg-[#e5e3e3]"
                        }`}
                      >
                        <div className="">Last hour</div>
                      </div>
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalSearchFilters({
                            ...modalSearchFilters,
                            uploadDate: "today",
                          });
                          setshowUploadDate(false);
                          setShowInnerModals(false);
                        }}
                        className={`text-lg py-2 pl-4 flex  ${
                          darkTheme
                            ? "  active:bg-[#3a3a3a]"
                            : "  active:bg-[#e5e3e3]"
                        }`}
                      >
                        <div className="">Today</div>
                      </div>
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalSearchFilters({
                            ...modalSearchFilters,
                            uploadDate: "thisWeek",
                          });
                          setshowUploadDate(false);
                          setShowInnerModals(false);
                        }}
                        className={`text-lg py-2 pl-4 flex  ${
                          darkTheme
                            ? "  active:bg-[#3a3a3a]"
                            : "  active:bg-[#e5e3e3]"
                        }`}
                      >
                        <div className="">This week</div>
                      </div>
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalSearchFilters({
                            ...modalSearchFilters,
                            uploadDate: "thisMonth",
                          });
                          setshowUploadDate(false);
                          setShowInnerModals(false);
                        }}
                        className={`text-lg py-2 pl-4 flex  ${
                          darkTheme
                            ? "  active:bg-[#3a3a3a]"
                            : "  active:bg-[#e5e3e3]"
                        }`}
                      >
                        <div className="">This month</div>
                      </div>
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalSearchFilters({
                            ...modalSearchFilters,
                            uploadDate: "thisYear",
                          });
                          setshowUploadDate(false);
                          setShowInnerModals(false);
                        }}
                        className={`text-lg py-2 pl-4 flex  ${
                          darkTheme
                            ? "  active:bg-[#3a3a3a]"
                            : "  active:bg-[#e5e3e3]"
                        }`}
                      >
                        <div className="">This year</div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="w-full flex items-center ">
            <div className="w-[40%]  my-3">
              <div
                className={`  ${
                  darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
                } font-medium text-sm cursor-pointer flex items-center gap-2`}
              >
                Duration
              </div>
            </div>
            <div
              onClick={() => {
                setShowInnerModals(true);
                setShowDuration(true);
              }}
              className="w-[60%] relative text-lg my-3 flex justify-between"
            >
              <div className="">
                {modalSearchFilters.duration === "any"
                  ? "Any"
                  : modalSearchFilters.duration === "short"
                  ? "Under 4 minutes"
                  : modalSearchFilters.duration === "medium"
                  ? "4 - 20 minutes"
                  : "Over 20 minutes"}
              </div>
              <DownArrowIcon color={darkTheme ? "#fff" : "#000"} />
              {showDuration && showInnerModals ? (
                <>
                  <div
                    className={` absolute backdrop-blur  z-50 w-full top-0 shadow-[2px_4px_38px_5px_#0000001a]  ${
                      darkTheme
                        ? "bg-[#2b2a2a] text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    <div className=" flex flex-col ">
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalSearchFilters({
                            ...modalSearchFilters,
                            duration: "any",
                          });
                          setShowDuration(false);
                          setShowInnerModals(false);
                        }}
                        className={`text-lg py-2 pl-4 flex  ${
                          darkTheme
                            ? "  active:bg-[#3a3a3a]"
                            : "  active:bg-[#e5e3e3]"
                        }`}
                      >
                        <div className="">Any</div>
                      </div>
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalSearchFilters({
                            ...modalSearchFilters,
                            duration: "short",
                          });
                          setShowDuration(false);
                          setShowInnerModals(false);
                        }}
                        className={`text-lg py-2 pl-4 flex  ${
                          darkTheme
                            ? "  active:bg-[#3a3a3a]"
                            : "  active:bg-[#e5e3e3]"
                        }`}
                      >
                        <div className="">Under 4 minutes</div>
                      </div>
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalSearchFilters({
                            ...modalSearchFilters,
                            duration: "medium",
                          });
                          setShowDuration(false);
                          setShowInnerModals(false);
                        }}
                        className={`text-lg py-2 pl-4 flex  ${
                          darkTheme
                            ? "  active:bg-[#3a3a3a]"
                            : "  active:bg-[#e5e3e3]"
                        }`}
                      >
                        <div className="">4 - 20 minutes</div>
                      </div>
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalSearchFilters({
                            ...modalSearchFilters,
                            duration: "long",
                          });
                          setShowDuration(false);
                          setShowInnerModals(false);
                        }}
                        className={`text-lg py-2 pl-4 flex  ${
                          darkTheme
                            ? "  active:bg-[#3a3a3a]"
                            : "  active:bg-[#e5e3e3]"
                        }`}
                      >
                        <div className="">Over 20 minutes</div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <hr
          className={`w-full my-2  ${
            darkTheme ? "border-b border-[#e4e1e1]" : "border-b border-black"
          } `}
        />
        <div className="w-[85%] m-auto flex justify-end items-center gap-2">
          <div
            onClick={() => setShowFilters(false)}
            className={`w-[60px] active:border active:border-slate-600 flex justify-center items-center h-[50px] ${
              darkTheme ? "text-blue-400" : "text-[#065fd4]"
            } `}
          >
            Cancel
          </div>
          <div
            onClick={handleApplyFilters}
            className={`w-[60px] active:border active:border-slate-600 flex justify-center items-center h-[50px] ${
              darkTheme ? "text-blue-400" : "text-[#065fd4]"
            } `}
          >
            Apply
          </div>
        </div>
      </div>

      {/* from sm breakpoints */}
      <div
        className={`hidden sm:block sm:w-[576px] md:w-[696px] sm:h-[517.67px] md:h-[517.67px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2    rounded-xl backdrop-blur  shadow-[0px_4px_32px_0px_#0000001a]  ${
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
                      setSearchFilters({ ...searchFilters, type: "all" });
                    } else {
                      setSearchFilters({
                        ...searchFilters,
                        type: "channel",
                        duration: "any",
                      });
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
                      setSearchFilters({
                        ...searchFilters,
                        type: "playlist",
                        duration: "any",
                      });
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
