// Homepage component

import Header from "./Header";
import Carousel from "./Carousel";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "./styles/Homepage.css";

let newsItems = [
    {id:0, imgUrl:"./images/elephant.jpg", alt:"one"},
    {id:1, imgUrl:"./images/red_tent.jpg", alt:"two"},
    {id:2, imgUrl:"./images/blue_tent.jpg", alt:"three"}
]

async function loadNews() {
    // Fetch news json file...
    let src = "https://raw.githubusercontent.com/JacobSandbox/ClownAroundGamesDatabase/main/data/news/news.json";
    let res = await fetch(src);
    // ...and store in var
    newsItems = await res.text();
}

await loadNews();

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
                <Carousel items={newsItems} itemCount="3" size="400" />
            </div>
            <h2 style={{fontSize:"2rem"}}>Apologies! Site is under construction! Come back soon!</h2>
            <div className="homepage-quicklinks">
                <p>Independantly created games for all kinds of players!</p>
                <Link to="/games/all">to the games!{" ->"}</Link>
                <div className="homepage-story">
                    <p>Independantly designed and produced, Clown Around Games is made by one who loves playing games just as much as you do... <Link to="/about">Read the full story</Link></p>
                </div>
            </div>
            <ul className="homepage-sitemap">
                <li><Link to="/games/all">Games</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
        <Footer />
    </div>);
}

export default Homepage;