import { useContext, useState, useEffect } from "react";
import VegOnlyContext from "../utils/contexts/VegOnlyContext";

const ModalMenuItem = ({
  category,
  selectedCategory,
  setSelectedCategory,
  setOpenModal,
}) => {
  const { isVeg } = useContext(VegOnlyContext);
  const [filteredMenus, setFilteredMenus] = useState([]);
  //   console.log(category?.categories);
  useEffect(() => {
    if (isVeg) {
      const vegMenus = category?.itemCards?.filter((menu) => {
        return menu?.card?.info?.itemAttribute?.vegClassifier === "VEG";
      });
      setFilteredMenus(vegMenus);
    } else {
      setFilteredMenus(category.itemCards);
    }
  }, [isVeg]);

  return filteredMenus?.length === 0 ? (
    ""
  ) : (
    <div className="modalItemContainer" onClick={() => setOpenModal(false)}>
      <a
        href={"#" + category?.title}
        onClick={() => setSelectedCategory(category?.title)}
        // style={{display:"flex",justifyContent:"start",alignItems:"center",border:"1px solid brown"}}
      >
        {/* <div className="selectedCategory"> */}
        {selectedCategory === category?.title ? (
          <div className="tiltedSquare"></div>
        ) : (
          ""
        )}
        {/* </div> */}
        <div className="modalItemInfoContainer">
          <div
            className="modalItemTitle"
            style={
              selectedCategory === category?.title ? { fontWeight: "700" } : {}
            }
          >
            {category?.title}
          </div>
          <div className="modalItemLength">
            {category["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" &&
            category["@type"] !== undefined ? (
              <>
                {isVeg
                  ? category?.categories?.reduce((acc, items) => {
                      const vegMenus = items?.itemCards?.filter((menu) => {
                        return (
                          menu?.card?.info?.itemAttribute?.vegClassifier ===
                          "VEG"
                        );
                      });

                      return (acc += vegMenus.length);
                    }, 0)
                  : category?.categories?.reduce((acc, items) => {
                      return (acc += items.itemCards.length);
                    }, 0)}
              </>
            ) : (
              <span>{filteredMenus.length}</span>
            )}
          </div>
        </div>
      </a>
    </div>
  );
};
export default ModalMenuItem;
