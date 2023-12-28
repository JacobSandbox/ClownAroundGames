import React from "react";
import "./styles/Header.css";
import SearchBar from "./SearchBar";
import Menu from "./Menu";
import { Link } from "react-router-dom";

function Header ( props ) {
    return <header className="header">
        <Link to="/"><h1 className="header-title">Clown Around Games</h1></Link>
        <Menu items={props.menuItems}/>
        <div className="header-spacer"></div>
        <SearchBar/>
    </header>;
}

export default Header;