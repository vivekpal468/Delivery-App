import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6885937&lng=77.3532597&restaurantId=677833&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
     setresInfo(json.data);
  };
  if(resInfo === null) return  <Shimmer />;

  const data = resInfo?.cards[2]?.card?.card?.info?.name;
  // console.log(data);s
  const {name, cuisines, costForTwoMessage,avgRatingString,locality} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ;
    console.log(itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
      <h2>Menu</h2>
     <ul>
      {
        itemCards.map(item => (
          <li>{item.card.info.name}</li>
        ))
      }
     </ul>
    </div>
  );
};
export default RestaurantMenu;
