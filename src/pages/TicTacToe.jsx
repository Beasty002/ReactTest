import { useState } from 'react';

function Square({ value, handleClick }) {


    return (
        <button onClick={handleClick} className="square border p-2 flex justify-center items-center border-black font-bold text-2xl">{value}</button>
    )
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

function Game() {
    return (
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
                <ol>{/*TODO*/}</ol>
            </div>
        </div>
    );
}

function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
    const handleClick = (i) => {
        const nextSquares = squares.slice();
        if (squares[i] || calculateWinner(squares)) {
            return;
        }

        if (xIsNext) {
            nextSquares[i] = 'X';
        }
        else {
            nextSquares[i] = 'O';
        }

        setSquares(nextSquares);
        setXIsNext(!xIsNext);

    }
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    return (
        <>
           
            <div>{status}</div>
            <section className='grid grid-rows-3 gap-0 w-64 h-64'>
                <div className='grid grid-cols-3 '>
                    <Square value={squares[0]} handleClick={() => handleClick(0)} />
                    <Square value={squares[1]} handleClick={() => handleClick(1)} />
                    <Square value={squares[2]} handleClick={() => handleClick(2)} />
                </div>
                <div className='grid grid-cols-3 '>
                    <Square value={squares[3]} handleClick={() => handleClick(3)} />
                    <Square value={squares[4]} handleClick={() => handleClick(4)} />
                    <Square value={squares[5]} handleClick={() => handleClick(5)} />
                </div>
                <div className='grid grid-cols-3 '>
                    <Square value={squares[6]} handleClick={() => handleClick(6)} />
                    <Square value={squares[7]} handleClick={() => handleClick(7)} />
                    <Square value={squares[8]} handleClick={() => handleClick(8)} />
                </div>
            </section>
        </>)
}

export default function TicTacToe() {
    return (
        <Board />
    )
}