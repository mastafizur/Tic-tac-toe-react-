import { useState } from "react";
// import button from "./button";

export default function Board() {
    let [squares, setSquares] = useState(Array(9).fill(null))
    let [turn, setTurn] = useState(true);

    const handleClick = (index) => {
        if (squares[index] || checkWinner(squares)) { return };
        console.log("this is button" + index);
        const newSquares = squares.slice();
        newSquares[index] = !turn ? "X" : "O"
        setSquares(() => (
            newSquares
        )
        )
        setTurn(!turn);
    }

    const winner = checkWinner(squares);
    const status = winner ? 'Winner: ' + winner : 'Next player: ' + (turn ? 'O' : 'X');


    return (
        <>
            <div className="container">

                <h1 >Tic Tac Toe</h1>
                <div>{status}</div>
                <div className="row row1">
                    <button className="box box1" onClick={() => handleClick(0)}>{squares[0]}</button>
                    <button className="box box2" onClick={() => handleClick(1)}>{squares[1]}</button>
                    <button className="box box3" onClick={() => handleClick(2)}>{squares[2]}</button>

                    <button className="box box1" onClick={() => handleClick(3)}>{squares[3]}</button>
                    <button className="box box2" onClick={() => handleClick(4)}>{squares[4]}</button>
                    <button className="box box3" onClick={() => handleClick(5)}>{squares[5]}</button>

                    <button className="box box1" onClick={() => handleClick(6)}>{squares[6]}</button>
                    <button className="box box2" onClick={() => handleClick(7)}>{squares[7]}</button>
                    <button className="box box3" onClick={() => handleClick(8)}>{squares[8]}</button>
                </div>
                <button className="btn btn-warning" onClick={() => { setSquares(Array(9).fill(null)); setTurn(true); }}>Reset</button>
            </div>
        </>
    )
}
const checkWinner = (squares) => {
    let winPattern = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [3, 4, 5],
        [6, 7, 8],
        [2, 4, 6]
    ];
    for (const pattern of winPattern) {
        const [a, b, c] = pattern;
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}