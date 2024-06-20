import { useState } from "react";
import GameBoard from "./components/GameBoard/GameBoard";
import Player from "./components/Player/Player";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");

  function handleSelectSquare() {
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
        <GameBoard
          onSquareClick={handleSelectSquare}
          currentPlayer={currentPlayer}
        />
      </div>
      LOG
    </main>
  );
}

export default App;
