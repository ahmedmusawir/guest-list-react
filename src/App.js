import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Guests from './components/Guests';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Guest List</h1>
        </header>
        <p className="App-intro pt-3">
          Insert or Delete Guests using the following form
        </p>
        <Guests />
      </div>
    );
  }
}

export default App;
