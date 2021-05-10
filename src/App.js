import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Clock from './clock';

let title = <h2>Primi passi con React</h2>

class App extends Component {
  render() {
    return (
      // deve avere un tag contenitore o <React.Fragment>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {title}
          <Clock timezone="-4"/>
          <Clock timezone="0"/>
          <Clock timezone="2"/>
        </header>
      </div>
    );
  }
}

export default App;
