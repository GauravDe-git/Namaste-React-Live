import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../Constants";
import { useState } from "react";

function filterSearchData(searchTxt,restaurants) {
   const searchFilterData = restaurants.filter((restaurant)=>
        restaurant.data.name.includes(searchTxt)
    );
    return searchFilterData;
}

const BodyComponent = () => {

    const [searchTxt,setSearchTxt] = useState("");

    const [ restaurants , setRestaurants] = useState(restaurantList);

  return (
    <>
    <input type="search" placeholder="search" value={searchTxt}
        onChange={(e)=>{setSearchTxt(e.target.value)}}
    />
    <button onClick={() => {
        //Filter the search Data
        const searchData = filterSearchData(searchTxt,restaurants)

        //Change the value using state
        setRestaurants(searchData);
    }}>
    Search
    </button>

      <div className="cardArmy">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default BodyComponent;
