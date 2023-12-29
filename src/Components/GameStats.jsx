// Game stats/buy button display
import "./styles/GameStats.css";

// Props
/*
    "metadata" : {
        "players" : string,
        "time" : number,
        "genre" : string
    }
*/

function GameStats ( props ) {
    return (
        <div className="game-stats-container">

            <p className="game-stats-title"> text text </p>

            <div className="game-stats-label game-stats-number">
                <p>{props.meta.players}</p>
            </div>

            <div className="game-stats-label game-stats-time">
                <p>{props.meta.time}'</p>
            </div>

            <div className="game-stats-label game-stats-genre">
                <p>{props.meta.genre}</p>
            </div>

            <div className="game-stats-icon"></div>

            <div className="game-stats-purchase-container">
                <a href="http://www.thegamecrafter.com"><div className="game-stats-purchase">
                    <p>Buy at </p>
                </div></a>
            </div>
        </div>
    );
}

export default GameStats;