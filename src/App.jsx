import "./App.css";
import Player from "./components/Player/Player";

let players = [
  { name: "PLAYER1", symbol: "X" },
  { name: "PLAYER2", symbol: "O" },
];

function App() {
  return (
    <>
      <main>
        <section className="game-container">
          <div className="players-container">
            <Player {...players[0]} />
            <Player {...players[1]} />
          </div>
          <div className="game-board-container">
            <div className="game-board">
              <button className="squared-button">x</button>
              <button className="squared-button">x</button>
              <button className="squared-button">x</button>
              <button className="squared-button">x</button>
              <button className="squared-button">x</button>
              <button className="squared-button">x</button>
              <button className="squared-button">x</button>
              <button className="squared-button">x</button>
              <button className="squared-button">x</button>
            </div>
          </div>
        </section>
        <section className="game-logs">
          <h1>gameLogs</h1>
        </section>
      </main>
    </>
  );
}

export default App;
