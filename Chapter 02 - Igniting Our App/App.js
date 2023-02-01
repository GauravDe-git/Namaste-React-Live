import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1",{class: "myHeading"},"Parcel is a Beast!")
// const rootNode = ReactDOM.createRoot(document.getElementById("root"))
// rootNode.render(heading)

const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement("h1",{class: "myHeading"},"Parcel is a beast"));