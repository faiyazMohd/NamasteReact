import { useState, useEffect } from "react";

const useFilterRest = (
  allRestaurants,
  filteredRestaurants,
  setFilteredRestaurants
) => {
  const [topRated, setTopRated] = useState(false);
  const [offers, setOffers] = useState(false);
  const [pureVeg, setPureVeg] = useState(false);
  const [below300, setBelow300] = useState(false);
  const [range300_600, setRange300_600] = useState(false);
  useEffect(() => {
    if (!offers && !topRated && !pureVeg && !below300 && !range300_600) {
      setFilteredRestaurants(allRestaurants);
    } else {
      const filteredData = allRestaurants?.filter((restaurant) => {
        const costForTwoString = restaurant?.info?.costForTwo.split(" ")[0];
        const withoutRupeeSign = costForTwoString.slice(1);
        const costForTwo = Number(withoutRupeeSign);
        // console.log(costForTwo);
        return topRated
          ? restaurant?.info?.avgRating > 4
          : "" || pureVeg
          ? restaurant?.info?.veg
          : "" || offers
          ? restaurant?.info?.aggregatedDiscountInfoV3
            ? restaurant?.info?.aggregatedDiscountInfoV3?.header !== undefined
            : restaurant?.info?.aggregatedDiscountInfoV2
            ? restaurant?.info?.aggregatedDiscountInfoV2.header !== undefined
            : ""
          : "" || below300
          ? costForTwo < 300
          : "" || range300_600
          ? 300 <= costForTwo && costForTwo <= 600
          : "";
      });
      // console.log(filteredData);
      setFilteredRestaurants(filteredData);
    }
  }, [offers, topRated, pureVeg, below300, range300_600]);
  return [
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
  ];
};

export default useFilterRest;
