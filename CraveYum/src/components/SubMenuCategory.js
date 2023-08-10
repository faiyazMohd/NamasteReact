import { useState ,useEffect, useContext} from "react";
import ItemList from "./ItemList";
import UpArrow from "../assets/icons/svgs/UpArrow.svg";
import DownArrow from "../assets/icons/svgs/DownArrow.svg";
import VegOnlyContext from "../utils/contexts/VegOnlyContext";
const SubMenuCategory = ({ category }) => {
  const [showItemList, setShowItemList] = useState(false);
  const [filteredMenus, setFilteredMenus] = useState([])
  const{isVeg} =  useContext(VegOnlyContext)
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
  return filteredMenus.length===0 ? "": (
    <div className="subCategoryContainer">
      <div
        className="subCatHeader"
        onClick={() => setShowItemList(!showItemList)}
      >
        <h3 className="subCategoryTitle">
          {category?.title}({filteredMenus.length})
        </h3>
        {showItemList ? <img src={UpArrow} /> : <img src={DownArrow} />}
      </div>
      {showItemList && <ItemList category={category}  itemCards={filteredMenus}/>}
    </div>
  );
};
export default SubMenuCategory;
