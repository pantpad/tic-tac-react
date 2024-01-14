import "./App.css";
import { useState } from "react";
import Player from "./components/Player/Player";
import GameBoard from "./components/GameBoard/GameBoard";

const PLAYERS = [
  { name: "PLAYER1", symbol: "X" },
  { name: "PLAYER2", symbol: "O" },
];

const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameBoard, setGameBoard] = useState(initialGameboard);

  function handleSquareClick(rowIndex, colIndex) {
    setGameBoard((prevBoard) => {
      const newBoard = [...prevBoard.map((row) => [...row])];
      newBoard[rowIndex][colIndex] = activePlayer;
      return newBoard;
    });
    setActivePlayer((prevPlayer) => {
      if (prevPlayer === "O") {
        return "X";
      } else {
        return "O";
      }
    });
  }

  // for (const turn of gameTurns) {
  //   const { square, player } = turn;
  //   const { row, col } = square;
  //   gameBoard[row][col] = player;
  // }

  // function handleSquareClick(rowIndex,colIndex) {
  //   setGameTurns((prevTurns) => {
  //     return [...prevTurns.map((turn) => {
  //       return {
  //         square:{},
  //       ...turn}
  //     })];
  //   });
  // }

  // `gameTurns = [
  //   {
  //     square: {row: rowIndex,col: colIndex},
  //     player: x/o
  //   }
  // ]`;

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
    setGameBoard(initialGameboard);
  }

  return (
    <>
      <main>
        <section className="game-container">
          <div className="players-container">
            <Player {...players[0]} onSave={changePlayers} />
            <Player {...players[1]} onSave={changePlayers} />
          </div>
          <GameBoard gameBoard={gameBoard} onChange={handleSquareClick} />
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
