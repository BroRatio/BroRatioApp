import React from "react";
// Component imports
import LandingCam from "../../components/LandingCam/LandingCam";
import LoginBar from "../../components/LoginBar/LoginBar";

const styles = {
  textAlign: "center",
  margin: "auto"
};

class Landing extends React.Component {
  render() {
    return (
      <div style={styles}>
        <LoginBar />
        <LandingCam>For the Camera</LandingCam>
      </div>
    );
  }
}

export default Landing;
