import React, { Component } from 'react';
import './App.css';
import Circle from './Circle/Circle';

class App extends Component {
  state = {
    score: 0,
  };

  clickHandler = (circleID) => {
    console.log('Clicked', circleID);
    this.setState({
      score: this.state.score + 1
    });
  };

  render() {
    return (
      <div>
        <h1>CoinGame</h1>
        <p>Your Score: {this.state.score}</p>
        <main>
          <Circle click={this.clickHandler.bind(this, 1)} />
          <Circle click={this.clickHandler.bind(this, 2)} />
          <Circle click={this.clickHandler.bind(this, 3)} />
          <Circle click={this.clickHandler.bind(this, 4)} />
        </main>        
        <div>
          <button>Start Game</button>
          <button>End Game</button>
        </div>
        
      </div>
    );
  }
}

export default App;
