import { useState } from "react";
import vegIcon from "../assets/icons/vegIcon.png";
import nonVegIcon from "../assets/icons/nonVegIcon.png";
import { IMG_CDN_LINK } from "../utils/constants";
import starSvg from "../assets/icons/svgs/star.svg";
import { useDispatch, useSelector } from "react-redux";
import { addItem,removeItem } from "../utils/store/cartSlice";
const MenuItemCard = ({ item }) => {
  // const [cartItem, setCartItem] = useState(null);
  // console.log(item);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    const itemObj = {
      item: item,
      quantity: 1,
    };
    dispatch(addItem(itemObj));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem(item));
  };


  const cartItemsStore = useSelector((store) => store.cart.cartItems);
  // console.log(cartItemsStore);
  let cartItem = null;
  cartItemsStore?.map((element) => {
    if (element.item.card?.info?.id === item?.card?.info?.id) {
      cartItem = element;
      // console.log(element);
    }
  });
  return (
    <div className="menuItem">
      <div className="itemInfo">
        <div className="iconsContainer">
          {item.card?.info?.itemAttribute?.vegClassifier === "VEG" ? (
            <>
              <img className="isVeg" src={vegIcon} alt="veg" />
            </>
          ) : (
            <>
              <img className="isVeg" src={nonVegIcon} alt="nonVeg" />
            </>
          )}
          {item.card?.info?.isBestseller ? (
            <>
              <img className="star" src={starSvg} alt="" />
              <span className="bestseller"> Bestseller</span>
            </>
          ) : (
            ""
          )}
        </div>
        <p className="itemName">{item.card?.info?.name}</p>
        <p className="itemPrice">
          {item.card?.info?.price
            ? "₹" + item.card?.info?.price / 100
            : "₹" + item.card?.info?.variantsV2?.pricingModels[0]?.price / 100}
        </p>
        <p className="itemDesc">{item.card?.info?.description}</p>
      </div>
      <div className="itemImageContainer">
        <div className="itemImage">
          <img src={IMG_CDN_LINK + item.card?.info?.imageId} alt="" />
          {cartItem ? (
            <div className="addBtn">
              <p className="addText">
                <span className="removeItemContainer"  onClick={() => handleRemoveItem()}><p>-</p></span>
                {cartItem?.quantity}
                <span className="addItemContainer" onClick={() => handleAddItem()}><p>+</p></span>
              </p>
            </div>
          ) : (
            <div className="addBtn" onClick={() => handleAddItem()}>
              <p className="addText">ADD</p>
              <p className="plusSign">+</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
