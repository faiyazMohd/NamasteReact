import { useEffect, useState } from "react";
import { ALL_REST_URL } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { moddifyAddress } from "../store/appSlice";
const useAllRest = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const placeId = useSelector((store) => store.app.place_id);
  const address = useSelector((store) => store.app.address);
  const dispatch = useDispatch();
  async function getAllRestaurants(address) {
    // const data = await fetch(ALL_REST_URL);
    const data = await fetch(
      `https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=${address?.geometry?.location?.lat}&lng=${address?.geometry?.location?.lng}`
    );
    const json = await data.json();
    console.log(json);
    let isIdPresent = false;
    console.log(json?.data?.cards[0]?.card?.card.title);
    if (json?.data?.cards[0]?.card?.card?.title === "Location Unserviceable") {
      setAllRestaurants(json?.data?.cards[0]?.card?.card);
      setFilteredRestaurants([]);
      isIdPresent = true;
    }
    json?.data?.cards.map((card, index) => {
      if (card.card.card.id === "top_brands_for_you") {
        setAllRestaurants(
          card.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setFilteredRestaurants(
          card.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        isIdPresent = true;
      }
    });
    if (!isIdPresent) {
      json?.data?.cards.map((card, index) => {
        if (card.card.card.id === "restaurant_grid_listing") {
          setAllRestaurants(
            card.card?.card?.gridElements?.infoWithStyle?.restaurants
          );
          setFilteredRestaurants(
            card.card?.card?.gridElements?.infoWithStyle?.restaurants
          );
        }
      });
    }
    return json;
  }
  async function getAddress() {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/misc/address-recommend?place_id=" +
        placeId
    );
    const json = await data.json();
    getAllRestaurants(json?.data[0]);
    dispatch(moddifyAddress(json?.data[0]));
    console.log(json);
  }
  useEffect(() => {
    if (placeId) {
      getAddress();
    }
  }, [placeId]);
  return [allRestaurants, filteredRestaurants, setFilteredRestaurants];
};
export default useAllRest;
