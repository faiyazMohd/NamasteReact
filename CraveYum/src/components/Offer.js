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

const Offers = () => {
  const [searchText, setSearchText] = useState("");
  const placeId = useSelector((store) => store.app.place_id);
  const [taglineIndex, setTaglineIndex] = useState(0);

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
        <>
          <div className="displayNoneAtLarge">
            <div className="searchAreaContainer">
              <div className="rightSearchArea">
                <img src={foodMobile} alt="" />
              </div>
              <div className="leftSearchArea">
                <h1 className="tagline">{taglines[taglineIndex]}</h1>
                <h2 className="restNearYou">
                  Order food from favourite restaurants near you.
                </h2>
                <div
                  onClick={() => dispatch(openAddressSidebar())}
                  className="seeAllRestBtn"
                >
                  setup your location
                </div>
              </div>
            </div>
          </div>
          <div className="displayNoneAtPhone">
            <div className="searchAreaContainer ">
              <div className="leftSearchArea">
                <h1 className="tagline">{taglines[taglineIndex]}</h1>
                <h2 className="restNearYou">
                  Order food from favourite restaurants near you.
                </h2>
                <div
                  className=""
                  style={{ width: "75%", margin: "1.25rem auto" }}
                >
                  <SearchArea />
                </div>
              </div>
              <div className="rightSearchArea">
                <img src={foodDesktop} alt="" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Offers;
