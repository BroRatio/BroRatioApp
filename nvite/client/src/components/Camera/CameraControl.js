import React from "react";
import Webcam from "react-webcam";
// import Score from "../Score/Score";
// Material-UI imports
import Button from "@material-ui/core/Button";
import axios from "axios";
import "./Camera.css";

//Extended
class WebcamCapture extends React.Component {
  state = {
    // results: [],
    male: 0,
    female: 0,
    mood: null,
    message: null,
    ageLow: 0,
    ageHigh: 0
  };

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
        console.log(response.data.malesObject[0].AgeRange);
        this.setState({
          male: response.data.maleCount,
          female: response.data.femaleCount
        });
        if (response.data.malesObject.length > 0) {
          // for (let i in response.data.malesObject.length)
          this.setState({
            ageLow: response.data.malesObject[0].AgeRange.Low,
            ageHigh: response.data.malesObject[0].AgeRange.High,
            mood: response.data.malesObject[0].Emotions[0].Type
          });
        }
        setTimeout(() => {
          this.setState({
            message: "Analysis finished! Take another photo..."
          });
        }, 1000);
        // console.log(this.state.maleCount);
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
        <div className="container">
          <p className="message">{this.state.message}</p>
          <p className="score">
            <span>Male: {this.state.male}</span>
            <span>|</span>
            <span>Female: {this.state.female}</span>
          </p>
          <p className="mood">Mood: {this.state.mood}</p>
          <p className="age">
            <span>Age Range: {this.state.ageLow}</span>
            <span> - </span>
            <span>{this.state.ageHigh}</span>
          </p>
        </div>
      </div>
    );
  }
}
export default WebcamCapture;
