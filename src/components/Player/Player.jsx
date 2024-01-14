// eslint-disable-next-line react/prop-types
export default function Player({ name, symbol }) {
  return (
    <>
      <div className="player">
        <span>{name}</span>
        {/* <input type="text" placeholder="player1" /> */}
        <div>
          <p>{symbol}</p>
          <button>Edit</button>
        </div>
      </div>
    </>
  );
}
