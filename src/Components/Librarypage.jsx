// Game library browser page
import React from "react"
import Header from "./Header";
import Footer from "./Footer";
import GameCard from "./GameCard";
import "./styles/Librarypage.css"

function Librarypage() {
    return (
        <div className="library-root">
            <Header menuItems={["Home", "About", "Contact"]} />
            <div className="library-content global-content-box">
                <div className="library-controls">-
                    <span>
                        <label className="library-label" for="library-type">Type</label>
                        <select className="library-select-type" name="library-type">
                            <option value="any">Any</option>
                            <option value="card">Card game</option>
                            <option value="dice">Dice game</option>
                            <option value="board">Board game</option>
                        </select>
                    </span>

                    <span>
                        <label className="library-label" for="library-genre">Genre</label>
                        <select className="library-select-genre" name="library-genre">
                            <option value="any">Any</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="strategy">Strategy</option>
                            <option value="action">Action</option>
                        </select>
                    </span>

                    <span>
                        <label className="library-label" for="library-players">Players</label>
                        <select className="library-select-players" name="library-players">
                            <option value="any">Any</option>
                            <option value="1-4">1-4</option>
                            <option value="2-4">2-4</option>
                            <option value="3-5">3-5</option>
                        </select>
                    </span>

                    <span>
                        <label className="library-label" for="library-time">Time</label>
                        <select className="library-select-time" name="library-time">
                            <option value="any">Any</option>
                            <option value="short">Under 15 mins</option>
                            <option value="average">15-30 mins</option>
                            <option value="long">Over 30 mins</option>
                        </select>
                    </span>
                    -
                </div>

                <div className="library-browser">
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Librarypage;