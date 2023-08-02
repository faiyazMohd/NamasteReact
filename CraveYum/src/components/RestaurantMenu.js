import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import greenStar from "../assets/icons/greenStar.png";
import minutesIcon from "../assets/icons/svgs/minutes.svg";
import rupeeIcon from "../assets/icons/svgs/rupee.svg";
// import leafIcon from "../assets/icons/leaves16.png";
import leafIcon from "../assets/icons/leafIconPNG.png";
import MenuItemCard from "./MenuItemCard";
import ShimmerMenu from "./ShimmerMenu";
import useRestMenu from "../utils/hooks/useRestMenu";
import useOnline from "../utils/hooks/useOnline";
const RestaurantMenu = () => {
  const {id } = useParams();
  const [isVeg, setIsVeg] = useState(false);
  const [restMenus,restInfo,filteredMenus, setFilteredMenus] =  useRestMenu(id);

  const isOnline = useOnline();
  if(!isOnline){
    return <h1>🔴Offline ! Please check your internet connection</h1>
  }
  return (
    <>
      {restMenus.length === 0 ? (
        <ShimmerMenu />
      ) : (
        <div className="menuContainer">
          <div className="headerContainer">
            <div className="menuHeader">
              <div className="restInfo">
                <div className="restName">{restInfo?.name}</div>
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
              
            {restInfo?.veg ?<><img src={leafIcon} alt="leaf" style={{width:"1.7rem"}} /><p>PURE VEG</p></> :
            <>
              <p>Veg Only</p>
              <div
                className="vegOnlyTogleContainer"
                onClick={(e) => {
                  if (isVeg) {
                    e.currentTarget.style.backgroundColor = "#d4d5d9";
                    setFilteredMenus(restMenus);
                    setIsVeg(false);
                  } else {
                    e.currentTarget.style.backgroundColor = "rgb(0, 128, 0)";
                    const vegMenus = restMenus.filter((item) => {
                      return (
                        item.card?.info?.itemAttribute?.vegClassifier === "VEG"
                      );
                    });
                    setFilteredMenus(vegMenus);
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
            }
            
            </div>
          </div>
          <div className="menuItemsContainer">
            <h3 style={{ margin: "4rem 0rem 1rem 0rem" }}>
              Recommended({filteredMenus?.length})
            </h3>
            {filteredMenus?.map((item) => {
              return <MenuItemCard item={item} key={item?.card?.info?.id} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default RestaurantMenu;
