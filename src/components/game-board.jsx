import React from "react";
import "./game-board.css";

class Board extends React.Component {
    render() {

        const {board, fill} = this.props;

        const boxes = [];
        for (let i = 0; i < board.length; i++){
            for (let j = 0; j < board[i].length; j++){
                boxes.push(<div className="box" onClick={fill} id={i+" "+j} key={i+" "+j}>{board[i][j]}</div>)
            }
        }

        return (
            
            <>
                <div className="board">
                    {boxes}
                </div>
            </>



        )
    }
}

export default Board;