import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((lastEditing) => !lastEditing);
  }

  function handlePlayerNameChange(e) {
    setPlayerName(e.target.value);
  }

  let editablePlayerName = isEditing ? 
  <input type="text" required className="player-name" value={playerName} onChange={handlePlayerNameChange}></input> : 
  <span className="player-name">{playerName}</span>;  
  let buttonLabel = isEditing ? "Save" : "Edit";

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonLabel}</button>
    </li>
  );
}
