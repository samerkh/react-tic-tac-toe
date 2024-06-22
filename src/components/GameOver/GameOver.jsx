import React from "react";

export default function GameOver({ winner, onRematchClick }) {
  const gameOverStatement = winner ? (
    <p>{winner} wins!</p>
  ) : (
    <p>It&apos;s a draw!</p>
  );

  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {gameOverStatement}
      <p>
        <button onClick={onRematchClick}>Rematch</button>
      </p>
    </div>
  );
}
