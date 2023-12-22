// Card for displaying library items
import "./styles/GameCard.css";

function GameCard ( props ) {
    return (
        <div class="game-card">
            <div class="game-card-image">
                <img src="https://picsum.photos/200" alt="box art" />
            </div>
            <div class="game-card-body"></div>
            <div class="game-card-title">
                <p>test text for formatting</p>
            </div>
            <div class="game-card-icon"></div>
            <div class="game-card-shout">
                <p>Im shoutinG</p>
            </div>
        </div>
    );
}

export default GameCard;