import React, { Component } from "react";
// Component Imports
import LoginCam from "../../components/LoginCam/LoginCam";
import SimpleModal from "../../components/SimpleModal/SimpleModal";
import "./Start.css";

export default class Start extends Component {
  render() {
    return (
      <div>
        <SimpleModal />
        <h1 className="nvite">Welcome to Nvite...</h1>
        <LoginCam />
        <br />
      </div>
    );
  }
}
