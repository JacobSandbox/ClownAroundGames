// Homepage component

import Header from "./Header";
import Carousel from "./Carousel";
import Footer from "./Footer";
import "./styles/Homepage.css";

let items = [
    {id:0, imgUrl:"./images/elephant.jpg", alt:"one"},
    {id:1, imgUrl:"./images/red_tent.jpg", alt:"two"},
    {id:2, imgUrl:"./images/blue_tent.jpg", alt:"three"}
]

function Homepage() {
    return (<div>
        <Header menuItems={["Games", "About", "Contact"]}/>
        <div className="homepage-content global-content-box">
            <div className="homepage-curtain-container">
            <div className="homepage-curtain"></div>
            <div className="homepage-curtain"></div>
            </div>
            <Carousel items={JSON.stringify(items)} itemCount="3" size="400" />
            <h2 style={{fontSize:"2rem"}}>Apologies! Site is under constrution! Come back soon!</h2>
        </div>
        <Footer />
    </div>);
}

export default Homepage;