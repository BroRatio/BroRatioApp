import React from "react";
import { Redirect } from "react-router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Score from './components/Score/Score'
import "./App.css";
import Landing from "./pages/Landing/Landing";
import Uploader from "./pages/Uploader/dropzone";
import Start from "./pages/Start/Start";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={props => {
              let item;

              if (localStorage.getItem("broLogin") == null) {
                item = false;
              } else {
                item = JSON.parse(localStorage.getItem("broLogin")).loginStatus;
              }

              if (item === true) return <Redirect to="/landing" />;
              else return <Start />;
            }}
          />
          <Route
            exact
            path="/landing"
            render={props => {
              let item;
              if (localStorage.getItem("broLogin") == null) {
                item = false;
              } else {
                item = JSON.parse(localStorage.getItem("broLogin")).loginStatus;
              }

              if (item === false) return <Redirect to="/" />;
              else return <Landing />;
            }}
          />
          <Route
            exact
            path="/signup"
            render={props => {
              let item;

              if (localStorage.getItem("broLogin") == null) {
                item = false;
              } else {
                item = JSON.parse(localStorage.getItem("broLogin")).loginStatus;
              }
              if (item === true) return <Redirect to="/landing" />;
              else return <Uploader />;
            }}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
