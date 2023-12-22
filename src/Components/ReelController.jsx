import React from "react";
import "./styles/ReelController.css";

function ReelController ( props ) {
    const [progress, setProgress] = React.useState(0);

    function handleClick ( dir ) {
        // Reset animation of progress bar
        // console.log("click");
        // let bar = document.getElementsByClassName("reel-control-progress-bar")[0];
        // console.log(bar);
        // bar.style.animationDuration = "none";
        // bar.style.animationDuration = "";
        // Change progress variable
        changeProgress(dir)
    }

    function changeProgress ( amount ) {
        // Move to slide in given direction
        let newPro = progress+amount;
        if ( newPro < 0 ) newPro = props.steps - 1;
        if ( newPro >= props.steps ) newPro = 0;
        setProgress(newPro);
        props.hook(newPro);
    }

    React.useEffect(()=> {
        // Start timer to automatically change to next slide
        if ( props.interval !== undefined ) {
            const ID = setInterval(()=>{changeProgress(1)}, parseInt(props.interval)*1000);
            return ()=>{clearInterval(ID);};
        }
    });

    return <div className="reel-controller">
        <div className="reel-control-button reel-control-left" onClick={()=>{handleClick(-1);}}></div>
        <div className="reel-control-progress-bar-track">
            <div
                className="reel-control-progress-bar"
                style={{width:(100/props.steps) + "%",
                        left:(progress/(props.steps))*100 + "%",
                        animationDuration: `${props.interval}s`}}>
            </div>
        </div>
        <div className="reel-control-button reel-control-right" onClick={()=>{handleClick(1);}}></div>
    </div>;
}

export default ReelController;