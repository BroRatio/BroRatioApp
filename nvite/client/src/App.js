import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Score from './components/Score/Score'
import "./App.css";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
//import NoMatch from "./components/SimpleModal";
// import LoginForm from './components/LoginForm/LoginForm'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/" component={Landing} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
