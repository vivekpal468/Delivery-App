import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { Menu_API } from "../utils/constant";
import useRestraurantMenu from "../utils/useRestraurantMenu";

const RestaurantMenu = () => {
  const { resid } = useParams();
  const resInfo = useRestraurantMenu(resid);

  if (resInfo === null) return <Shimmer />;

  const data = resInfo?.cards[2]?.card?.card?.info?.name;

  const { name, cuisines, costForTwoMessage, avgRatingString, locality } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} -{"Rs: "}{" "}
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
