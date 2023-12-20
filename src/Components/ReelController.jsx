import React from "react";
import "./styles/ReelController.css";

function ReelController ( props ) {
    const [progress, setProgress] = React.useState(0);

    function changeProgress ( amount ) {
        let newPro = progress+amount;
        if ( newPro < 0 ) newPro = props.steps - 1;
        if ( newPro >= props.steps ) newPro = 0;
        setProgress(newPro);
        props.hook(newPro);
    }

    React.useEffect(()=> {
        if ( props.interval !== undefined ) {
            console.log("got here");
            const ID = setInterval(()=>{changeProgress(1)}, parseInt(props.interval));
            return ()=>{clearInterval(ID);};
        }
    });

    return <div className="reel-controller">
        <div className="reel-control-button reel-control-left" onClick={()=>{changeProgress(-1);}}></div>
        <div className="reel-control-progress-bar-track">
            <div
                className="reel-control-progress-bar"
                style={{width:(100/props.steps) + "%",
                        left:(progress/(props.steps))*100 + "%"}}>
            </div>
        </div>
        <div className="reel-control-button reel-control-right" onClick={()=>{changeProgress(1);}}></div>
    </div>;
}

export default ReelController;