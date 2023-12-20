// Homepage component

import Header from "./Header";
import Carousel from "./Carousel";
import Footer from "./Footer";
import "./styles/Homepage.css";

let items = [
    {id:0,imgUrl:"./images/elephant.jpg",alt:"one"},
    {id:1,imgUrl:"./images/red_tent.jpg",alt:"two"},
    {id:2,imgUrl:"./images/blue_tent.jpg",alt:"three"}
]

function Homepage() {
    return (<div>
        <Header menuItems={["Games", "About", "Contact"]}/>
        <div className="homepage-content">
            <Carousel items={JSON.stringify(items)} itemCount="3" />
        </div>
        <Footer />
    </div>);
}

export default Homepage;