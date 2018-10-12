import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { board: [1,2,3] };
  }
  render() {
    return (
      <div className="body">
       <div>{this.state.board[0]}</div>
       <div>{this.state.board[1]}</div>
       <div>{this.state.board[2]}</div>
      </div>
    );
  }
}



export default App;
