import { useState, useEffect } from "react";

const useRestMenu = (restId) => {
  const [restMenus, setRestMenus] = useState([]);
  const [restInfo, setRestInfo] = useState({});
  const [ItemCategories, setItemCategories] = useState([]);
  const [restAdditionalInfo, setRestAdditionalInfo] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.9727952&lng=73.0296706&restaurantId=${restId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    console.log(json);
    if (json?.data?.cards[2]?.groupedCard) {
      const ItemCategoriesData =
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (card) => {
            return (
              card.card.card["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
              card.card.card["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
            );
          }
        );
      setItemCategories(ItemCategoriesData);
    } else if (json?.data?.cards[3]?.groupedCard) {
      // console.log(json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
      const ItemCategoriesData =
        json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (card) => {
            return (
              card.card.card["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
              card.card.card["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
            );
          }
        );
      setItemCategories(ItemCategoriesData);
    }

    if (json?.data?.cards[2]?.groupedCard) {
      const restAdditionalInfoData =
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (card) => {
            return (
              card.card.card["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo" ||
              card.card.card["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress"
            );
          }
        );
      setRestAdditionalInfo(restAdditionalInfoData);
    } else if (json?.data?.cards[3]?.groupedCard) {
      const restAdditionalInfoData =
        json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (card) => {
            return (
              card.card.card["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo" ||
              card.card.card["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress"
            );
          }
        );
      setRestAdditionalInfo(restAdditionalInfoData);
    }
    // console.log(ItemCategories);
    // console.log(restAdditionalInfo);
    setRestInfo(json?.data?.cards[0]?.card?.card?.info);
    // console.log(restAdditionalInfoData);

    // console.log(json?.data?.cards[0]?.card?.card?.info);
  };

  return [restInfo, ItemCategories, restAdditionalInfo];
};

export default useRestMenu;
