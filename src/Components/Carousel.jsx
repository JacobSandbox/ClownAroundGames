import React from "react";
import Reel from "./Reel";
import ReelController from "./ReelController";
import "./styles/Carousel.css";

// Info display reel

function Carousel ( props ) {
    const [slide, setSlide] = React.useState(0);

    return <div className="carousel">
        <Reel items={props.items} slide={slide}/>
        <ReelController steps={props.itemCount} hook={setSlide}/>
    </div>;
}

export default Carousel; 