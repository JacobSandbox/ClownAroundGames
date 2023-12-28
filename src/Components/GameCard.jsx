// Card for displaying library items
import { Link } from "react-router-dom";
import "./styles/GameCard.css";

function GameCard ( props ) {
    return (
        <Link to="/detail"> <div class="game-card">
            <div class="game-card-image">
                <img src={props.boxart} alt="Box art" />
            </div>
            <div class="game-card-body"></div>
            <div class="game-card-title">
                <p>{props.gameTitle}</p>
            </div>
            <div class="game-card-icon" style={(props.genre !== undefined) ? {backgroundImage:`url(${props.genre})`} : {}}></div>
            <div class="game-card-shout">
                <p>{props.shoutText}</p>
            </div>
        </div></Link>
    );
}

export default GameCard;