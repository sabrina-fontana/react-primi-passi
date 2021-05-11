import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Clock from './clock';

let title = <h2>Primi passi con React</h2>
let clocks = [
  {
    seconds: 1,
    timezone: 4
  },
  {
    seconds: 1,
    timezone: 0
  },
  {
    seconds: 1,
    timezone: 2
  }
]

class App extends Component {
  getClocks() {
    return clocks.map((clock, index) => {
      return <Clock key={index} seconds={clock.seconds} timezone={clock.timezone} />
    })
  };

  render() {
    return (
      // deve avere un tag contenitore o <React.Fragment>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {title}
          {this.getClocks()}
        </header>
      </div>
    );
  }
}

export default App;
