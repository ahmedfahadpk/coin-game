import React, { Component } from 'react';
import './App.css';
import Circle from './Circle/Circle';

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min) ) + min;
};

class App extends Component {
  state = {
    score: 0,
    current: 0,
  };

  pace = 1500;
  timer = undefined;

  // About finding the new number

  next = () => {
    let nextActive = undefined;

    do{
      nextActive = getRndInteger(1, 4);
    } while (nextActive === this.state.current);

    this.setState({
      current: nextActive,
    });

    this.timer = setTimeout(this.next, this.pace);
    console.log(this.state.current);

  };

  clickHandler = (circleID) => {
    console.log('Clicked', circleID);
    this.setState({
      score: this.state.score + 1
    });
  };

  // Start Handler

  startHandler = () => {
    this.next();
  };


  // End Handler

  endHandler = () => {
    clearTimeout(this.timer);
  };

  render() {
    return (
      <div>
        <h1>CoinGame</h1>
        <p>Your Score: {this.state.score}</p>
        <main>
          <Circle
          highlighted={this.state.current === 1}
          mydefaultcolor='Yellow'
          click={this.clickHandler.bind(this, 1)}
          />
          <Circle
          highlighted={this.state.current === 2}
          mydefaultcolor='Green'
          click={this.clickHandler.bind(this, 2)}
          />
          <Circle
          highlighted={this.state.current === 3}
          mydefaultcolor='Red'
          click={this.clickHandler.bind(this, 3)}
          />
          <Circle
          highlighted={this.state.current === 4}
          mydefaultcolor='Blue'
          click={this.clickHandler.bind(this, 4)}
          />
        </main>        
        <div>
          <button onClick={this.startHandler}>Start Game</button>
          <button onClick={this.endHandler}>End Game</button>
        </div>
        
      </div>
    );
  }
}

export default App;
