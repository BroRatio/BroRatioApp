import React, { Component } from 'react'
// import Login from './components/Login/Login'
import Score from './components/Score/Score'
import './App.css'
import PersistentDrawer from './components/PersistentDrawer/PersistentDrawer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PersistentDrawer />
        <Score />
      </div>
    );
  }
}

export default App;
