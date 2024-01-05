// Game page
// page to display game info

import GameStats from "./GameStats";
import Header from "./Header";
import Footer from "./Footer";
import ImageCollage from "./ImageCollage";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./styles/Gamepage.css"

var imageData = '{"setup":"https://picsum.photos/400","zoom":"https://picsum.photos/300","action":"https://picsum.photos/200","detail":"https://picsum.photos/100"}';

const dataURL  = "https://raw.githubusercontent.com/JacobSandbox/ClownAroundGamesDatabase/main/data/games/";
const assetURL = "https://raw.githubusercontent.com/JacobSandbox/ClownAroundGamesDatabase/main/assets/";


var gameData = null;

function Gamepage ( props ) {

    // Use state
    const [hasData, setHasData] = useState(false);

    // URL params
    const { gameId } = useParams();
    console.log("id == ", gameId);

    let images

    // Effect
    useEffect( () => {
        // Fetch game data
        fetch( dataURL + gameId + ".json" )
        .then( response => {
            // Parse JSON from data
            response.json()
            .then ( result => {
                // Store data and set flag
                gameData = result;
                setHasData(true);
            });
        });
    });

    // Generate page from data
    return (
        <div className="gamepage-root">
            <Header menuItems={["Games", "Home", "About", "Contact"]} />
            {(hasData === true) ? 
                <div className="gamepage-body global-content-box">
                    <h1 className="gamepage-title">{gameData.title}</h1>
                    <div className="gamepage-top">
                        <ImageCollage imageData={{
                                            setup:assetURL+gameData.images.setup,
                                            zoom:assetURL+gameData.images.zoom,
                                            action:assetURL+gameData.images.action,
                                            detail:assetURL+gameData.images.detail
                                            }} />
                        <GameStats meta={{genres:gameData.genres, players:gameData.players, duration:gameData.duration}} genres={gameData.genres} />
                    </div>
                    <div className="gamepage-bottom">
                        <p className="gamepage-headline">{gameData.description.slice(0, gameData.description.indexOf(" "))}</p>
                        <p className="gamepage-content">{gameData.description.slice(gameData.description.indexOf(" "))}</p>
                        <div> <br /> DOCUMENTS <hr /> links...</div>
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
                    </div>
                </div>
                :
                <div className="global-loading">?</div>
            }
            <Footer />
        </div>
    );
}

export default Gamepage;