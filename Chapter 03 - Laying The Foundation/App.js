import React,{createElement as ce, createElement} from "react";
import ReactDOM from "react-dom/client";

const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);

const heading1 = ce("h1",{key: "h1"},"heading1")
const heading2 = ce("h1",{key: "h2"},"heading2")
const heading3 = ce("h1",{key: "h3"},"heading3")

const parent = ce("div",{className: "title"},[heading1,heading2,heading3])

root.render(parent);

// JSX

const parentJSX = (
<div>
    <h1 key={1}>h1 jsx</h1>
    <h1 key={2}>h2 jsx</h1>
    <h1 key={3}>h3 jsx</h1>
</div>);

root.render(parentJSX);
