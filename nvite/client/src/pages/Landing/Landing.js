import React from "react";
// Component imports
import LandingCam from "../../components/LandingCam/LandingCam";
import LoginBar from "../../components/LoginBar/LoginBar";

// Paper Style
const styles = {
  textAlign: "center",
  margin: "auto"
  // marginTop: "5em"
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
