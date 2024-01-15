// Game page
// page to display game info

import GameStats from "./GameStats";
import Header from "./Header";
import Footer from "./Footer";
import ImageCollage from "./ImageCollage";
import ResetScroll from "./ResetScroll";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./styles/Gamepage.css"

const dataURL  = "https://raw.githubusercontent.com/JacobSandbox/ClownAroundGamesDatabase/main/data/games/";


var gameData = null;

function Gamepage() {

    // Use state
    const [dataStatus, setDataStatus] = useState(0);

    // URL params
    const { gameId } = useParams();

    // Effect
    useEffect( () => {
        // Fetch game data
        fetch( dataURL + gameId + "/info.json" )
        .then( response => {
            // Check response status
            if ( response.status !== 200 ) {
                // Failed to fetch data
                setDataStatus(2);
            } else {
                // Fetch success
                // Parse JSON from data
                response.json()
                .then ( result => {
                    // Store data and set flag
                    gameData = result;
                    setDataStatus(1);
                });
            }
        });
    });

    // Generate page from data
    return (
        <div className="gamepage-root">
        <ResetScroll />
            <Header menuItems={["Games", "Home", "About", "Contact"]} />
            {/*
                Render branch for found game data 
            */}
            {(dataStatus === 1) ? 
                <div className="gamepage-body global-content-box">
                    <h1 className="gamepage-title">{gameData.title}</h1>
                    <div className="gamepage-top">
                        <ImageCollage imageData={{
                                            setup:`${dataURL+gameId}/${gameData.images.setup}`,
                                            zoom:`${dataURL+gameId}/${gameData.images.zoom}`,
                                            action:`${dataURL+gameId}/${gameData.images.action}`,
                                            detail:`${dataURL+gameId}/${gameData.images.detail}`
                                        }} />
                        <GameStats players={gameData.players}
                                   duration={gameData.duration}
                                   genres={gameData.genres}
                                   url={gameData.purchaseURL} />
                    </div>
                    <div className="gamepage-bottom">
                        <p className="gamepage-headline">{gameData.description.slice(0, gameData.description.indexOf(" "))}</p>
                        <p className="gamepage-content">{gameData.description.slice(gameData.description.indexOf(" "))}</p>
                        { 
                            (gameData.documents !== "none") ?
                            <div>
                                <br />
                                DOCUMENTS
                                <hr />
                                {gameData.documents.map( (doc,index) => {
                                    return <a key={index} className="gamepage-downloads" href={dataURL+gameId+"/"+doc} download>{doc}</a>
                                })}
                            </div>
                            : null
                        }
                        <div className="gamepage-credits">
                            CREDITS
                            <br />
                            <hr />
                            {
                                (gameData.credits.design === gameData.credits.art) ?
                                    <p>Art and Design by {gameData.credits.design}</p> :
                                    <p>Design by {gameData.credits.design}<br /> Art by {gameData.credits.art}</p>
                            }
                            Released {gameData.credits.release}
                        </div>
                        <div className="gamepage-contact-us">
                            <Link to="/contact">Wanna sell our games in your store? Contact us!</Link>
                        </div>
                    </div>
                </div>
                :
                /*
                    Render branch for no game data 
                */
                (dataStatus === 2) ?
                // No data found
                <div className="gamepage-no-data">
                    <p>Sorry! There's no game here...</p>
                    <Link to="/games/all"><button>{"<- back to Games"}</button></Link>
                </div>
                :
                // Fetching data...
                <div className="global-loading">?</div>
            }
            <Footer />
        </div>
    );
}

export default Gamepage;