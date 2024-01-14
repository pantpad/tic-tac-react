import "./App.css";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winningCombinations";
import Player from "./components/Player/Player";
import GameBoard from "./components/GameBoard/GameBoard";
import GameLog from "./components/GameLog/GameLog";
import GameOver from "./components/GameOver/GameOver";

const PLAYERS = [
  { name: "PLAYER1", symbol: "X" },
  { name: "PLAYER2", symbol: "O" },
];

const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function checkWinner(gameBoard, players) {
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
      winner = players.find((player) => player.symbol == firstSquare);
    }
  }
  return winner;
}

function getBoardFromTurns(gameTurns) {
  let gameBoard = [...initialGameboard.map((row) => [...row])];

  for (const turn of gameTurns) {
    const { clickedSquare, player } = turn;
    const { row, col } = clickedSquare;
    gameBoard[row][col] = player;
  }

  return gameBoard;
}

function getActivePlayerFromPrevTurn(gameTurns) {
  console.log(gameTurns);
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  const gameBoard = getBoardFromTurns(gameTurns);
  const activePlayer = getActivePlayerFromPrevTurn(gameTurns);
  const winner = checkWinner(gameBoard, players);
  const hasDraw = gameTurns.length == 9 && !winner;

  function handleSquareClick(rowIndex, colIndex) {
    setGameTurns((prevGameTurns) => {
      if (winner) return [...prevGameTurns];
      const newGameTurns = [
        {
          clickedSquare: { row: rowIndex, col: colIndex },
          player: getActivePlayerFromPrevTurn(prevGameTurns),
        },
        ...prevGameTurns.map((turn) => ({ ...turn })),
      ];
      return newGameTurns;
    });
  }

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
    setGameTurns([]);
  }

  return (
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
        <GameBoard
          gameBoard={gameBoard}
          onChange={handleSquareClick}
          winner={winner}
        />
      </section>
      {winner || hasDraw ? (
        <GameOver winner={winner} onRestart={resetGame} />
      ) : (
        ""
      )}
      <GameLog resetGame={resetGame} gameTurns={gameTurns} />
    </main>
  );
}

export default App;
