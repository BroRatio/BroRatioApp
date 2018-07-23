import React from "react";
// Component imports
import LandingCam from "../../components/LandingCam/LandingCam";

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
        <LandingCam>For the Camera</LandingCam>
      </div>
    );
  }
}

export default Landing;
