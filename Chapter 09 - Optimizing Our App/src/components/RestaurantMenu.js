import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constants";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    getRestaurantInfo();
  }, []);
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=" +
         id 
    );
    const json = await data.json();
    setRestaurantInfo(json.data);
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <h1>Restraunt id: {id}</h1>
          <h2>{restaurantInfo?.name}</h2>
          <img src={IMG_CDN_URL + restaurantInfo?.cloudinaryImageId} />
          <h3>{restaurantInfo?.area}</h3>
          <h3>{restaurantInfo?.city}</h3>
          <h3>{restaurantInfo?.avgRating} stars
          </h3>
          <h3>{restaurantInfo?.costForTwoMsg}
          </h3>
        </div>
        <div>
          <h1>Menu</h1>
          {/* <ul>
          {(restaurantInfo?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
         ))}
        </ul> */}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
