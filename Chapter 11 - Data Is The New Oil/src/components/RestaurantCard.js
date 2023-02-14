import { IMG_CDN_URL } from "../Constants";

const RestaurantCard = ({cloudinaryImageId,name,cuisines,avgRating}) => {
    return (
      <div className="w-96 shadow-lg bg-sky-100 m-2">
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <h2>{name}</h2>
        <h3>{cuisines.join(" , ")}</h3>
        <h4>{avgRating} stars</h4>
      </div>
    );
  };

  export default RestaurantCard;