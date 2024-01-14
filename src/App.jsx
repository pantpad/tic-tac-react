import "./App.css";

function App() {
  return (
    <>
      <main>
        <section className="game-container">
          <div className="players-container">
            <div className="player">
              <span>player1</span>
              {/* <input type="text" placeholder="player1" /> */}
              <div>
                <p>X</p>
                <button>Edit</button>
              </div>
            </div>
            <div className="player">
              <span>player2</span>
              {/* <input type="text" placeholder="player2" /> */}
              <div>
                <p>O</p>
                <button>Edit</button>
              </div>
            </div>
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
