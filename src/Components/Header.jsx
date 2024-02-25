import React from "react";
import "./styles/Header.css";
import SearchBar from "./SearchBar";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import logo from "./images/site_logo.png";

function Header ( props ) {
    return <header className="header">
        <Link to="/"><img className="header-logo" src={logo} /></Link>
        <Menu items={props.menuItems}/>
        <div className="header-spacer"></div>
        <SearchBar/>
    </header>;
}

export default Header;