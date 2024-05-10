import React from "react";
import { Link } from "react-router-dom";
import "./styles/Reel.css";

function Reel ( props ) {

    let dataPath = "https://raw.githubusercontent.com/JacobSandbox/ClownAroundGamesDatabase/main/data/news/";

    // Parse item data
    let items = JSON.parse(props.items);
    let gap = 0;
    if ( props.gap !== undefined ) {
        gap = parseInt(props.gap);
    }

    //let reelSize = (props.size > window.innerWidth ? window.innerWidth : props.size) + "px";

    return (
        <div className="reel" style={{gap:gap+"px"}/*, width:reelSize, height:reelSize}*/}>
            {items.map( (item, index)=> {
                let baseOffset = `${-props.slide*100}%`;
                let gapOffset  = `${-props.slide*gap}px`;
                let offset     = `calc(${baseOffset} + ${gapOffset})`;
                return <Link to={item.url} key={index} className="reel-item" style={{left:offset}}>
                    <img 
                        className="reel-image"
                        src={dataPath+item.image}
                        alt={item.desc}
                    />
                </Link>;
            })}
        </div>
    )
}

export default Reel;
