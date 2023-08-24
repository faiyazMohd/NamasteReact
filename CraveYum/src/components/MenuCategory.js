import { useContext, useState,useEffect } from "react";
import ItemList from "./ItemList";
import UpArrow from "../assets/icons/svgs/UpArrow.svg";
import DownArrow from "../assets/icons/svgs/DownArrow.svg";
import VegOnlyContext from "../utils/contexts/VegOnlyContext";
const MenuCategory = ({ category }) => {
  const [showItemList, setShowItemList] = useState(true);
  const {isVeg} =  useContext(VegOnlyContext)
  const [filteredMenus, setFilteredMenus] = useState([])
  useEffect(() => {
    if (isVeg) {
      const vegMenus = category?.itemCards?.filter((menu) => {
        return menu?.card?.info?.itemAttribute?.vegClassifier === "VEG";
      })
      setFilteredMenus(vegMenus)
    } else {
      setFilteredMenus(category.itemCards)
    }
   
  }, [isVeg])
  
  return category["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" &&
    category["@type"] !== undefined ? (
    <div className="categoriesContainer">
      <div className="catHeader" style={{ cursor: "default" }}>
        <h3 className="categoryTitle">{category?.title} </h3>
      </div>
      <ItemList category={category} />
    </div>
  )  :filteredMenus.length===0 ? "":(
    <div className="categoriesContainer" id={category?.title}>
      <div className="catHeader" onClick={() => setShowItemList(!showItemList)}>
        <h3 className="categoryTitle">
          {category?.title} <span>({filteredMenus.length})</span>
        </h3>
        {showItemList ? <img src={UpArrow} /> : <img src={DownArrow} />}
      </div>
      {showItemList && (
        <ItemList
          category={category}
          itemCards={filteredMenus}
        />
      )}
    </div>
  );
};
export default MenuCategory;
