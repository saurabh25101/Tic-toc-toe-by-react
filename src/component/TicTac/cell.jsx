 import "./cell.css";

const Cell = ({ value, isDisabled, onClick, isWinner }) => {
  return (
    <button
      className={`cell-btn ${isWinner ? "winner" : ""}`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Cell;
