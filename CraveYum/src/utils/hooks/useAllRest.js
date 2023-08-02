import { useEffect, useState } from "react";
import { ALL_REST_URL } from "../constants";
const useAllRest = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  async function getAllRestaurants() {
    const data = await fetch(ALL_REST_URL);
    const json = await data.json();
    json?.data?.cards.map((card, index) => {
      if (card.card.card.id === "top_brands_for_you") {
        // console.log(card.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log("index is :" + index);
        setAllRestaurants(
          card.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setFilteredRestaurants(
          card.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
      }
    });
    return json;
  }
  useEffect(() => {
    getAllRestaurants();
  }, []);
  return [
    allRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
  ];
};
export default useAllRest;
