// Genre icon component
import actionIcon from "./images/action_icon.png";
import strategyIcon from "./images/strategy_icon.png";
import fantasyIcon from "./images/fantasy_icon.png";
import coopIcon from "./images/co-op_icon.png";
import horrorIcon from "./images/horror_icon.png";
import historicalIcon from "./images/historical_icon.png";
import cardIcon from "./images/card_icon.png";
import "./styles/GenreIcon.css";

const icons = {
    action: actionIcon,
    strategy: strategyIcon,
    fantasy: fantasyIcon,
    coop: coopIcon,
    horror: horrorIcon,
    historical: historicalIcon,
    card: cardIcon
};

function GenreIcon ( props ) {
    return (
        <div className="genre-icon">
            <img className="genre-icon-image" src={(props.genre !== undefined) ? icons[props.genre] : null} title={props.genre}  alt={`${props.genre} game`} />
            {(props.showLabel !== undefined) ? <p className="genre-label" style={{fontSize:Math.min(6/props.genre.length,1) + "rem"}}>{props.genre}</p> : null}
        </div>
    );
}

export default GenreIcon;