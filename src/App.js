import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Board from "./components/game-board.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { board: [[" ",""," "],
                          [" "," "," "],
                          [""," "," "]]};
  }
  render() {
    return (
      <div className="body">
       <Board board={this.state.board}/>
      </div>
    );
  }
}



export default App;
