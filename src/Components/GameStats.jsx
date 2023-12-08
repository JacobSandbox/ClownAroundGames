// Game stats/buy button display
import "./styles/GameStats.css";

function GameStats() {
    return (
        <div class="game-stats-container">

            <p class="game-stats-title">
                Game Title
            </p>

            <div class="game-stats-btn game-stats-number">
                <p>Plrs</p>
            </div>

            <div class="game-stats-btn game-stats-time">
                <p>Time</p>
            </div>

            <div class="game-stats-btn game-stats-genre">
                <p>Genre</p>
            </div>

            <p className="game-stats-label">--{'>'}</p>

            <div class="game-stats-purchase-container">
                <div class="game-stats-purchase">
                    <p>Buy at </p>
                </div>
            </div>
        </div>
    );
}

export default GameStats;