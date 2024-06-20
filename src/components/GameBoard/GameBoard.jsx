const initialBoard = Array(3).fill(Array(3).fill(null));

export default function GameBoard() {
  return (
    <ol id="game-board">
      {initialBoard.map((row, i) => (
        <li key={i}>
          <ol>
            {row.map((col, j) => (
              <li key={j}>
                <button></button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
