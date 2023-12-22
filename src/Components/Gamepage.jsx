// Game page
// page to display game info

import GameStats from "./GameStats";
import Header from "./Header";
import Footer from "./Footer";
import ImageCollage from "./ImageCollage";
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

function Gamepage ( props ) {
    
    // Parse JSON game data
    if ( props.gameData === undefined ) return <h1>ERROR: NO GAME DATA SUPPLIED</h1>
    let info = JSON.parse(props.gameData);
    let desc = info.content.description.split(" ");

    // Generate page from data
    return (
        <div className="gamepage-root">
            <Header menuItems={["Home", "About", "Contact"]} />
            <div className="gamepage-body global-content-box">
                <h1 className="gamepage-title">{info.title}</h1>
                <div className="gamepage-top">
                    <ImageCollage imageData={imageData} />
                    <GameStats meta={info.metadata}/>
                </div>
                <div className="gamepage-bottom">
                    <p className="gamepage-headline">{desc[0]}</p>
                    <p className="gamepage-content">{desc.slice(1, -1).join(" ")}</p>
                    <p> <br /> DOCUMENTS <hr /> links...</p>
                    <p className="gamepage-credits">
                        CREDITS
                        <br/>
                        <hr />
                        {
                            (info.credits.design === info.credits.art) ?
                                <p>Art and Design by {info.credits.design}</p> :
                                <p>Game Design by {info.credits.design}<br /> Art by {info.credits.art}</p>
                        }
                        Released {info.credits.year}
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Gamepage;