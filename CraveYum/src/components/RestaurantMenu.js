import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import greenStar from "../assets/icons/greenStar.png";
import minutesIcon from "../assets/icons/svgs/minutes.svg";
import rupeeIcon from "../assets/icons/svgs/rupee.svg";
import leafIcon from "../assets/icons/leafIconPNG.png";
import ShimmerMenu from "./ShimmerMenu";
import useRestMenu from "../utils/hooks/useRestMenu";
import useOnline from "../utils/hooks/useOnline";
import MenuCategory from "./MenuCategory";
import VegOnlyContext from "../utils/contexts/VegOnlyContext";
import { IMG_CDN_LINK } from "../utils/constants";
import LocationIconBlack from "../assets/icons/svgs/locationIconBlack.svg";
import ModalMenuItem from "./ModalMenuItem";
import ForkAndKnife from "../assets/icons/svgs/ForkAndKnife.svg";
import Checkout_Cart from "../assets/icons/Checkout_Cart.png";
import { useSelector } from "react-redux";
const RestaurantMenu = () => {
  const { id } = useParams();
  const [isVeg, setIsVeg] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [AllCategories, setAllCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Recommended");
  const [restInfo, ItemCategories, restAdditionalInfo] = useRestMenu(id);
  const isOnline = useOnline();
  const cartItems = useSelector((store) => store.cart.cartItems);
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
    return totalItemPrice.toFixed(2);
  };
  if (!isOnline) {
    return (
      <h1 data-testid="offlineHeadingMenuPage">
        🔴Offline ! Please check your internet connection
      </h1>
    );
  }
  return (
    <VegOnlyContext.Provider value={{ isVeg }}>
      {ItemCategories.length === 0 ? (
        <ShimmerMenu />
      ) : (
        <div className="menuContainer" data-testid="menuContainer">
          <div className="headerContainer">
            <div className="menuHeader">
              <div className="restInfo">
                <div className="restMenuName">{restInfo?.name}</div>
                <div className="restCuisinesContainer">
                  <p className="restCuisines">
                    {restInfo?.cuisines?.join(", ")}
                  </p>
                  <p className="areaAndDistance">
                    {restInfo?.areaName +
                      ", " +
                      restInfo?.sla?.lastMileTravelString}
                  </p>
                </div>
              </div>
              <div className="restRatingContainer">
                <div className="restRatingMenu">
                  <div className="ratingTop">
                    <img src={greenStar} alt="star" />
                    <p>{restInfo?.avgRatingString}</p>
                  </div>
                  <div className="ratingBottom">
                    <p>{restInfo?.totalRatingsString}</p>
                  </div>
                </div>
              </div>
            </div>
            <hr className="menuHeaderDivider" />
            <div className="timeAndPrice">
              <div className="time">
                <img src={minutesIcon} alt="minutesIcon" />
                <p>{restInfo?.sla?.slaString}</p>
              </div>
              <div className="price">
                <img src={rupeeIcon} alt="rupeeIcon" />
                <p>{restInfo?.costForTwoMessage}</p>
              </div>
            </div>

            <hr style={{ border: "1px solid #d3d3d3", marginTop: "1rem" }} />

            <div className="vegOnly">
              {restInfo?.veg ? (
                <>
                  <img src={leafIcon} alt="leaf" style={{ width: "1.7rem" }} />
                  <p>PURE VEG</p>
                </>
              ) : (
                <>
                  <p>Veg Only</p>
                  <div
                    className="vegOnlyTogleContainer"
                    data-testid="vegOnlyTogleContainer"
                    onClick={(e) => {
                      if (isVeg) {
                        e.currentTarget.style.backgroundColor = "#d4d5d9";
                        setIsVeg(false);
                      } else {
                        e.currentTarget.style.backgroundColor =
                          "rgb(0, 128, 0)";
                        setIsVeg(true);
                      }
                    }}
                  >
                    <div
                      className="vegOnlyTogle"
                      style={
                        isVeg
                          ? {
                              transform: "translate3d(100%, 0%, 0)",
                              borderColor: "rgb(0, 128, 0)",
                            }
                          : {
                              transform: "translate3d(0%, 0%, 0)",
                              borderColor: "#d4d5d9",
                            }
                      }
                    >
                      <div
                        className="vegOnlyCircle"
                        style={isVeg ? { opacity: "1" } : { opacity: "0" }}
                      ></div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <hr style={{ borderTop: "9px solid #f1f1f6", marginTop: "1rem" }} />
          </div>
          <div
            className="menuItemsContainer"
            style={{ scrollBehavior: "smooth" }}
          >
            {ItemCategories?.map((category) => {
              return (
                <MenuCategory
                  key={category.card.card.title}
                  id={category.card.card.title}
                  selectedCategory={selectedCategory}
                  category={category.card.card}
                />
              );
            })}
          </div>
          <div className="restAdditionalInfo">
            <div className="restLicense">
              <div className="licenceImg">
                <img
                  src={
                    IMG_CDN_LINK + restAdditionalInfo[0]?.card?.card?.imageId
                  }
                />
              </div>
              <div className="licenceInfo">
                <p>{restAdditionalInfo[0]?.card?.card?.text[0]}</p>
              </div>
              {/* <hr style={{ border: "2px solid #d3d3d3", marginTop: ".5rem" }} /> */}
            </div>
            <div className="restLocation">
              <p className="outletName">
                {restAdditionalInfo[1]?.card?.card?.name}
              </p>
              <p>(Outlet:{restAdditionalInfo[1]?.card?.card?.area})</p>
              <p>
                <img src={LocationIconBlack} alt="locationIcon" />{" "}
                {restAdditionalInfo[1]?.card?.card?.completeAddress}
              </p>
            </div>
          </div>

          <div className="menuModalBtnContainer">
            <div
              className="menuModalBtn"
              onClick={() => setOpenModal(true)}
              style={
                openModal
                  ? { display: "none" }
                  : cartItems.length === 0
                  ? {}
                  : { transform: "translateY(-56px)" }
              }
            >
              <img src={ForkAndKnife} alt="ForkAndKnife" /> Browse Menu
            </div>
          </div>
          <div
            className="modalCloseBtn"
            onClick={() => setOpenModal(false)}
            style={openModal ? {} : { display: "none" }}
          >
            <div
              className="modalContainer"
              onClick={(e) => e.stopPropagation()}
            >
              {ItemCategories?.map((category) => {
                return (
                  <ModalMenuItem
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    setOpenModal={setOpenModal}
                    key={category?.card?.card?.title}
                    category={category?.card?.card}
                  />
                );
              })}
            </div>
          </div>
          <Link to="/cart">
            <div
              className="cartItemsAlertContainer"
              style={
                openModal
                  ? { display: "none" }
                  : cartItems.length === 0
                  ? {}
                  : { transform: "translateY(0)" }
              }
            >
              <div className="itemCountsAlert">
                {cartItems.length} items | ₹
                {calculateTotalItemsPrices(cartItems)}
              </div>
              <div className="checkoutCartItems">
                <div className="">VIEW CART</div>
                <img src={Checkout_Cart} alt="" />
              </div>
            </div>
          </Link>
        </div>
      )}
    </VegOnlyContext.Provider>
  );
};

export default RestaurantMenu;
