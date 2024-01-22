import React from "react";
import "./styles/Reel.css";

function Reel ( props ) {
    // Parse item data
    let items = JSON.parse(props.items);
    let images = [];
    let gap = 0;
    if ( props.gap !== undefined ) {
        gap = parseInt(props.gap);
    }

    for ( let i = 0; i < items.length; i++ ) {
        let parts      = items[i].image.split(".");
        let lowres     = 'url("' + parts[0] + '_lowres.' + parts[1] + '")';
        let baseOffset = -(props.slide * 100) + "%";
        let gapOffset  = -props.slide*gap + "px";
        let offset     = `calc(${baseOffset} + ${gapOffset})`;
        images.push(
            <div key={items[i].id} className="reel-item" style={{left:offset}}>
                <img 
                    className="reel-image"
                    src={items[i].image}
                    alt={items[i].alt} 
                    style={{backgroundImage:lowres}}
                />
            </div>
        )
    }

    return <div className="reel" style={{gap:gap+"px", width:props.size+"px", height:props.size + "px"}}>{images}</div>;
}

export default Reel;
