import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../Constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterSearchData } from "../utils/Utils";
import useOnline from "../utils/useOnline";

const BodyComponent = () => {
  const [searchTxt, setSearchTxt] = useState("");

  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurantApiData();
  }, []);

  async function getRestaurantApiData() {
    const apiData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await apiData.json();
    console.log(jsonData);

    setAllRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
  }

  const checkOnline = useOnline(true);

  if (!checkOnline) return <h1>🔴 Oops! You are Offline!</h1>;

  if (!allRestaurants) return null;

  // if (filteredRestaurants.length === 0) return <h1> No Restaurants Found! </h1>

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    // * The Actual Body Component starts Here
    <>
      <div className="bg-lime-50 my-3 shadow-lg">
        <input
          type="search"
          placeholder="search"
          className="p-3 m-3 bg-lime-100"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
        <button
          className="border border-sky-500 p-2 bg-lime-100 rounded-lg"
          onClick={() => {
            //Filter the search Data
            const searchData = filterSearchData(searchTxt, allRestaurants);

            //Change the value using state
            setFilteredRestaurants(searchData);
          }}
        >
          Search
        </button>
      </div>

      <div className="flex flex-wrap justify-between p-3 m-1 gap-4">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default BodyComponent;
