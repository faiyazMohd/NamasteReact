import React from "react";

const ShimmerMenu = () => {
  return (
    <div className="menuContainerShimmer " data-testid="shimmer-menu">
      <div className="headerContainerShimmer animatePulse">
        <div className="menuHeaderShimmer">
          <div className="restInfoShimmer">
            <div className="restCuisinesContainerShimmer"></div>
          </div>
          <div className="restRatingContainerShimmer"></div>
        </div>
      </div>

      <div className="menuItemsContainerShimmer ">
        {Array(6)
          .fill("")
          .map((element, index) => {
            return (
              <div key={index} className="menuItemShimmer ">
                <div className="itemInfoShimmer animatePulse"></div>
                <div className="itemImageContainerShimmer animatePulse">
                  <div className="itemImageShimmer animatePulse"></div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ShimmerMenu;
