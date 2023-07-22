import { IMG_CDN_LINK } from "../constants";
const RestaurantCard = ({
    name,
    cloudinaryImageId,
    cuisines,
    lastMileTravel,
  }) => {
    // const {name,cloudinaryImageId,cuisines,lastMileTravel} = restaurant.data
    return (
      <div className="restaurantCard">
        <img
          src={
            IMG_CDN_LINK +
            cloudinaryImageId
          }
          alt={name}
        />
        <h2>{name}</h2>
        <h3>{cuisines.join(",")}</h3>
        <span>{lastMileTravel} km</span>
      </div>
    );
  };

  export default RestaurantCard;