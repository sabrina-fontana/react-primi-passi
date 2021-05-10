import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

let title = <h2>Primi passi con React</h2>
function getDate() {
  return new Date().toLocaleDateString('it-IT') + ' ' + new Date().toLocaleTimeString('it-IT');
}

class App extends Component {
  render() {
    return (
      // deve avere un tag contenitore o <React.Fragment>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {title}
          <p>Oggi è il {getDate()}</p>
        </header>
      </div>
    );
  }
}

export default App;
