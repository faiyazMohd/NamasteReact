import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { filterData } from "../utils/helper";
import useAllRest from "../utils/hooks/useAllRest";
import { useEffect, useState } from "react";
import CrossIcon from "../assets/icons/IconsComponents/CrossIcon";
import useFilterRest from "../utils/hooks/useFilterRest";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, filteredRestaurants, setFilteredRestaurants] =
    useAllRest();
  const [
    topRated,
    setTopRated,
    offers,
    setOffers,
    pureVeg,
    setPureVeg,
    below300,
    setBelow300,
    range300_600,
    setRange300_600,
  ] = useFilterRest(
    allRestaurants,
    filteredRestaurants,
    setFilteredRestaurants
  );
  return (
    <div className="body">
      {allRestaurants?.length !== 0 ? (
        <div className="restaurantsList">
          <div className="searchBar" data-testid="searchBar">
            <input
              type="text"
              data-testid="search-input"
              placeholder="search for the restaurant..."
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                const filteredData = filterData(e.target.value, allRestaurants);
                setFilteredRestaurants(filteredData);
              }}
            />
            <div className="filterContainer custom-scroll">
              <div
                className="filters"
                style={
                  topRated
                    ? {
                        backgroundColor: "rgba(2, 6, 12, 0.15)",
                        border: "1px solid rgb(54, 57, 62)",
                      }
                    : {}
                }
                onClick={() => {
                  setTopRated(!topRated);
                }}
              >
                Ratings 4.0+ {topRated ? <CrossIcon /> : ""}
              </div>
              <div
                className="filters"
                style={
                  pureVeg
                    ? {
                        backgroundColor: "rgba(2, 6, 12, 0.15)",
                        border: "1px solid rgb(54, 57, 62)",
                      }
                    : {}
                }
                onClick={() => {
                  setPureVeg(!pureVeg);
                }}
              >
                Pure Veg {pureVeg ? <CrossIcon /> : ""}
              </div>
              <div
                className="filters"
                style={
                  offers
                    ? {
                        backgroundColor: "rgba(2, 6, 12, 0.15)",
                        border: "1px solid rgb(54, 57, 62)",
                      }
                    : {}
                }
                onClick={() => {
                  setOffers(!offers);
                }}
              >
                Offers {offers ? <CrossIcon /> : ""}
              </div>
              {below300 ? (
                ""
              ) : (
                <div
                  className="filters"
                  style={
                    range300_600
                      ? {
                          backgroundColor: "rgba(2, 6, 12, 0.15)",
                          border: "1px solid rgb(54, 57, 62)",
                        }
                      : {}
                  }
                  onClick={() => {
                    setRange300_600(!range300_600);
                  }}
                >
                  Rs.300-Rs.600 {range300_600 ? <CrossIcon /> : ""}
                </div>
              )}

              {range300_600 ? (
                ""
              ) : (
                <div
                  className="filters"
                  style={
                    below300
                      ? {
                          backgroundColor: "rgba(2, 6, 12, 0.15)",
                          border: "1px solid rgb(54, 57, 62)",
                        }
                      : {}
                  }
                  onClick={() => {
                    setBelow300(!below300);
                  }}
                >
                  Less than Rs.300{below300 ? <CrossIcon /> : ""}
                </div>
              )}
            </div>
          </div>
          <div className="restaurants" data-testid="restaurants">
            {filteredRestaurants?.length !== 0 ? (
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
                <h1>No result found.</h1>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="restaurants" data-testid="rest-shimmer">
          {Array(12)
            .fill(1)
            .map((elem, index) => (
              <ShimmerUI key={index} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Body;
