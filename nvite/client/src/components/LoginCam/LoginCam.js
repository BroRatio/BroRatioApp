import React from "react";
import Webcam from "react-webcam";
// import Score from "../Score/Score";
// Material-UI imports
import Button from "@material-ui/core/Button";
import axios from "axios";

//Extended
class WebcamCapture extends React.Component {
  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({ message: "Analyzing photo..." });
    // console.log(imageSrc);
    axios
      .post("./api/userInfo/analyze", { imageEncoded: imageSrc })
      .then(response => {
        // this.setState({ results: response });
        // console.log(this.state.results);
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };

    return (
      <div>
        <Webcam
          audio={false}
          height={470}
          ref={this.setRef}
          screenshotFormat="image/png"
          width={600}
          style={{ borderRadius: "800px" }}
          videoConstraints={videoConstraints}
          gutterBottom
        />
        <br />
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={this.capture}
        >
          Capture photo
        </Button>
      </div>
    );
  }
}
export default WebcamCapture;
