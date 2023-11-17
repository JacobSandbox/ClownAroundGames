import React from "react";
import MenuItem from "./MenuItem";

function Header() {
    return <header>
        <div className="menu">
            <p>menu</p>
                <div className="popup">
                    <MenuItem text="test"/>
                    <MenuItem text="test"/>
                    <MenuItem text="test"/>
                </div>
            </div>
        <h1 className="title">Clown Around Games</h1>
    </header>;
}

export default Header;