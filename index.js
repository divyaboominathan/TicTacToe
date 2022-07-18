import React, { useState } from "react";
import ReactDOM from "react-dom";
//import App from './App';
import "./index.css";

const Game = () => {
  return (
    <div className="game">
      Tic-Tac-Toe
      <Board />
    </div>
  );
};

const Board = () => {
  const initialSquares = Array(9).fill(null);
  const [squares, setSquares] = useState(initialSquares);
  const [xIsNext, setxIsNext] = useState(true);
  const renderSquare = (i) => {
    return (
      <Square value={squares[i]} onClickEvent={() => handleCliclEvent(i)} />
    );
  };
  const handleCliclEvent = (i) => {
    const newSquare = [...squares];
    const winnerDeclared = Boolean(calculateWinner(newSquare));
    const squareFilled = Boolean(newSquare[i]);
    if (winnerDeclared || squareFilled) {
      return;
    }
    newSquare[i] = xIsNext ? "X " : "O";
    setSquares(newSquare);
    setxIsNext(!xIsNext);
  };
  const winner = calculateWinner(squares);

  const status = winner
    ? `winner is ${winner} Game Over`
    : `Next Player is  ${xIsNext ? "X" : "O"}  `;
  return (
    <div
      style={{
        margin: 10,
        padding: 20
      }}
    >
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};
const Square = (props) => {
  return (
    <button className="square" onClick={props.onClickEvent}>
      {props.value}
    </button>
  );
};
ReactDOM.render(<Game />, document.getElementById("root"));

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], //rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], //columns
    [0, 4, 8],
    [2, 4, 6] //diagonals
  ];
  for (let line of lines) {
    const [a, b, c] = line;

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
