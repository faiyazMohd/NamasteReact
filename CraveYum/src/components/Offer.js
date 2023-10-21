import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { filterData } from "../utils/helper";
import useAllRest from "../utils/hooks/useAllRest";
import { useEffect, useState } from "react";
import CrossIcon from "../assets/icons/IconsComponents/CrossIcon";
import useFilterRest from "../utils/hooks/useFilterRest";
import { useDispatch, useSelector } from "react-redux";
import foodDesktop from "../assets/bg/foodDesktop.webp";
import foodMobile from "../assets/bg/foodMobile.webp";
import { openAddressSidebar } from "../utils/store/appSlice";
import { taglines } from "../utils/constants";
import SearchArea from "./SearchArea";
import { useNavigate } from "react-router-dom";

const Offers = () => {
  const [searchText, setSearchText] = useState("");
  const placeId = useSelector((store) => store.app.place_id);
  const [taglineIndex, setTaglineIndex] = useState(0);
const navigate = useNavigate()
  const dispatch = useDispatch();
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

  if (allRestaurants?.length === 0 ) {
    navigate("/")
  }
  return (
    <div className="body">
      {placeId ? (
        allRestaurants?.length !== 0 ? (
          <>
          <div className="offerHeading">Restaurants with Offers</div>
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
          </>
        ) : (
          <div className="restaurants" data-testid="rest-shimmer">
            {Array(12)
              .fill(1)
              .map((elem, index) => (
                <ShimmerUI key={index} />
              ))}
          </div>
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default Offers;
