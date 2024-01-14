export default function GameLog({ resetGame }) {
  return (
    <>
      <section className="game-logs">
        <h1>gameLogs</h1>
        <button onClick={resetGame}>RESET GAME</button>
      </section>
    </>
  );
}
