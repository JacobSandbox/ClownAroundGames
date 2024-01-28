import React from "react";
import Reel from "./Reel";
import ReelController from "./ReelController";
import "./styles/Carousel.css";

// news display reel

function Carousel ( props ) {
    const [slide, setSlide] = React.useState(0);

    let size = 256;
    if (props.size !== undefined) {
        size = parseInt(props.size);
    }

    return <div className="carousel">
        <Reel items={props.items} slide={slide} gap="500" size={size} />
        <ReelController steps={props.itemCount} hook={setSlide} interval="4" />
    </div>;
}

export default Carousel; 