import React from "react";

function Carousel ( props ) {
    return <div className="carousel">
        {JSON.parse(props.items).map(item => {
            let parts = item.imgUrl.split(".");
            let lowres = 'url("' + parts[0] + '_lowres.' + parts[1] + '")';
            return <div key={item.id} className="carousel-item">
                <img 
                    className="carousel-image"
                    src={item.imgUrl}
                    alt={item.alt} 
                    style={{backgroundImage:lowres}}
                    />
            </div>
        })}
    </div>;
}

export default Carousel;