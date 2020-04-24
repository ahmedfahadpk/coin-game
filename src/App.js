import React, { Component } from 'react';
import './App.css';
import Circle from './Circle/Circle';
import GameOver from './GameOver/GameOver';
/* import coin from './Sound/coin.mp3';
import death from './Sound/death.mp3'; */


const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};

class App extends Component {
  state = {
    score: 0,
    current: 0,
    showGameOver: false,
    rounds: 0,
  };

  pace = 1500;
  timer = undefined;

  // About finding the new random number

  next = () => {
    if (this.state.rounds >= 2) { // Handling amount of rounds
      this.endHandler();
      return;
    }

    let nextActive = undefined;

    do{
      nextActive = getRndInteger(1, 4);
    } while (nextActive === this.state.current);

    this.setState({
      current: nextActive,
      // override number and have one more round
      rounds: this.state.rounds + 1,
    });

    // timer

    this.pace *= 0.98;
    this.timer = setTimeout(this.next, this.pace);
    console.log(this.state.current);

  };

  clickHandler = (circleID) => {

    /* let coin = new Audio('./Sound/coin.mp3');
    let death = new Audio('./Sound/death.mp3') */

    console.log('Clicked', circleID);

    // Checking if the state is similar than the one being clicked if yes then add score if no then game over

    if(this.state.current !== circleID) {
      this.endHandler();
      return;
    }

    /* coin.play(); */

    this.setState({
      score: this.state.score + 1,
      // to make rounds 0
      rounds: 0,
    });
  };

  // Start Handler

  startHandler = () => {
    this.next();
  };


  // End Handler

  endHandler = () => {
    clearTimeout(this.timer);

    /* death.play(); */

    this.setState({
      showGameOver: true,
    });
  };

  render() {
    return (
      <div className='content'>
        <div className='banner'>
          <h1>CoinGame</h1>
          <p>Your Score: {this.state.score}</p>
        </div>        
        <main>
          <Circle
          highlighted={this.state.current === 1}
          mydefaultcolor='lightyellow'
          click={this.clickHandler.bind(this, 1)}
          />
          <Circle
          highlighted={this.state.current === 2}
          mydefaultcolor='lightgreen'
          click={this.clickHandler.bind(this, 2)}
          />
          <Circle
          highlighted={this.state.current === 3}
          mydefaultcolor='pink'
          click={this.clickHandler.bind(this, 3)}
          />
          <Circle
          highlighted={this.state.current === 4}
          mydefaultcolor='lightblue'
          click={this.clickHandler.bind(this, 4)}
          />
        </main>        
        <div>
          <button onClick={this.startHandler} >Start Game</button>
          <button onClick={this.endHandler} >End Game</button>
        </div>
        {this.state.showGameOver && <GameOver score={this.state.score} />}
      </div>
    );
  }
}

export default App;
