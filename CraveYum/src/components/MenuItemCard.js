import { useState } from "react";
import vegIcon from "../assets/icons/vegIcon.png";
import nonVegIcon from "../assets/icons/nonVegIcon.png";
import { IMG_CDN_LINK } from "../utils/constants";
import starSvg from "../assets/icons/svgs/star.svg";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/store/cartSlice";
const MenuItemCard = ({ item }) => {
  // const [cartItem, setCartItem] = useState(null);
  // console.log(item);
  const [showMore, setshowMore] = useState(false);

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
    <div
      className="menuItem"
      style={showMore ? { height: "auto" } : { height: "9.625rem" }}
      data-testid="menuItem"
    >
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
        <p className="itemDesc">
          {!showMore
            ? item.card?.info?.description?.length > 52
              ? item.card?.info?.description?.slice(0, 63) + "..."
              : item.card?.info?.description
            : item.card?.info?.description}
        </p>
        {item.card?.info?.description ? (
          !showMore ? (
            <p className="moreBtn" onClick={() => setshowMore(true)}>
              More
            </p>
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </div>
      <div className="itemImageContainer">
        <div className="itemImage">
          <img src={IMG_CDN_LINK + item.card?.info?.imageId} alt="" />
          {cartItem ? (
            <div className="addBtn">
              <p className="addText">
                <span
                  className="removeItemContainer"
                  data-testid="remove-item"
                  onClick={() => handleRemoveItem()}
                >
                  <span className="removeItemInItemCard">-</span>
                </span>
                <span data-testid="item-quantity-in-menu-item">
                  {cartItem?.quantity}
                </span>
                <span
                  className="addItemContainer"
                  data-testid="updateItem"
                  onClick={() => handleAddItem()}
                >
                  <span className="addItemInItemCard">+</span>
                </span>
              </p>
            </div>
          ) : (
            <div
              className="addBtn"
              data-testid="add-item"
              onClick={() => handleAddItem()}
            >
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
