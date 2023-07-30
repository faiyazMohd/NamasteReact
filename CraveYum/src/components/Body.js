import RestaurantCard from "./RestaurantCard";
import restrautList from "../utils/mockData";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
const filterData = (searchText, restaurants) => {
  const filterData = restaurants?.filter((restaurant) => {
    if (searchText === "") {
      return restrautList;
    } else {
      // return restaurant.data.name.toLowerCase().includes(searchText.toLowerCase());
      return restaurant?.info?.name
        ?.toLowerCase()
        .includes(searchText?.toLowerCase());
    }
  });
  return filterData;
};

const Body = () => {
  // console.log(useState("hello"));
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  async function getAllRestaurants() {
    // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9727952&lng=73.0296706&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")//old
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9727952&lng=73.0296706&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // ); //new
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    ); //new
    // console.log(data);
    const json = await data.json();
    console.log(json);
    // console.log(json?.data?.cards[2]?.data?.data?.cards);
    // setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    // setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    const restaurantsList =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    // const restaurantsList =
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants;
    // console.log(restaurantsList);
    json?.data?.cards.map((card,index)=>{
      if (card.card.card.id === "top_brands_for_you") {
        console.log(card.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log("index is :"+index);
        setAllRestaurants(card.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(card.card?.card?.gridElements?.infoWithStyle?.restaurants);
      }
    })
    // setAllRestaurants(restaurantsList);
    // setFilteredRestaurants(restaurantsList);
    return json;
  }
  useEffect(() => {
    getAllRestaurants();
  }, []);
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
        {/* <button onClick={()=>{
          // setRestaurants(restrautList);
          const filteredData = filterData(searchText,allRestaurants);
          setFilteredRestaurants(filteredData);
        }}>Search</button> */}
      </div>
      <div className="restaurants">
        {/* <h2 class="heading">Restaurants with online food delivery in Mumbai</h2> */}
        {allRestaurants?.length !== 0 ? (
          filteredRestaurants?.length !== 0 ? (
            filteredRestaurants?.map((restaurant) => {
              return (
                // <RestaurantCard {...restaurant?.data} key={restaurant?.data?.id} />
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
          Array(12).fill(1).map((elem,index)=><ShimmerUI key={index}/>)
        )}
      </div>
    </div>
  );
};

export default Body;
