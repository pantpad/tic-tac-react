/* eslint-disable react/prop-types */
export default function GameLog({ gameTurns, resetGame }) {
  return (
    <section className="game-logs">
      {gameTurns.map((turn) => (
        <p
          key={`${turn.clickedSquare.row},${turn.clickedSquare.col}`}
        >{`${turn.player} has selected ${turn.clickedSquare.row},${turn.clickedSquare.col}`}</p>
      ))}
      <button className="reset-btn" onClick={resetGame}>
        RESET GAME
      </button>
    </section>
  );
}
