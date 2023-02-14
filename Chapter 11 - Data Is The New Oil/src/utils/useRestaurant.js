import { useState, useEffect } from "react";
import { RESTAURANT_MENU_IMG } from "../Constants";

const useRestaurant = (id) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  async function getRestaurantInfo() {
    const data = await fetch(
      RESTAURANT_MENU_IMG +
        id
    );
    const json = await data.json();
    setRestaurantInfo(json.data);
  }

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  return restaurantInfo;
};

export default useRestaurant;