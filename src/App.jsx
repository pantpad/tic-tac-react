import "./App.css";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winningCombinations";
import Player from "./components/Player/Player";
import GameBoard from "./components/GameBoard/GameBoard";
import GameLog from "./components/GameLog/GameLog";

const PLAYERS = [
  { name: "PLAYER1", symbol: "X" },
  { name: "PLAYER2", symbol: "O" },
];

const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function checkWinner(gameBoard) {
  let winner;
  for (const combo of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combo[0].row][combo[0].column];
    const secondSquare = gameBoard[combo[1].row][combo[1].column];
    const thirdSquare = gameBoard[combo[2].row][combo[2].column];

    if (
      firstSquare &&
      firstSquare === secondSquare &&
      firstSquare === thirdSquare
    ) {
      winner = firstSquare;
    }
  }
  return winner;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameBoard, setGameBoard] = useState(initialGameboard);
  const [gameTurns, setGameTurns] = useState([]);
  const winner = checkWinner(gameBoard);

  function handleSquareClickTurns(rowIndex, colIndex) {
    setGameTurns((prevGameTurns) => {
      if (winner) return [...prevGameTurns];
      const newGameTurns = [
        {
          clickedSquare: { row: rowIndex, col: colIndex },
          player: activePlayer,
        },
        ...prevGameTurns.map((turn) => ({ ...turn })),
      ];
      return newGameTurns;
    });
  }

  function handleSquareClick(rowIndex, colIndex) {
    setGameBoard((prevBoard) => {
      if (winner) return [...prevBoard];
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
    setPlayers(PLAYERS);
    setGameBoard(initialGameboard);
    setActivePlayer("X");
  }

  return (
    <>
      <main>
        <section className="game-container">
          <div className="players-container">
            <Player
              isActive={activePlayer}
              {...players[0]}
              onSave={changePlayers}
            />
            <Player
              isActive={activePlayer}
              {...players[1]}
              onSave={changePlayers}
            />
          </div>
          <GameBoard gameBoard={gameBoard} onChange={handleSquareClick} />
        </section>
        {winner && <h1>there is a winner</h1>}
        <GameLog resetGame={resetGame} />
      </main>
    </>
  );
}

export default App;
