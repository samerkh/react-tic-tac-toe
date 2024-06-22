import React, { useState } from "react";
import GameBoard from "./components/GameBoard/GameBoard";
import GameOver from "./components/GameOver/GameOver";
import Log from "./components/Log/Log";
import Player from "./components/Player/Player";
import { WINNING_COMBINATIONS } from "./winning-combinations";

function getActivePlayer(turns) {
  return turns.length % 2 === 0 ? "X" : "O";
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const currentPlayer = getActivePlayer(gameTurns);

  let winner;

  if (gameTurns.length > 0) {
    gameTurns.forEach((turn) => {
      const [i, j] = [turn.square.row, turn.square.col];
      board[i][j] = turn.player;
    });
  }

  WINNING_COMBINATIONS.forEach((combination) => {
    const [a, b, c] = combination;
    if (
      board[a.row][a.col] &&
      board[a.row][a.col] === board[b.row][b.col] &&
      board[a.row][a.col] === board[c.row][c.col]
    ) {
      winner = board[a.row][a.col];
    }
  });

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
