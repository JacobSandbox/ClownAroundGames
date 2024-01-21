// Image collage widget

import "./styles/ImageCollage.css";

function ImageCollage ( props ) {
    let pics = {setup:"",zoom:"",action:"",detail:""};
    if (props.imageData !== undefined)
        pics = props.imageData;

    function enlargeImage ( url ) {
        document.getElementsByClassName("collage-fullview")[0].style.display = "flex";
        document.getElementById("collage-fullview-img").src = url;
    }

    function closeImage() {
        document.getElementsByClassName("collage-fullview")[0].style.display = "none";
    }
    
    return (
        <div className="collage-container">

            <div className="collage-fullview">
            <button className="collage-fullview-close" onClick={closeImage}>X</button>
                <img id="collage-fullview-img" src="" alt="fullscreen view" />
            </div>

            <div className="collage-img collage-setup">
                <img src={pics.setup} alt="Game setup" onClick={()=>{enlargeImage(pics.setup)}} />
            </div>
            <div className="collage-img collage-zoom">
                <img src={pics.zoom} alt="Close up of game pieces" onClick={()=>{enlargeImage(pics.zoom)}} />
            </div>
            <div className="collage-img collage-action">
                <img src={pics.action} alt="Game in mid-play" onClick={()=>{enlargeImage(pics.action)}} />
            </div>
            <div className="collage-img collage-detail">
                <img src={pics.detail} alt="Close up of game art" onClick={()=>{enlargeImage(pics.detail)}} />
            </div>

        </div>
    );
}

export default ImageCollage;