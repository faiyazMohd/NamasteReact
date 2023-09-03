import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { filterData } from "../utils/helper";
import useAllRest from "../utils/hooks/useAllRest";
import { useEffect, useState } from "react";
import CrossIcon from "../assets/icons/IconsComponents/CrossIcon";
import useFilterRest from "../utils/hooks/useFilterRest";
const Offers = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, filteredRestaurants, setFilteredRestaurants] =
    useAllRest();
  useEffect(() => {
    const filteredData = allRestaurants?.filter((restaurant) => {
      return restaurant?.info?.aggregatedDiscountInfoV3
        ? restaurant?.info?.aggregatedDiscountInfoV3?.header !== undefined
        : restaurant?.info?.aggregatedDiscountInfoV2
        ? restaurant?.info?.aggregatedDiscountInfoV2.header !== undefined
        : "";
    });
    setFilteredRestaurants(filteredData);
  }, [allRestaurants]);

  return (
    <div className="body">
      <div className="offerHeading">Restaurants with Offers</div>
      {allRestaurants?.length !== 0 ? (
        <div className="restaurantsList">
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

export default Offers;
