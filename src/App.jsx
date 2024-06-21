import { useState } from "react";
import GameBoard from "./components/GameBoard/GameBoard";
import Log from "./components/Log/Log";
import Player from "./components/Player/Player";

function getActivePlayer(turns) {
  return turns.length % 2 === 0 ? "X" : "O";
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const currentPlayer = getActivePlayer(gameTurns);

  function handleSelectSquare(i, j) {
    setGameTurns((turns) => {
      const player = getActivePlayer(turns);

      return [{ player, square: { row: i, col: j } }, ...turns];
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="player1"
            symbol="X"
            isActive={currentPlayer === "X"}
          />
          <Player
            initialName="player2"
            symbol="O"
            isActive={currentPlayer === "O"}
          />
        </ol>
        <GameBoard onSquareClick={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
