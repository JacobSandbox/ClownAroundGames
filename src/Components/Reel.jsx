import React from "react";
import ReelController from "./ReelController";
import Carousel from "./Carousel";

// Info display reel

function Reel ( props ) {
    return <div className="reel">
        <Carousel items={props.items}/>
        <ReelController steps="3" />
    </div>;
}

export default Reel; 