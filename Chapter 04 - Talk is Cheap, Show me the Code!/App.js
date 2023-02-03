import React from "react";
import ReactDOM from "react-dom/client";

const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);

const Title = () => {
    return (
        <div>
            Hello
        </div>
    )
}

root.render(<Title/>);