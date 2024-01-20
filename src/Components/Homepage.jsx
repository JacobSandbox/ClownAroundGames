// Homepage component

import Header from "./Header";
import Carousel from "./Carousel";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "./styles/Homepage.css";

let items = [
    {id:0, imgUrl:"./images/elephant.jpg", alt:"one"},
    {id:1, imgUrl:"./images/red_tent.jpg", alt:"two"},
    {id:2, imgUrl:"./images/blue_tent.jpg", alt:"three"}
]

function Homepage() {
    return (<div>
        <Link to="/games/all" className="homepage-skip-nav">{"<-"} To the GAMES!</Link>
        <Header menuItems={["Games", "$Home", "About", "Contact"]}/>
        <div className="homepage-content global-content-box">
            <div className="homepage-curtain-container">
                <div className="homepage-curtain"></div>
                <div className="homepage-curtain"></div>
            </div>
            <div className="homepage-carousel-container">
                <Carousel items={JSON.stringify(items)} itemCount="3" size="400" />
            </div>
            <h2 style={{fontSize:"2rem"}}>Apologies! Site is under construction! Come back soon!</h2>
        </div>
        <Footer />
    </div>);
}

export default Homepage;