// Game library browser page
import React, { useEffect, useState } from "react"
import Header from "./Header";
import Footer from "./Footer";
import GameCard from "./GameCard";
import "./styles/Librarypage.css";

// Database urls
const dataURL  = "https://raw.githubusercontent.com/JacobSandbox/ClownAroundGamesDatabase/main/data/";

// Filter functions
function sortLibrary ( items, func ) {
    // Sort library items with supplied function
    let sortedItems = items.sort(func);

    // Get game card elements
    let cards = document.getElementsByClassName("game-card");
}

var libraryData = null;

function Librarypage() {
    let metadata = {type:"board",genre:"fantasy",players:"2-4",time:"short"};

    var [hasData, setHasData] = useState(false);

    // Fetch game library info from database
    useEffect( () => {
        fetch(dataURL+"games.json")
        .then( response => {
            response.json().then( result => {
                libraryData = result;
                setHasData(true);
            });
        }).catch( () => {
            throw new TypeError("Response is null...");
        });
    }, []);

    return (
        <div className="library-root">
            <Header menuItems={["Home", "About", "Contact"]} />
            <div className="library-content global-content-box">
                <div className="library-controls">-
                    <span>
                        <label className="library-label" htmlFor="library-type">Type</label>
                        <select className="library-select-type" id="library-type">
                            <option value="any">Any</option>
                            <option value="card">Card game</option>
                            <option value="dice">Dice game</option>
                            <option value="board">Board game</option>
                        </select>
                    </span>

                    <span>
                        <label className="library-label" htmlFor="library-genre">Genre</label>
                        <select className="library-select-genre" id="library-genre">
                            <option value="any">Any</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="strategy">Strategy</option>
                            <option value="action">Action</option>
                        </select>
                    </span>

                    <span>
                        <label className="library-label" htmlFor="library-players">Players</label>
                        <select className="library-select-players" id="library-players">
                            <option value="any">Any</option>
                            <option value="1-4">1-4</option>
                            <option value="2-4">2-4</option>
                            <option value="3-5">3-5</option>
                        </select>
                    </span>

                    <span>
                        <label className="library-label" htmlFor="library-time">Time</label>
                        <select className="library-select-time" id="library-time">
                            <option value="any">Any</option>
                            <option value="short">Under 15 mins</option>
                            <option value="average">15-30 mins</option>
                            <option value="long">Over 30 mins</option>
                        </select>
                    </span>
                    -
                </div>

                <div className="library-browser">
                    {(hasData === true) ? libraryData.map( game => {
                        return <GameCard key={game.id} databaseId={game.databaseId} boxart={dataURL+"games/"+game.databaseId+"/"+game.boxart} title={game.title} genre={game.genre} shoutText={game.shout} />
                    })  : <div className="global-loading">?</div>}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Librarypage;