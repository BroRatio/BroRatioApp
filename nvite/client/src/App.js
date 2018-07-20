import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Score from './components/Score/Score'
import "./App.css";
import Landing from "./components/Landing/Landing";
//import NoMatch from "./components/SimpleModal";
// import LoginForm from './components/LoginForm/LoginForm'

// class App extends Component {
//   render() {
//     return (
//       <div className="App loader">
//         <Landing />
//       </div>
//     );
//   }
// }

const App = () => {
  return <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>}
;

export default App;
