import React, { Component } from 'react';
import Login from './components/Login/Login'
import Score from './components/Score/Score'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <Score />
      </div>
    );
  }
}

export default App;
