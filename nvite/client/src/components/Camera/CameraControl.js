import React from "react";
import Webcam from "react-webcam";
import Score from "../Score/Score";
// Material-UI imports
<<<<<<< HEAD:nvite/client/src/components/Camera/CameraControl.js
import Button from '@material-ui/core/Button';
import axios from 'axios';
=======
import Button from "@material-ui/core/Button";
>>>>>>> origin/master:nvite/src/components/Camera/CameraControl.js

//Extended
class WebcamCapture extends React.Component {
  state = {
    male: 0,
    female: 0,
    mood: ""
  };

  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    console.log(imageSrc);
<<<<<<< HEAD:nvite/client/src/components/Camera/CameraControl.js
    axios
    .post("./api/userInfo/analyze",{imageEncoded:imageSrc})
    .then(function (response) {
        console.log(response);
    })
  //   axios.post('/user', {
  //   firstName: 'Fred',
  //   lastName: 'Flintstone'
  // })
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
=======
    //   axios.post('/user', {
    //   listOfImages: imgsrc,
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
>>>>>>> origin/master:nvite/src/components/Camera/CameraControl.js
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
        <Score
          male={this.state.male}
          female={this.state.female}
          mood={this.state.mood}
        />
      </div>
    );
  }
}
export default WebcamCapture;
