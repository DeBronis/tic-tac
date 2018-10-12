import React from "react";
import "./game-board.css";

class Board extends React.Component {
    render() {

        const {board} = this.props;

        // const boardSquares = board.map(square => {
        //     return (
        //         <div key={board}>{square.square}></div>
        //     )
        // })
        const boxes = [];
        for (let i = 0; i < board.length; i++){
            for (let j = 0; j < board[i].length; j++){
                boxes.push(<div className="box" key={i+j}>{board[i][j]}</div>)
            }
        }

        return (
            // <div>{boardSquares}</div>
            // <div>
            //     /* <div className="board">{this.props.board[0[0]]}</div>
            //     <div className="board">{this.props.board[0[1]]}</div>
            //     <div className="board">{this.props.board[0[2]]}</div>

            // </div> */
            <>
                <div className="board">
                    {boxes}
                </div>
            </>



        )
    }
}

export default Board;