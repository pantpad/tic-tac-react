/* eslint-disable react/prop-types */
export default function GameOver({ winner, onRestart }) {
  return (
    <div className="game-over">
      <h1>GAME OVER!</h1>
      {winner ? <p>{winner.name} WON</p> : <p>DRAW!</p>}
      <button className="reset-btn" onClick={onRestart}>
        Restart
      </button>
    </div>
  );
}
