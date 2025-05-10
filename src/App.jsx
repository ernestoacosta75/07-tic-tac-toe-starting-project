import Player from "@features/Player/Player";
import GameBoard from "@features/GameBoard/GameBoard";
import { useState } from "react";
import Log from "@features/Log/Log";
import { WINNING_COMBINATIONS } from "@utils/winning-combinations";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const deriveActivePlayer = (gameTurns) => {
  if (gameTurns.length === 0) return "X";

  const lastTurn = gameTurns[0];
  return lastTurn.player === "X" ? "O" : "X";
}

// gameBoard is a computed valued that is derived from the turns prop.
  // It is not a state variable, but rather a derived value that is calculated based on the turns prop.
  let gameBoard = initialGameBoard;
  
  gameTurns.forEach((turn) => {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  });

  for (const combination in WINNING_COMBINATIONS) {
    const firstSquareSymbol = WINNING_COMBINATIONS[combination][0];
    const secondSquareSymbol = WINNING_COMBINATIONS[combination][1];
    const thirdSquareSymbol = WINNING_COMBINATIONS[combination][2];

    const firstSquare = gameTurns.find(turn => 
      turn.square.row === firstSquareSymbol.row && turn.square.col === firstSquareSymbol.column);
  }

const App = () => {
  const [gameTurns, setGameTurns] = useState([]);

  // Derivating activePlayer state
  const activePlayer = deriveActivePlayer(gameTurns);

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          ></Player>
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          ></Player>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
