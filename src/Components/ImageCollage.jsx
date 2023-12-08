// Image collage widget

import "./styles/ImageCollage.css";

function ImageCollage ( props ) {
    let pics = {setup:"",zoom:"",action:"",detail:""};
    if (props.imageData !== undefined)
        pics = JSON.parse(props.imageData);
    
    return (
        <div class="collage-container">
            <div class="collage-img collage-setup">
                <img src={pics.setup} alt="Game setup" />
            </div>
            <div class="collage-img collage-zoom">
                <img src={pics.zoom} alt="Close up of game pieces" />
            </div>
            <div class="collage-inner">
                <div class="collage-img collage-action">
                    <img src={pics.action} alt="Game in mid-play" />
                </div>
                <div class="collage-img collage-detail">
                    <img src={pics.detail} alt="Close up of game art" />
                </div>
            </div>
        </div>
    );
}

export default ImageCollage;