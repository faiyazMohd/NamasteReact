import RestaurantCard from "./RestaurantCard";
import { restrautList } from "../constants";
import { useState } from "react";

const filterData = (searchText,restaurants)=>{
  const filterData = restrautList.filter((restaurant)=>{
    if (searchText==="") {
      return restrautList;
    }
    else{
      return restaurant.data.name.toLowerCase().includes(searchText.toLowerCase());
    }
  })
  return filterData;
}
const Body = () => {
//   let searchText = "kFC";
const [searchText, setSearchText] = useState("");
const [restaurants, setRestaurants] = useState(restrautList)

  return (
    <>
      <div className="searchBar">
        <input
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) =>{
            setSearchText(e.target.value)
            const filteredData = filterData(e.target.value,restaurants);
            setRestaurants(filteredData);

          }}
        />
        <button onClick={()=>{
          // setRestaurants(restrautList);
          const filteredData = filterData(searchText,restaurants);
          setRestaurants(filteredData);
        }}>Search</button>
      </div>
      <div className="body">
        {restaurants.length!==0? restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.uuid} />
          );
        }):"No result found for \""+searchText+"\""}
      </div>
    </>
  );
};

export default Body;
