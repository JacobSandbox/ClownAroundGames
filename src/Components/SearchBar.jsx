import React from "react";
import { Form } from "react-router-dom";
import "./styles/SearchBar.css"
import glass from "./images/magnifying_glass.png";

function SearchBar() {
    return <Form className="search-form" action="/games">
        <input className="search-bar" type="search" name="search" placeholder="Search..." required></input>
        <button className="search-button">
            <img src={glass} alt="search button" />
        </button>
    </Form>
}

export default SearchBar;