import React, { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onNameChange,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  let playerEditiableName = isEditing ? (
    <input type="text" value={playerName} onChange={handleChange} />
  ) : (
    <span className="player-name">{playerName}</span>
  );

  const buttonLabel = isEditing ? "Save" : "Edit";

  function handleClick() {
    setIsEditing((editing) => !editing); // use function to get the actual value at this point of execution
    if (!isEditing) {
      onNameChange(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {playerEditiableName}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{buttonLabel}</button>
    </li>
  );
}
