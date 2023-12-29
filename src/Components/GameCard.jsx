// Card for displaying library items
import { Link } from "react-router-dom";
import "./styles/GameCard.css";

function GameCard ( props ) {
    return (
        <Link to="/detail/name"> <div className="game-card">
            <div className="game-card-image">
                <img src={props.boxart} alt="Box art" />
            </div>
            <div className="game-card-body"></div>
            <div className="game-card-title">
                <p>{props.gameTitle}</p>
            </div>
            <div className="game-card-icon" style={(props.genre !== undefined) ? {backgroundImage:`url(${props.genre})`} : {}}></div>
            <div className="game-card-shout">
                <p>{props.shoutText}</p>
            </div>
        </div></Link>
    );
}

export default GameCard;