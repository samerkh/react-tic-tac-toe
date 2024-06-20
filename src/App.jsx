import GameBoard from "./components/GameBoard/GameBoard";
import Player from "./components/Player/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="player1" symbol="X" />
          <Player initialName="player2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  );
}

export default App;
