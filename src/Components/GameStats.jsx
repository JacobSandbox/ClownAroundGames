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
        <div class="game-stats-container">

            <p class="game-stats-title"> text text </p>

            <div class="game-stats-label game-stats-number">
                <p>{props.meta.players}</p>
            </div>

            <div class="game-stats-label game-stats-time">
                <p>{props.meta.time}'</p>
            </div>

            <div class="game-stats-label game-stats-genre">
                <p>{props.meta.genre}</p>
            </div>

            <div className="game-stats-icon"></div>

            <div class="game-stats-purchase-container">
                <div class="game-stats-purchase">
                    <p>Buy at </p>
                </div>
            </div>
        </div>
    );
}

export default GameStats;