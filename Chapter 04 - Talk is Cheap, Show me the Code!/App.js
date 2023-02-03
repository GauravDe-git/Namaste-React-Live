import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./Image/Grub on Wheels.png";

// * App Layout
// * -Header - Logo, NavItems( right side), Cart
// * -Body - Search Bar
// *        RestaurantList
// *          -Card > Image,Name, Rating, Cusines
// * -Footer -Links, Copyright

const rootNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootNode);

const HeaderComponent = () => {
  return (
    <>
      <header>
        <a href="/">
          <img src={logo} alt="hello?" className="logo" />
        </a>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

// * Config Driven Swiggy API

const restaurantList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "19515",
      name: "Mezban Ripon Street",
      uuid: "e6a3ab0f-cd26-47a8-b12d-f169b10b3b94",
      city: "7",
      area: "Ripon Street",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "jaj2dspo6b2pfvflxiap",
      cuisines: ["Indian", "Biryani", "Chinese", "Tandoor"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 37,
      minDeliveryTime: 29,
      maxDeliveryTime: 29,
      slaString: "37 MINS",
      lastMileTravel: 2.4000000953674316,
      slugs: {
        restaurant: "mezban-wellesley-central-kolkata",
        city: "kolkata",
      },
      cityState: "7",
      address:
        "6, Ripon Street, Rafi Ahmed Kidwai Road, Near Dustarkhwan, Wellesley, Kolkata",
      locality: "Near Dustarkhwan",
      parentId: 135608,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5834583~p=1~eid=00000186-184c-d7f0-054b-3eb0004e014b",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "19515",
        deliveryTime: 37,
        minDeliveryTime: 29,
        maxDeliveryTime: 29,
        lastMileTravel: 2.4000000953674316,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.1",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "101421",
      name: "Mughal Arsalan Biryani",
      uuid: "85307ece-3a0e-4595-bc37-485261ede304",
      city: "7",
      area: "College Square",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "dqryaxhlba4okzyzcx5z",
      cuisines: ["Indian", "Biryani"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 30,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "30 MINS",
      lastMileTravel: 1.100000023841858,
      slugs: {
        restaurant: "mughal-arsalan-biryani-mg-road-burrabazar",
        city: "kolkata",
      },
      cityState: "7",
      address: "112 b mahatma gandhi road",
      locality: "MG road",
      parentId: 140901,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "101421",
        deliveryTime: 30,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 1.100000023841858,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "278225",
      name: "AL BAIK FAST FOOD CENTER",
      uuid: "a6fcccbc-adb9-491d-806e-0f6cf6a91a78",
      city: "7",
      area: "Barabazar Market",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "k3vuj7cncnfbwqqfkpbc",
      cuisines: ["Biryani", "Snacks", "North Indian"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 40,
      minDeliveryTime: 35,
      maxDeliveryTime: 35,
      slaString: "40 MINS",
      lastMileTravel: 1,
      slugs: {
        restaurant: "al-baik-fast-food-center-burrabazar-burrabazar",
        city: "kolkata",
      },
      cityState: "7",
      address:
        "54 PHEARS LANE GROUND FLOOR KOLKATA 700073 WARD 043 BR V, District - Kolkata, STATE - West Bengal - 700073",
      locality: "Burrabazar",
      parentId: 28935,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "278225",
        deliveryTime: 40,
        minDeliveryTime: 35,
        maxDeliveryTime: 35,
        lastMileTravel: 1,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
];

const RestaurantCard = ({cloudinaryImageId,name,cuisines,avgRating}) => {

  return (
    <div className="card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(" , ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="cardArmy">

    {restaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
    })}

      {/* <RestaurantCard {...restaurantList[0].data}/>
      <RestaurantCard {...restaurantList[1].data}/>
      <RestaurantCard {...restaurantList[2].data}/>
       */}
    </div>
  );
};

const FooterComponent = () => {
  return <></>;
};

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </>
  );
};

root.render(<AppLayout />);
