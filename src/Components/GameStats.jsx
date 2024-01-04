// Game stats/buy button display
import GenreIcon from "./GenreIcon";
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

            <div className="game-stats-genres">
                {props.genres.map( genre => {
                    return <GenreIcon genre={genre} />
                })}
            </div>

            <div className="game-stats-label game-stats-players">
                <p>{props.meta.players + " players"}</p>
            </div>

            <div className="game-stats-label game-stats-duration">
                <p>{{s:" <15'", m:"15-30'", l:">30'"}[props.meta.duration]}</p>
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