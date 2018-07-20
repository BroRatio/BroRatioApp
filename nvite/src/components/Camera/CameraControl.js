import React from 'react';
import Webcam from 'react-webcam';
import Score from '../Score/Score'
// Material-UI imports
import Button from '@material-ui/core/Button';

//Extended 
class WebcamCapture extends React.Component {
  state = {
        male: 0,
        female: 0,
        mood: '',
    };

  setRef = (webcam) => {
    this.webcam = webcam;
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    console.log(imageSrc);
  //   axios.post('/user', {
  //   listOfImages: imgsrc,
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
          screenshotFormat="image/jpeg"
          width={600}
          style={{borderRadius: '800px'}}
          videoConstraints={videoConstraints}
          gutterBottom
        />
        <br />
        <Button variant='contained' size='small' color='primary' onClick={this.capture}>Capture photo</Button>
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