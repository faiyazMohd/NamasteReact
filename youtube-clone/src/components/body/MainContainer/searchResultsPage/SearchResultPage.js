import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ShimmerVideoCard from "../videosContainer/ShimmerVideoCard";
import RecommendationVideoCard from "../watchPage/desktopWatchPage/RecommendationVideoCard";
import ChannelCard from "./ChannelCard";
import PlaylistCard from "./PlaylistCard";
import FilterIcon from "../../../../assets/icons/svgs/SvgComponents/FilterIcon";
import FiltersModal from "./FiltersModal";
import NoResults from "./NoResults";

const SearchResultPage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search_query");
  const [searchResults, setSearchResults] = useState(null);
  const locationCode = useSelector((store) => store.app.locationCode);
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  const showSidebar = useSelector((store) => store.app.showSidebar);
  const [showFilters, setShowFilters] = useState(false);
  const [searchFilters, setSearchFilters] = useState({
    uploadDate: "any",
    type: "all",
    duration: "any",
    sortBy: "relevance",
  });

  const publishedAfter = () => {
    let currentTime = new Date().getTime();
    if (searchFilters.uploadDate === "lastHour") {
      return new Date(currentTime - 3600000).toISOString();
    } else if (searchFilters.uploadDate === "today") {
      return new Date(currentTime - 86400000).toISOString();
    } else if (searchFilters.uploadDate === "thisWeek") {
      return new Date(currentTime - 604800000).toISOString();
    } else if (searchFilters.uploadDate === "thisMonth") {
      return new Date(currentTime - 2629800000).toISOString();
    } else if (searchFilters.uploadDate === "thisYear") {
      return new Date(currentTime - 31556952000).toISOString();
    } else {
      return "";
    }
  };
  // console.log(searchQuery);
  // console.log(searchResults);
  console.log(searchFilters);
  console.log(searchResults);
  useEffect(() => {
    document.title = searchQuery + " - YouTube"
    getSearchResults();
  }, [searchQuery, searchFilters]);
  const getSearchResults = async (query) => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=${
        searchFilters.type
      }&maxResults=50&videoDuration=${searchFilters.duration}&order=${
        searchFilters.sortBy
      }${
        searchFilters.uploadDate === "any"
          ? ""
          : `&publishedAfter=${publishedAfter()}`
      }&q=${searchQuery}&regionCode=${locationCode}&key=` +
        process.env.REACT_APP_GOOGLE_API_KEY
    );
    console.log(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=${
        searchFilters.type
      }&maxResults=25&videoDuration=${searchFilters.duration}&order=${
        searchFilters.sortBy
      }${
        searchFilters.uploadDate === "any"
          ? ""
          : `&publishedAfter=${publishedAfter()}`
      }&q=${searchQuery}&regionCode=${locationCode}&key=` +
        process.env.REACT_APP_GOOGLE_API_KEY
    );
    const json = await data.json();
    setSearchResults(json?.items);
    console.log(json);
  };
  return (
    <>
      <div
        className={` pt-16 pb-16 w-full ${
          darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
        }   ${showSidebar ? "xl:w-[82%]" : ""}  `}
      >
        <div className="w-full md:w-[900px]  lg:w-[1024px] xl:w-[1144px]  m-auto flex flex-col items-center ">
          <div className="filterBtnContai w-full md:w-full  lg:w-[1024px] xl:w-[1096px] ">
            <div
              onClick={() => setShowFilters(true)}
              className={` ${
                darkTheme
                  ? " hover:bg-[#3a3a3a]  active:bg-[#575656]"
                  : " hover:bg-[#e9e7e7]  active:bg-[#e5e3e3]"
              } cursor-pointer rounded-full  p-2   h-9 w-[92px] flex justify-center items-center`}
            >
              <div className="flex items-center justify-center gap-2">
                <FilterIcon color={darkTheme ? "#fff" : "#000"} />
                <span className="text-sm font-medium">Filters</span>
              </div>
            </div>
          </div>
          {!searchResults || searchResults?.error ? (
            Array(12)
              .fill("")
              .map((shimmerCard, index) => {
                return <ShimmerVideoCard key={index} />;
              })
          ) : searchResults.length === 0 ? (
            <NoResults />
          ) : (
            searchResults?.map((item) => {
              if (item?.id?.kind === "youtube#playlist") {
                return (
                  <PlaylistCard
                    key={item?.id}
                    item={item}
                    searchFilters={searchFilters}
                  />
                );
              } else if (item?.id?.kind === "youtube#channel") {
                return <ChannelCard key={item?.id} item={item} />;
              } else if (item?.id?.kind === "youtube#video") {
                return <RecommendationVideoCard key={item?.id} item={item} />;
              }
            })
          )}
        </div>
      </div>

      {showFilters ? (
        <FiltersModal
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          searchFilters={searchFilters}
          setSearchFilters={setSearchFilters}
        />
      ) : (
        ""
      )}
    </>
  );
};
export default SearchResultPage;
