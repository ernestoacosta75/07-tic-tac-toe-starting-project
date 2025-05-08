import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  // State hook to manage & update the game board
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // const handleSelectSquare = (rowIndex, colIndex) => {
  //   setGameBoard((prevGameBoard) => {
  //       const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];        
  //       updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
        
  //       return updatedBoard;
  //   });

  //   onSelectSquare();
  // }

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
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
