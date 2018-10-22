import React, { Component } from "react";
// Component Imports
import LoginCam from "../../components/LoginCam/LoginCam";
import "./Start.css";

export default class Start extends Component {
  render() {
    return (
      <div>
        <h1 className="nvite">Welcome to Node Face...</h1>
        <LoginCam />
      </div>
    );
  }
}
