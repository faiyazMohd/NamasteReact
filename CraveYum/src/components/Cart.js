import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuItemCard from "./MenuItemCard";
import { clearCart } from "../utils/store/cartSlice";
import cookingPng from "../assets/icons/cookingPng.png";
import foodPng from "../assets/icons/foodPng.webp";
import { Link } from "react-router-dom";
import emptyCart from "../assets/icons/empty-cart.png";
import CartItem from "./CartItem";
const Cart = () => {
  const deilveriCharges = 53.32;
  const PlatformFee = 2;
  const [isAdviseChecked, setIsAdviseChecked] = useState(false);
  const cartItems = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const calculateGstCharges = (totalItemPrice) => {
    const result = (5 / 100) * totalItemPrice;
    return result;
  };
  const calculateTotalPrice = (cartItems) => {
    const totalItemPrice = cartItems.reduce((accumulator, currentElement) => {
      const totalPricePerItem = currentElement.item.card?.info?.price
        ? (currentElement.item.card?.info?.price / 100) *
          currentElement.quantity
        : (currentElement.item.card?.info?.variantsV2?.pricingModels[0]?.price /
            100) *
          currentElement.quantity;
      return (accumulator += totalPricePerItem);
    }, 0);
    const result =
      totalItemPrice +
      deilveriCharges +
      PlatformFee +
      calculateGstCharges(totalItemPrice);
    return result.toFixed(2);
  };
  const calculateTotalItemsPrices = (cartItems) => {
    const totalItemPrice = cartItems.reduce((accumulator, currentElement) => {
      const totalPricePerItem = currentElement.item.card?.info?.price
        ? (currentElement.item.card?.info?.price / 100) *
          currentElement.quantity
        : (currentElement.item.card?.info?.variantsV2?.pricingModels[0]?.price /
            100) *
          currentElement.quantity;
      return (accumulator += totalPricePerItem);
    }, 0);
    return totalItemPrice;
  };

  return cartItems.length === 0 ? (
    <div className="emptyCartContainer" data-testid="empty-cart">
      <div className="cookingImg">
        <img src={cookingPng} alt="Empty Cart" />
      </div>
      <h3>Your cart is empty</h3>
      <p>You can go to home page to view more restaurants</p>
      <Link
        to="/"
        style={{ border: "1px solid red" }}
        className="seeAllRestBtn"
      >
        See restaurants near you
      </Link>
    </div>
  ) : (
    <div className="cartPage" data-testid="cart-page">
      <div className="cartContainer">
        <div className="leftContainer">
          <div className="accountContainer">
            <div className="leftAccount">
              <h3>Account</h3>
              <p>
                To place your order now, log in to your existing account or sign
                up.
              </p>
              <div className="askingForSignUp">
                <div className="login">
                  <div style={{ fontSize: "13px", color: "#60b246" }}>
                    Have an account?
                  </div>
                  <div
                    style={{
                      fontWeight: "600",
                      fontSize: "14px",
                      color: "#60b246",
                    }}
                  >
                    LOG IN
                  </div>
                </div>
                <div className="signup">
                  <div style={{ fontSize: "13px", color: "#fff" }}>
                    New to Swiggy?
                  </div>
                  <div
                    style={{
                      fontWeight: "600",
                      fontSize: "14px",
                      color: "#fff",
                    }}
                    className=""
                  >
                    SIGN UP
                  </div>
                </div>
              </div>
            </div>
            <div className="rightImgContainer">
              <img src={foodPng} alt="" />
            </div>
          </div>
          <div className="addressContainer">Delivery address</div>
          <div className="addressContainer">Payment</div>
        </div>

        <div className="rightContainer">
          <div className="" style={{ width: "100", background: "#fff" }}>
            <div className="checkoutContainer">
              <div className="checkoutHeader">
                <h4>Cart Items ({cartItems.length})</h4>
                <img
                  data-testid="clear-cart"
                  src={emptyCart}
                  onClick={handleClearCart}
                  alt=""
                />
              </div>
              <div className="checkoutBody">
                {/* <div className="innerBodyContainer"> */}

                <div className="cartItems" data-testid="cart-items-cart-page">
                  {cartItems?.map((item) => {
                    return (
                      <CartItem
                        item={item.item}
                        key={item.item?.card?.info?.id}
                      />
                    );
                  })}
                </div>
                <div className="suggestionContainer">
                  <textarea
                    className="suggestionTextarea"
                    placeholder="❝ Any suggestions? We will pass it on..."
                    maxLength="140"
                  ></textarea>
                </div>
                <div className="deliveryAdviseContainer">
                  <div className="checkboxContainer">
                    <label htmlFor="">
                      <input
                        type="checkbox"
                        data-testid="checkbox-cart-page"
                        onClick={(e) => setIsAdviseChecked(e.target.checked)}
                      />
                    </label>
                  </div>
                  <div className="deliveryAdviseTextContainer">
                    <div className="deliveryAdviseTextHeading">
                      Opt in for No-contact Delivery
                    </div>
                    <div
                      className="deliveryAdviseTextPara"
                      data-testid="delevery-text"
                    >
                      {isAdviseChecked ? 
                          "Our delivery partner will call to confirm. Pleaseensure that your address has all the required details."
                       : 
                         "Unwell, or avoiding contact? Please select no-contact delivery. Partner will safely place the order outside your door (not for COD)"
                      }
                    </div>
                  </div>
                </div>
                <div className="billDetailsContainer">
                  <div className="billDetails">Bill Details</div>
                  <div className="itemTotalContainer">
                    <div className="itemTotal">Item Total</div>
                    <div className="itemTotalPrice">
                      ₹{calculateTotalItemsPrices(cartItems)}
                    </div>
                  </div>
                  <div className="itemTotalContainer">
                    <div className="itemTotal">Delivery Fee</div>
                    <div className="itemTotalPrice">₹{deilveriCharges}</div>
                  </div>
                  <div
                    style={{
                      borderBottom: "1px solid #e9e9eb",
                      margin: "1rem 0",
                    }}
                  ></div>
                  <div className="itemTotalContainer">
                    <div className="itemTotal">Platform fee</div>
                    <div className="itemTotalPrice">₹{PlatformFee}</div>
                  </div>
                  <div className="itemTotalContainer">
                    <div className="itemTotal">GST and Restaurant Charges</div>
                    <div className="itemTotalPrice">
                      ₹
                      {calculateGstCharges(
                        calculateTotalItemsPrices(cartItems)
                      ).toFixed(2)}
                    </div>
                  </div>
                  <div style={{ marginTop: "1.5rem" }}></div>
                </div>
              </div>
              <div className="totalPrice">
                <p>TO PAY</p>
                <p>₹{calculateTotalPrice(cartItems)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
