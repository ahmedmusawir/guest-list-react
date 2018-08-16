import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Today's To Do-s</h1>
        </header>
        <p className="App-intro pt-3">
          Use this as a quick temp to do list for the Day or Hour ...
        </p>
        <Todos />
      </div>
    );
  }
}

export default App;
