import React from "react";
import "./styles/Reel.css";

function Reel ( props ) {
    // Parse item data
    let items = JSON.parse(props.items);
    let images = [];
    for ( let i = 0; i < items.length; i++ ) {
        let parts = items[i].imgUrl.split(".");
        let lowres = 'url("' + parts[0] + '_lowres.' + parts[1] + '")';
        let offset = -(props.slide * 100) + "%";
        images.push(
            <div key={items[i].id} className="reel-item" style={{left:offset}}>
                <img 
                    className="reel-image"
                    src={items[i].imgUrl}
                    alt={items[i].alt} 
                    style={{backgroundImage:lowres}}
                />
            </div>
        )
    }

    return <div className="reel">{images}</div>;
}

export default Reel;
