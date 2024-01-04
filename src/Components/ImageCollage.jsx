// Image collage widget

import "./styles/ImageCollage.css";

function ImageCollage ( props ) {
    let pics = {setup:"",zoom:"",action:"",detail:""};
    if (props.imageData !== undefined)
        pics = JSON.parse(props.imageData);
    
    return (
        <div className="collage-container" onLoad={()=>{console.log("loaded collage....");}}>
            <div className="collage-img collage-setup">
                <img src={pics.setup} alt="Game setup" />
            </div>
            <div className="collage-img collage-zoom">
                <img src={pics.zoom} alt="Close up of game pieces" />
            </div>
            <div className="collage-inner">
                <div className="collage-img collage-action">
                    <img src={pics.action} alt="Game in mid-play" />
                </div>
                <div className="collage-img collage-detail">
                    <img src={pics.detail} alt="Close up of game art" />
                </div>
            </div>
        </div>
    );
}

export default ImageCollage;