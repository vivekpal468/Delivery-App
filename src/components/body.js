import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
const Body = () => {
  //state Variable = Super powerful Variable
  const [listofResturaunt, setlistofResturaunt] = useState([]);

  const [filteredRestruant, setfilteredRestruant] = useState([]);

  const [searchText, setSearchText] = useState([]);

  console.log("body rendered");

  useEffect(() => {
     fetchdata();
  }, []);
  //Normal JS Variable
  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.66500&lng=77.44770&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants); 
    // console.log(json);
    setlistofResturaunt(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestruant(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Conditional Renadering

  // if(listofResturaunt.length  === 0){
  //   return <Shimmer />;
  // }
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
        {filteredRestruant.map((restaurant) => {
          return (
            <ResCard
              key={
                restaurant?.info.id
              }
              {...restaurant.info}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Body;
