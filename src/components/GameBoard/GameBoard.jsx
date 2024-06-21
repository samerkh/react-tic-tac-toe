import React from "react";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSquareClick, turns }) {
  let board = initialBoard;
  if (turns.length > 0) {
    turns.forEach((turn) => {
      const [i, j] = [turn.square.row, turn.square.col];
      board[i][j] = turn.player;
    });
  }

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
