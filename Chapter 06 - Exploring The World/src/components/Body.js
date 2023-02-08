import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../Constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function filterSearchData(searchTxt,restaurants) {
   const searchFilterData = restaurants.filter((restaurant)=>
        restaurant?.data?.name?.toLowerCase()?.includes(searchTxt.toLowerCase())
    );
    return searchFilterData;
}

const BodyComponent = () => {

    const [searchTxt,setSearchTxt] = useState("");

    const [ allRestaurants, setAllRestaurants ] = useState([]);
    const [ filteredRestaurants, setFilteredRestaurants ] = useState([]);

    useEffect(() => {
      getRestaurantApiData();
    }, [])

    async function getRestaurantApiData()
    {
      const apiData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&page_type=DESKTOP_WEB_LISTING");
      const jsonData = await apiData.json();
      console.log(jsonData)

      setAllRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
    }

  if (!allRestaurants) return null;

  if (filteredRestaurants.length === 0) return <h1> No Restaurants Found! </h1>

  return allRestaurants.length === 0 ? (<Shimmer/>) : (
    <>
    <input type="search" placeholder="search" value={searchTxt}
        onChange={(e)=>{setSearchTxt(e.target.value)}}
    />
    <button onClick={() => {
        //Filter the search Data
        const searchData = filterSearchData(searchTxt,allRestaurants)

        //Change the value using state
        setFilteredRestaurants(searchData);
    }}>
    Search
    </button>

      <div className="cardArmy">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default BodyComponent;
