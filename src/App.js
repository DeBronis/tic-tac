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
    this.fill = this.fill.bind(this);
    this.playAgain = this.playAgain.bind(this);
  }

  fill (event) {
    if (this.state.toggle){
      event.target.innerHTML= "🐶"
    } else{
      event.target.innerHTML= "🙀"
    }
    this.setState({
      toggle: !this.state.toggle
    })
    
  }
  
  playAgain(event) {
    
    this.setState({ board: [[" ",""," "],
    [" "," "," "],
    [""," "," "]],
  toggle : true})
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
