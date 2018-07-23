import React from "react";
import Webcam from "react-webcam";
// Material-UI imports
import Button from "@material-ui/core/Button";
import axios from "axios";
import "./Camera.css";

//Extended
class WebcamCapture extends React.Component {
  state = {
    disable: false,
    male: 0,
    female: 0,
    mood: null,
    message: null,
    ageLow: 0,
    ageHigh: 0,
    url: ""
  };

  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({ message: "Analyzing photo...", disable: true });
    // console.log(imageSrc);
    axios
      .post("./api/userInfo/analyze", { imageEncoded: imageSrc })
      .then(response => {
        // this.setState({ results: response });
        // console.log(this.state.results);
        console.log(response.data.malesObject[0].Emotions);
        this.setState({
          disable: false,
          male: response.data.maleCount,
          female: response.data.femaleCount,
          message: "Analysis complete! Take another photo..."
        });
        if (response.data.malesObject.length > 0) {
          // for (let i in response.data.malesObject.length)
          try {
            this.setState({
              ageLow: response.data.malesObject[0].AgeRange.Low,
              ageHigh: response.data.malesObject[0].AgeRange.High,
              mood: response.data.malesObject[0].Emotions[0].Type,
              url: "/images/imageMainuser-random.png?" + Date.toString()
            });
            var c=document.getElementById("canvas");
            var ctx=c.getContext("2d");
            ctx.rect(20,20,150,100);
            ctx.stroke();

          } catch (err) {
            console.log(err);

          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  componentDidMount(){
    this.setState({url:"http://jewel993.com/wp-content/uploads/missing.jpg"})
  }

 
  signOut(){
    localStorage.clear();
    window.location.reload(); 
  }
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
          disabled={this.state.disable}
        >
          Capture photo
        </Button>
        <div className="container">
          <p className="message">{this.state.message}
           
            <img  src={this.state.url+'?'+ new Date().getTime()} /> 
          </p>

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

        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={this.signOut}
        >
          Sign - Out 
        </Button>
      </div>
    );
  }
}
export default WebcamCapture;
