import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Board from "./components/game-board.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { board: [[" ",""," "],
                          [" "," "," "],
                          [""," "," "]],
                        toggle : true};
    this.fill = this.fill.bind(this)
  }

  fill (event) {
    if (this.state.toggle){
      event.target.innerHTML= "O"
    } else{
      event.target.innerHTML= "X"
    }
    this.setState({
      toggle: !this.state.toggle
    })
    
  }
  render() {
    return (
      <div className="body">
       <Board board={this.state.board} fill={this.fill}/>
      </div>
    );
  }
}



export default App;
