import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function onSave() {
    const input = document.querySelector("input");
    setPlayerName(input.value);
    setIsEditing(false);
  }

  function onEdit() {
    setIsEditing(true);
  }

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input type="text" defaultValue={playerName} />
        ) : (
          <span className="player-name">{playerName}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={isEditing ? onSave : onEdit}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
