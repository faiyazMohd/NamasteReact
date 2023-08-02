import { useState ,useEffect} from "react";

const useRestMenu = (restId)=>{
    const [restMenus, setRestMenus] = useState([]);
    const [restInfo, setRestInfo] = useState({});
    const [filteredMenus, setFilteredMenus] = useState([]);
    
    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        const data = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.9727952&lng=73.0296706&restaurantId=${restId}&catalog_qa=undefined&submitAction=ENTER`
        );
        const json = await data.json();
        // console.log(json);
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
          (card, index) => {
            if (card.card.card.title === "Recommended") {
              setRestMenus(card.card.card.itemCards);
              setFilteredMenus(card.card.card.itemCards);
              // console.log(card.card.card.itemCards);
              // console.log("index is  : " + index);
            }
          }
        );
        setRestInfo(json?.data?.cards[0]?.card?.card?.info);
      };
      
    return[restMenus,restInfo,filteredMenus, setFilteredMenus];
}

export default useRestMenu;