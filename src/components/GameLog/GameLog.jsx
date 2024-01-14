/* eslint-disable react/prop-types */
export default function GameLog({ gameTurns }) {
  return (
    <section className="game-logs">
      {gameTurns.map((turn) => (
        <p
          key={`${turn.clickedSquare.row},${turn.clickedSquare.col}`}
        >{`${turn.player} has selected ${turn.clickedSquare.row},${turn.clickedSquare.col}`}</p>
      ))}
    </section>
  );
}
