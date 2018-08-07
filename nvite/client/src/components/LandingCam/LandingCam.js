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
    ageLow: "",
    ageHigh: "",
    url: ""
  };

  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({
      message: "Analyzing photo...",
      disable: true,
      male: 0,
      female: 0,
      fmood: null,
      mmood: null,
      mageLow: 0,
      mageHigh: 0,
      fageLow: 0,
      fageHigh: 0
    });
    setTimeout(() => {
      this.setState({
        disable: false,
        message: "Take another photo!"
      });
    }, 9999);
    // console.log(imageSrc);
    axios
      .post("./api/userInfo/analyze", { imageEncoded: imageSrc })
      .then(response => {
        this.setState({
          disable: false,
          male: response.data.maleCount ? response.data.maleCount: 0,
          female: response.data.femaleCount ? response.data.femaleCount:0,
          message: "Analysis complete! Take another photo..."
        });

        if(response.data.maleCount > 0 ||response.data.femaleCount > 0 )
        if (response.data.malesObject.length > 0 || response.data.femalesObject.length > 0 ) {
          try {
            //Get the male info
            var malesAgeLow = "Not Detected"
            var malesAgeHigh = "Not Detected"
            var malesMood = "Not Detected"
          
            //Get femal info
            var femalesAgeLow = "Not Detected"
            var femalesAgeHigh = "Not Detected"
            var femalesMood = "Not Detected"
          
     
            var maleDetect = response.data.malesObject.length > 0 ? true: false;
            var femaleDetect = response.data.femalesObject.length > 0 ? true: false;

            if(maleDetect)
            {
              malesAgeLow = "";
              malesAgeHigh = "";
              malesMood = "";
              var counter = 1;
              response.data.malesObject.forEach(element=>{
               
                malesAgeLow += "Male["+counter+"] Low"+element.AgeRange.Low + " ";
                malesAgeHigh += "Male["+counter+"] High"+ element.AgeRange.High + " ";
                malesMood += "*****Male["+counter+"] "+ JSON.stringify(element.Emotions) +"******";
                counter = counter+1;
              })        
            }

            var femaleArray;
            if(femaleDetect)
            {
              femaleArray = [];
              
              femalesAgeLow = "";
              femalesAgeHigh = "";
              femalesMood = "";
              console.log(response.data.femalesObject);
              var counter = 1;
              response.data.femalesObject.forEach(element=>{
                
                femalesAgeLow += "FMale["+counter+"] Low"+element.AgeRange.Low + " ";
                femalesAgeHigh += "FMale["+counter+"] High"+element.AgeRange.High + " ";
                femalesMood += "*******FMale["+counter+"] "+ JSON.stringify(element.Emotions)+"******";
                counter = counter+1;
              })
            }


            this.setState({
              mageLow:  malesAgeLow ,
              fageLow: femalesAgeLow  ,
              mageHigh:  malesAgeHigh ,
              fageHigh: femalesAgeHigh ,
              mmood:  malesMood ,
              fmood: femalesMood ,
              url: "/images/imageMainuser-random.png?" + Date.toString()
            });
            var c = document.getElementById("canvas");
            var ctx = c.getContext("2d");
            ctx.rect(20, 20, 150, 100);
            ctx.stroke();
          } catch (err) {
            console.log(err);
          }
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  componentDidMount() {
    this.setState({
      url: "./images/noimage.jpg"
    });
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
          width={"100%"}
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
          <p className="message">{this.state.message}</p>
          <div
            style={{ height: "337px", width: "600px", display: "inline-block" }}
          >
            <img
              style={{
                overflow: "hidden",
                width: "100%",
                height: "100%",
                borderRadius: "30px"
              }}
              src={this.state.url + "?" + new Date().getTime()}
              alt="No Results!"
            />
          </div>
          <p className="score">
          {
            (this.state.male>0)?(
            <span>Male: {this.state.male}</span>
            ):( <span></span>)}
            {
            (this.state.female>0)?( 
            <span>Female: {this.state.female}</span>):( <span></span>)}
          
          </p>
          <br></br>
          { (this.state.male>0)?( 
          <div>
          <p className="mood">Male - Mood: {this.state.mmood}</p><br></br><br></br>
          <p className="age">
            <span>Male Age Range: {this.state.mageLow}</span>
            <span> - </span>
            <span>{this.state.mageHigh}</span>
          </p>
          </div>):(<p></p>)
          }
          {(this.state.female>0)?( 
          <div>
          <p className="mood">Female - Mood: {this.state.fmood}</p><br></br><br></br>
          <p className="age">
            <span>Female Age Range: {this.state.fageLow}</span>
            <span> - </span>
            <span>{this.state.fageHigh}</span>
          </p>
          </div>):(<p></p>)
          }
        </div>
      </div>
    );
  }
}
export default WebcamCapture;
