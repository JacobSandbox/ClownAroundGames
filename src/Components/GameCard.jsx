// Card for displaying library items
import GenreIcon from "./GenreIcon";
import { Link } from "react-router-dom";
import "./styles/GameCard.css";

function GameCard ( props ) {
    return (
        <Link to={`/detail/${props.databaseId}`}> <div className="game-card">
            <div className="game-card-image">
                <img src={props.boxart} alt="Box art" />
            </div>
            <div className="game-card-body"></div>
            <div className="game-card-title">
                <p>{props.title}</p>
            </div>
            <GenreIcon genre={props.genre}/>
            <div className="game-card-shout">
                <p>{props.shoutText}</p>
            </div>
        </div></Link>
    );
}

export default GameCard;