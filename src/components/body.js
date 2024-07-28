import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import useOnlineStatus  from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import RestaurantMenu from "./restauranMenu";
const Body = () => {
  //state Variable = Super powerful Variable
  const [listofResturaunt, setlistofResturaunt] = useState([]);

  const [filteredRestruant, setfilteredRestruant] = useState([]);

  const [searchText, setSearchText] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);
  //Normal JS Variable
  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6885937&lng=77.3532597&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setlistofResturaunt(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestruant(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        looks like a offine!! please check your internet connection!!
      </h1>
    );

  return listofResturaunt.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestruant = listofResturaunt.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestruant(filteredRestruant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic Here
            const filterdRestraunt = listofResturaunt.filter(
              (res) => res.info.avgRating > 4
            );
            setlistofResturaunt(filterdRestraunt);
          }}
        >
          Top Rated restaurant
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestruant.map((restaurant) => (
          <Link
            to={"/Restaurants/" + restaurant?.info?.id}
            key={restaurant?.info?.id}
          >
            <ResCard {...restaurant?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
