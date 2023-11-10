import React from "react";

function Carousel ( props ) {
    console.log("carousel: "+props.items);
    <div className="carousel">
        {JSON.parse(props.items).map(item=> {
            return <div className="carousel-item">
                <img className="carousel-image" src={item.imgURL} alt={item.alt} />
            </div>
        })}
    </div>
}

export default Carousel;