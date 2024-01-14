import "./App.css";
import { useState } from "react";
import Player from "./components/Player/Player";

const PLAYERS = [
  { name: "PLAYER1", symbol: "X" },
  { name: "PLAYER2", symbol: "O" },
];

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  function changePlayers(newName, playerSymbol) {
    setPlayers((prevPlayers) => {
      return [
        ...prevPlayers.map((player) => {
          if (player.symbol === playerSymbol) {
            return { ...player, name: newName.toUpperCase() };
          } else {
            return { ...player };
          }
        }),
      ];
    });
  }

  function resetGame() {
    console.log("Game Will Be RESET!");
    setPlayers(PLAYERS);
  }

  return (
    <>
      <main>
        <section className="game-container">
          <div className="players-container">
            <Player {...players[0]} onSave={changePlayers} />
            <Player {...players[1]} onSave={changePlayers} />
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
          <button onClick={resetGame}>RESET GAME</button>
        </section>
      </main>
    </>
  );
}

export default App;
