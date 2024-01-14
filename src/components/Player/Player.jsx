import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Player({ name, symbol, onSave }) {
  const [inputName, setInputName] = useState();
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((prevEdit) => !prevEdit);
    setInputName(name);
  }

  function handleChange(e) {
    setInputName(e.target.value);
  }

  function handleSave() {
    setIsEditing((prevEdit) => !prevEdit);
    onSave(inputName, symbol);
  }

  //prettier-ignore
  let playerSection = !isEditing ? <span>{name}</span> : <input type="text" value={inputName} onChange={handleChange} required/>;

  //prettier-ignore
  let buttonSection = !isEditing ? <button onClick={handleEditClick}>Edit</button> : <button onClick={handleSave}>Save</button>;

  return (
    <>
      <div className="player">
        {playerSection}
        <div>
          <p>{symbol}</p>
          {buttonSection}
        </div>
      </div>
    </>
  );
}
