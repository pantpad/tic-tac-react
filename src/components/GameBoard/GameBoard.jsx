/* eslint-disable react/prop-types */
export default function GameBoard({ gameBoard, onChange, winner }) {
  return (
    <>
      <div className="game-board-container">
        <div className="game-board">
          {gameBoard.map((row, rowIndex) =>
            row.map((col, colIndex) => {
              return (
                <button
                  key={`${rowIndex},${colIndex}`}
                  className="squared-button"
                  onClick={() => onChange(rowIndex, colIndex)}
                  disabled={col || winner}
                >
                  {col}
                </button>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
