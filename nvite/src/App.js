import React, { Component } from 'react'
// import Login from './components/Login/Login'
import Score from './components/Score/Score'
import './App.css'
import PersistentDrawer from './components/PersistentDrawer/PersistentDrawer';
import LoginForm from './components/LoginForm/LoginForm'

class App extends Component {

  render() {
    return (
      <div className="App loader">
        <PersistentDrawer />
      </div>
    );
  }
}

export default App;