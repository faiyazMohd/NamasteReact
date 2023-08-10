import { Link } from "react-router-dom";
import RatingIcon from "../assets/icons/IconsComponents/RatingIcon";
import { IMG_CDN_LINK } from "../utils/constants";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  avgRatingString,
  cuisines,
  areaName,
  aggregatedDiscountInfoV3,
  id,
}) => {
  // const {name,cloudinaryImageId,cuisines,lastMileTravel} = restaurant.data
  return (
    <div className="restaurantCard">
      <Link to={"/restaurant/" + id}>
        <div className="restaurantImgDiv">
          <img src={IMG_CDN_LINK + cloudinaryImageId} alt={name.slice(0, 35)} />
          <div className="offerText">
            {aggregatedDiscountInfoV3?.header !== undefined ||
            aggregatedDiscountInfoV3?.subHeader !== undefined
              ? aggregatedDiscountInfoV3?.header +
                " " +
                aggregatedDiscountInfoV3?.subHeader
              : aggregatedDiscountInfoV3?.discountCalloutInfo !== undefined &&
                aggregatedDiscountInfoV3 !== undefined
              ? aggregatedDiscountInfoV3?.discountCalloutInfo.message
              : ""}
          </div>
        </div>
        <div className="restaurantInfo">
          {/* <div className="restName">{name.length>23?name.slice(0,23)+"...":name}</div> */}
          <div className="restNameContainer restName">{name}</div>
          <div className="restRating">
            <RatingIcon /> <span> {avgRatingString}</span>
          </div>
          {/* <p>{cuisines.join(", ").length>30?cuisines.join(", ").slice(0,30)+"...":cuisines.join(", ")}</p> */}
          <p>{cuisines.join(", ")}</p>
          <p>{areaName}</p>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
