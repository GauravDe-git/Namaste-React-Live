import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constants";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;

  const restaurantInfo = useRestaurant(id);

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
