import { useState } from "react";
import vegIcon from "../assets/icons/vegIcon.png";
import nonVegIcon from "../assets/icons/nonVegIcon.png";
import { IMG_CDN_LINK } from "../utils/constants";
import starSvg from "../assets/icons/svgs/star.svg";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/store/cartSlice";
const CartItem = ({ item }) => {
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
    <div className="itemCart">
      <div className="cartItemName">
        {item.card?.info?.itemAttribute?.vegClassifier === "VEG" ? (
          <>
            <img
              className="isVegCartItem"
              src={vegIcon}
              alt="veg"
            />
          </>
        ) : (
          <>
            <img className="isVeg" src={nonVegIcon} alt="nonVeg" />
          </>
        )}
        <p style={{marginLeft: ".5rem"}}>{item.card?.info?.name}</p>
      </div>

      <div className="addRemoveAndPrice">
        <div className="addRemoveContainer">
          <span className="" onClick={() => handleRemoveItem()}>
            <p>-</p>
          </span>
          {cartItem?.quantity}
          <span className="" onClick={() => handleAddItem()}>
            <p>+</p>
          </span>
        </div>

        <p className="cartPrice">
          {item.card?.info?.price
            ? "₹" + (item.card?.info?.price / 100) * cartItem.quantity
            : "₹" + (item.card?.info?.variantsV2?.pricingModels[0]?.price / 100)* cartItem.quantity}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
