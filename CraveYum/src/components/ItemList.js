import MenuItemCard from "./MenuItemCard";
import MenuCategory from "./MenuCategory";
import SubMenuCategory from "./SubMenuCategory";
import { useContext,useEffect } from "react";
import VegOnlyContext from "../utils/contexts/VegOnlyContext";

const ItemList = ({ category ,countLength, setCountLength,itemCards}) => {

  const { isVeg } = useContext(VegOnlyContext);

  return (
    <>
      {category["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ? (
        <div>
          {category?.categories?.map((category) => {
            return (
              <SubMenuCategory key={category?.title} category={category}   />
            );
          })}
        </div>
      ) : (
        <>
          {itemCards?.map((item) => {
            return <MenuItemCard item={item} key={item?.card?.info?.id} />;
          })}
        </>
      )}
    </>
  );
};

export default ItemList;
