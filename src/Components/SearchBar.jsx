import React from "react";
import "./styles/SearchBar.css"

function SearchBar() {
    return <form className="search-form" action="submit">
        <input className="search-bar" name="search" placeholder="Search..."></input>
        <button className="search-button">
            <img src="./images/magnifying_glass.png" alt="search button"/>
        </button>
    </form>
}

export default SearchBar;