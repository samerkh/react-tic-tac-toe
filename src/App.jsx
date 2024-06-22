import React, { useState } from "react";
import GameBoard from "./components/GameBoard/GameBoard";
import GameOver from "./components/GameOver/GameOver";
import Log from "./components/Log/Log";
import Player from "./components/Player/Player";

import { PLAYERS } from "./core/constants";
import { getActivePlayer, getBoard, getWinner } from "./core/helper-functions";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYERS);

  const board = getBoard(gameTurns);
  const currentPlayer = getActivePlayer(gameTurns);
  const winner = getWinner(board, players);
  const isDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(i, j) {
    setGameTurns((turns) => {
      const player = getActivePlayer(turns);

      return [{ player, square: { row: i, col: j } }, ...turns];
    });
  }

  function handleRematch() {
    setGameTurns([]);
  }

  function handleNameChange(symbol, name) {
    setPlayers((players) => {
      return { ...players, [symbol]: name };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          {Object.entries(players).map(([symbol, name]) => (
            <Player
              key={symbol}
              initialName={name}
              symbol={symbol}
              isActive={currentPlayer === symbol}
              onNameChange={handleNameChange}
            />
          ))}
        </ol>
        {(winner || isDraw) && (
          <GameOver winner={winner} onRematchClick={handleRematch} />
        )}
        <GameBoard onSquareClick={handleSelectSquare} board={board} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
