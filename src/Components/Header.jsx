import React from "react";
import "./styles/Header.css";
import SearchBar from "./SearchBar";
import Menu from "./Menu";

function Header ( props ) {
    return <header className="header">
        <h1 className="header-title">Clown Around Games</h1>
        <Menu items={props.menuItems}/>
        <div className="header-spacer"></div>
        <SearchBar/>
    </header>;
}

export default Header;