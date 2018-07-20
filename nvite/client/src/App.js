import React, { Component } from 'react'
// import Score from './components/Score/Score'
import './App.css'
import Landing from './components/Landing/Landing';
// import LoginForm from './components/LoginForm/LoginForm'

class App extends Component {

  render() {
    return (
      <div className="App loader">
        <Landing />
      </div>
    );
  }
}

export default App;