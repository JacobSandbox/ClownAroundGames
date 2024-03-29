// Game stats/buy button display
import GenreIcon from "./GenreIcon";
import "./styles/GameStats.css";

function GameStats ( props ) {
    return (
        <div className="game-stats-container">

            <div className="game-stats-genres">
                {props.genres.map( (genre, index) => {
                    return <GenreIcon key={index} genre={genre} showLabel="true" />
                })}
            </div>

            <div className="game-stats-label game-stats-players">
                <p>{props.players + " players"}</p>
            </div>

            <div className="game-stats-label game-stats-duration">
                <p>{{s:" <15'", m:"15-30'", l:">30'"}[props.duration]}</p>
            </div>

            <div className="game-stats-icon"></div>

            <div className="game-stats-purchase-container">
                <a href={props.url} target="_blank" rel="noreferrer">
                    <div className="game-stats-purchase">
                        <p>Buy at</p>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default GameStats;