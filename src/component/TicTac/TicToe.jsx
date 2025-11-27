 import "./TicToe.css";
import Cell from "./cell";
import { useState } from "react";

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const TicToe = () => {

  const [cell, setCell] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState(true);
  const [winner, setWinner] = useState("");
const [winnerCells, setWinnerCells] = useState([]);

  const cellfilling = (index) => {
  if (cell[index] !== "") return;

  cell[index] = player ? "O" : "X";

  // setCell(cell);
  setPlayer(!player);

  checkWinner();
};


  const checkWinner = () => {
    for (let pattern of winningPatterns) {
      const [position1, position2, position3] = pattern;

      if (
        cell[position1] != "" &&
      cell[position1] ===cell[position2] &&
        cell[position2] === cell[position3]
      ) {
        setWinner(cell[position1]);
           setWinnerCells(pattern);
      }
    }
  };

  return (
    <div className="conatiner d-flex flex-column align-items-center justify-content-center">
      <h1 className="title mt-5">
        Tic Tac Toe by <span className="text-warning">React</span>
      </h1>

     {winner && (
        <h2 className="text-danger mt-3">{winner} is the Winner</h2>
      )}
    

      <div className="board">
  {cell.map((value, index) => (
    <Cell
      key={index}
      isDisabled={winner ? true : false}
      value={value}
      onClick={() => cellfilling(index)}
      isWinner={winnerCells.includes(index)}
    />
  ))}
</div>

      <button
        className="btn btn-warning mt-4 reset-btn"
        onClick={() => {
          setCell(Array(9).fill(""));
          setWinner("");
          setWinnerCells("")
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default TicToe;
