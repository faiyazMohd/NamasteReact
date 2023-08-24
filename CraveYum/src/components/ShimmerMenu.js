import React from "react";

const ShimmerMenu = () => {
  return (
    <div className="menuContainerShimmer"  data-testid="shimmer-menu">
      <div className="headerContainerShimmer">
        <div className="menuHeaderShimmer">
          <div className="restInfoShimmer">
            <div className="restCuisinesContainerShimmer"></div>
          </div>
          <div className="restRatingContainerShimmer"></div>
          
        </div>
      </div>
      
      <div className="menuItemsContainerShimmer">
      {Array(6).fill("").map((element,index)=>{
        return(<div key={index} className="menuItemShimmer">
        <div className="itemInfoShimmer"></div>
        <div className="itemImageContainerShimmer">
          <div className="itemImageShimmer"></div>
        </div>
      </div>)
      })}
        
      </div>
    </div>
  );
};

export default ShimmerMenu;
