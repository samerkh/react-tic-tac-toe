import React from "react";

export default function GameBoard({ onSquareClick, board }) {
  return (
    <ol id="game-board">
      {board.map((row, i) => (
        <li key={i}>
          <ol>
            {row.map((col, j) => (
              <li key={j}>
                <button
                  onClick={() => onSquareClick(i, j)}
                  disabled={board[i][j] !== null}
                >
                  {board[i][j]}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
