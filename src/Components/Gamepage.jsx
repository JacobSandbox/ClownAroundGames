// Game page
// page to display game info

import GameStats from "./GameStats";
import Header from "./Header";
import Footer from "./Footer";
import ImageCollage from "./ImageCollage";
// import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./styles/Gamepage.css"

var imageData = '{"setup":"https://picsum.photos/400","zoom":"https://picsum.photos/300","action":"https://picsum.photos/200","detail":"https://picsum.photos/100"}';
// var imageData = '{"setup":"","zoom":"","action":"","detail":""}';

// Props format
/*
{
    "photos" : {
        "path" : string ('./path/name... etc'  4 photos named 'setup.png', 'zoom.png', 'action.png', 'detail.png')
    },

    "title" : string,

    "metadata" : {
        "players" : string,
        "time" : number,
        "genre" : string
    },

    "content" : {
        "description" : string,
        "documents" : [string]
    },

    "credits" : {
        "design" : string,
        "art" : string,
        "year" : number
    }
}
*/

function Gamepage(props) {

    // Use state
    const [usInfo, setInfo] = useState({title:"MISSINGBASE"});

    let dbInfo = null;

    // useEffect(() => {
    //     fetch("http://localhost:3001").then( response => {
    //         dbInfo = response.json().then( final => {
    //             setInfo({title: final[0].title});
    //             document.getElementsByClassName("gamepage-body")[0].style.opacity = 1;
    //         });
    //     }).catch(() => {
    //         console.log("failure");
    //     });
    // },[]);

    
    if (dbInfo === null) {
        dbInfo = {id:0,title:"MISSING",genre:"NOGENRE",playTime:"S",players:"0-0"};
    }

    // url params test
    // const { name } = useParams();

    // Parse JSON game data
    if ( props.gameData === undefined ) return <h1>ERROR: NO GAME DATA SUPPLIED</h1>
    let info = JSON.parse(props.gameData);
    let desc = info.content.description.split(" ");

    // Generate page from data
    return (
        <div className="gamepage-root">
            <Header menuItems={["Games", "Home", "About", "Contact"]} />
            <div className="gamepage-body global-content-box">
                <h1 className="gamepage-title">{usInfo.title}</h1>
                <div className="gamepage-top">
                    <ImageCollage imageData={imageData} />
                    <GameStats meta={info.metadata} />
                </div>
                <div className="gamepage-bottom">
                    <p className="gamepage-headline">{desc[0]}</p>
                    <p className="gamepage-content">{desc.slice(1, -1).join(" ")}</p>
                    <div> <br /> DOCUMENTS <hr /> links...</div>
                    <div className="gamepage-credits">
                        CREDITS
                        <br />
                        <hr />
                        {
                            (info.credits.design === info.credits.art) ?
                                <p>Art and Design by {info.credits.design}</p> :
                                <p>Game Design by {info.credits.design}<br /> Art by {info.credits.art}</p>
                        }
                        Released {info.credits.year}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Gamepage;