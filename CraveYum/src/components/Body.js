import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { filterData } from "../utils/helper";
import useAllRest from "../utils/hooks/useAllRest";
import { useEffect, useState } from "react";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const [
    allRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
  ] = useAllRest();

  return (
    <div className="body">
      <div className="searchBar">
        <input
          type="text"
          placeholder="search for the restaurant..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            const filteredData = filterData(e.target.value, allRestaurants);
            setFilteredRestaurants(filteredData);
          }}
        />
      </div>
      <div className="restaurants">
        {allRestaurants?.length !== 0 ? (
          filteredRestaurants?.length !== 0 ? (
            filteredRestaurants?.map((restaurant) => {
              return (
                <RestaurantCard
                  {...restaurant?.info}
                  key={restaurant?.info?.id}
                />
              );
            })
          ) : (
            <div className="NoResultMsg">
              <h1>No result found for {searchText}</h1>
            </div>
          )
        ) : (
          Array(12)
            .fill(1)
            .map((elem, index) => <ShimmerUI key={index} />)
        )}
      </div>
    </div>
  );
};

export default Body;
