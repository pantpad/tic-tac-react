/* eslint-disable react/prop-types */
export default function GameLog({ gameTurns, resetGame }) {
  return (
    <section className="game-logs">
      {gameTurns.map((turn) => (
        <span
          key={`${turn.clickedSquare.row},${turn.clickedSquare.col}`}
        >{`${turn.player} has selected ${turn.clickedSquare.row},${turn.clickedSquare.col}`}</span>
      ))}
      <button onClick={resetGame}>RESET GAME</button>
    </section>
  );
}
