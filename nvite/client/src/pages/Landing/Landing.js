import React from "react";

// Material-UI Imports

import { Paper } from "@material-ui/core";

// Component imports
import LandingCam from "../../components/LandingCam/LandingCam";

// Paper Style
const styles = {
  height: 430,
  width: 620,
  textAlign: "center",
  borderRadius: "100px",
  margin: "auto"
  // marginTop: "5em"
};

class Landing extends React.Component {
  render() {
    return (
      <Paper style={styles}>
        <LandingCam>For the Camera</LandingCam>
      </Paper>
    );
  }
}

export default Landing;
