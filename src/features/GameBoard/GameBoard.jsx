import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({ onSelectSquare, turns }) {
  // gameBoard is a computed valued that is derived from the turns prop.
  // It is not a state variable, but rather a derived value that is calculated based on the turns prop.
  let gameBoard = initialGameBoard;
  
  turns.forEach((turn) => {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  });

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                {/* Without using an arrow function in the onClick event, React
                would execute the function immediatly during rendering rather that
                when the button is clicked.
                The arrow function creates a new function that will only be executed 
                when the click event occurs.
                This pattern is very common in React when we need to pass additional parameters
                to an event handler. */}
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
