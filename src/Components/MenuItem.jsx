import React from "react";
import "./styles/MenuItem.css";

function MenuItem ( props ) {
    return <div className="menu-item">
        <p className="menu-item-text">{props.text}</p>
        <img className="menu-item-cursor" src="./images/cursor.png" alt="cursor"/>
    </div>;
}

export default MenuItem;