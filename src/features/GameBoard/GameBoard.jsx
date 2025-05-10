const GameBoard = ({ onSelectSquare, board }) => {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
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
                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;
