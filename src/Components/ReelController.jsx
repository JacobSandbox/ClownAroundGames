import React from "react";
import "./styles/ReelController.css";

function ReelController ( props ) {
    const [progress, setProgress] = React.useState(0);

    function changeProgress ( amount ) {
        let newPro = progress+amount;
        if ( newPro < 0 ) newPro = props.steps - 1;
        if ( newPro >= props.steps ) newPro = 0;
        setProgress(newPro);
    }

    return <div className="reel-controller">
        <div id="left-button" className="control-button" onClick={()=>{changeProgress(-1);}}></div>
        <div className="progress-bar-track">
            <div
                className="progress-bar"
                style={{width:(100/props.steps) + "%",
                        left:(progress/(props.steps))*100 + "%"}}>
            </div>
        </div>
        <div id="right-button" className="control-button" onClick={()=>{changeProgress(1);}}></div>
    </div>;
}

export default ReelController;