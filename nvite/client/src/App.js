import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Score from './components/Score/Score'
import "./App.css";
import Landing from "./pages/Landing/Landing";
import Uploader from './pages/Uploader/dropzoene'
import Start from "./pages/Start/Start";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/signup" component={Uploader} />
        </Switch>
      </div>
    </Router>
  );
};



export default App;
