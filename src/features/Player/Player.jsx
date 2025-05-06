import { useState } from "react";

export default function Player({ name, symbol, ...props }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(!isEditing);
  }

  let playerName = isEditing ? <input type="text" required className="player-name"></input> : <span className="player-name">{name}</span>;  
  let buttonLabel = isEditing ? "Save" : "Edit";
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonLabel}</button>
    </li>
  );
}
