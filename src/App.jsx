import { useState } from "react";
import GameBoard from "./components/GameBoard/GameBoard";
import Log from "./components/Log/Log";
import Player from "./components/Player/Player";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(i, j) {
    setGameTurns((turns) => [
      { player: currentPlayer, square: { row: i, col: j } },
      ...turns,
    ]);
    setCurrentPlayer((player) => (player === "X" ? "O" : "X"));
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
