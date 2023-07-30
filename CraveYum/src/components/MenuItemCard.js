import React from "react";
import vegIcon from "../assets/icons/vegIcon.png";
import nonVegIcon from "../assets/icons/nonVegIcon.png";
import { IMG_CDN_LINK } from "../utils/constants";
import starSvg from "../assets/icons/svgs/star.svg";
const MenuItemCard = ({ item }) => {
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
          <div className="addBtn">
            <p className="addText">ADD</p>
            <p className="plusSign">+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
