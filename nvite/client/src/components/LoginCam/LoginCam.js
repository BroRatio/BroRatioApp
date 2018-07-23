import React from "react";
import Webcam from "react-webcam";
// Material-UI imports
import Button from "@material-ui/core/Button";
import axios from "axios";

const styles = {
  width: "auto",
  textAlign: "center"
};

//Extended
class StartCam extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      message: "",
      fail: ""
    };
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = e => {
    e.preventDefault();
    const imageSrc = this.webcam.getScreenshot();
    //Post request happens to send a image and a user password, we get response indicating if
    //the login was a success 
    this.setState({ image: imageSrc, message: "Logging in..." });
    //console.log(imageSrc, this.state.username);
   
    axios
    .post("./api/userInfo/loginAuth", { imageEncoded: imageSrc, username:this.state.username })
    .then(response => {
      // this.setState({ results: response });
      // console.log(this.state.results);
      console.log(response.data)
      localStorage.setItem('broLogin', JSON.stringify(response.data));
      window.location.reload(); 
      })
    setTimeout(() => {
      this.setState({
        fail: "Try logging in with your username if this fails."
      });
    }, 9999);
  };

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };

    return (
      <div style={styles}>
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
        <p className="message">{this.state.fail}</p>
        <form>
          <input
            placeholder="UserName"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
            type="password"
          />
          <Button
            type="submit"
            variant="contained"
            size="small"
            color="primary"
            onClick={this.capture}
          >
            Login With Picture
          </Button>
          <p className="message">{this.state.message}</p>
        </form>
      </div>
    );
  }
}
export default StartCam;