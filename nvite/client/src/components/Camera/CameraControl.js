import React from 'react';
import Webcam from 'react-webcam';
// Material-UI imports
import Button from '@material-ui/core/Button';
import axios from 'axios';

//Extended 
class WebcamCapture extends React.Component {
  setRef = (webcam) => {
    this.webcam = webcam;
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    console.log(imageSrc);
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
  };

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: 'user',
    };

    return (
      <div>
        <Webcam
          audio={false}
          height={470}
          ref={this.setRef}
          screenshotFormat="image/png"
          width={600}
          style={{borderRadius: '800px'}}
          videoConstraints={videoConstraints}
          gutterBottom
        />
        <br />
        <Button variant='contained' size='small' color='primary' onClick={this.capture}>Capture photo</Button>
      </div>
    );
  }
}
export default WebcamCapture;