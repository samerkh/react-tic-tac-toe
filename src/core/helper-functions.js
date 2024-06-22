import { INITIAL_BOARD, WINNING_COMBINATIONS } from "./constants";

export function getActivePlayer(turns) {
  return turns.length % 2 === 0 ? "X" : "O";
}

export function getWinner(board, players) {
  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination;
    if (
      board[a.row][a.col] &&
      board[a.row][a.col] === board[b.row][b.col] &&
      board[a.row][a.col] === board[c.row][c.col]
    ) {
      return players[board[a.row][a.col]];
    }
  }
  return null;
}

export function getBoard(gameTurns) {
  const board = [...INITIAL_BOARD.map((row) => [...row])];

  if (gameTurns.length > 0) {
    gameTurns.forEach((turn) => {
      const [i, j] = [turn.square.row, turn.square.col];
      board[i][j] = turn.player;
    });
  }
  return board;
}
