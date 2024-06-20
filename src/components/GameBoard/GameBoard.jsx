import { useState } from "react";

export default function GameBoard({ onSquareClick, currentPlayer }) {
  const [board, setBoard] = useState(Array(3).fill(Array(3).fill(null)));

  function handleClick(i, j) {
    if (board[i][j] !== null) {
      return;
    }
    setBoard((prevBoard) => {
      const newBoard = prevBoard.map((row) => [...row]);
      newBoard[i][j] = currentPlayer;
      return newBoard;
    });

    onSquareClick(i, j);
  }

  return (
    <ol id="game-board">
      {board.map((row, i) => (
        <li key={i}>
          <ol>
            {row.map((col, j) => (
              <li key={j}>
                <button onClick={() => handleClick(i, j)}>{board[i][j]}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
