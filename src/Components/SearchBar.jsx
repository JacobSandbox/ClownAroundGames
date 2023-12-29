import React from "react";
import { Form } from "react-router-dom";
import "./styles/SearchBar.css"

function SearchBar() {
    return <Form className="search-form" action="submit">
        <input className="search-bar" type="search" name="search" placeholder="Search..."></input>
        <button className="search-button">
            <img src="../images/magnifying_glass.png" alt="search button"/>
        </button>
    </Form>
}

export default SearchBar;