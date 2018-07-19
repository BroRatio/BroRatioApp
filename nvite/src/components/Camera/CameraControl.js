import React from 'react';
import Webcam from 'react-webcam';
// Material-UI imports
import Button from '@material-ui/core/Button';

//Extended 
class WebcamCapture extends React.Component {
  setRef = (webcam) => {
    this.webcam = webcam;
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    console.log(imageSrc);
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
      top: 0,
    };

    return (
      <div>
        <Webcam
          audio={false}
          height={470}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={600}
          style={{borderRadius: '999px'}}
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