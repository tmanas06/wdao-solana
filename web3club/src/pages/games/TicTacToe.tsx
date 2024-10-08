// TicTacToe.tsx
import React, { useState } from 'react';
import './TicTacToe.css'; // Add CSS for Tic-Tac-Toe styling

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index: number) => {
    if (board[index] || calculateWinner(board)) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const calculateWinner = (board: (string | null)[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner}` : `Next Player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div>
      <h2>Tic-Tac-Toe</h2>
      <div className="status">{status}</div>
      <div className="board">
        {board.map((value, index) => (
          <button key={index} className="square" onClick={() => handleClick(index)}>
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
