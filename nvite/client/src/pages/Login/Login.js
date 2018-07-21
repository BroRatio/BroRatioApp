import React, { Component } from "react";
// Material-UI Imports
// import Paper from "@material-ui/core/Paper";
// import CircularProgress from '@material-ui/core/CircularProgress';
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
// Component Imports
// import LoginCam from "../../components/LoginCam/LoginCam";
import LoginBar from "../../components/LoginBar/LoginBar";
// import LoginForm from "../../components/LoginForm/LoginForm";
import { Typography } from "../../../node_modules/@material-ui/core";
// import Score from '../Score/Score'

const style = {
  //   height: 475,
  //   width: 620,
  textAlign: "center",
  color: "white",
  //   borderRadius: "100px",
  //   margin: "auto"
  marginBottom: "7px"
};

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      password: "",
      img0: null,
      img1: null,
      img2: null,
      img3: null,
      img4: null
    };
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    if (this.state.user && this.state.password) {
      console.log(
        `Testing: ${this.state.user} ${this.state.password} ${this.state.img1}`
      );
      this.setState({
        user: "",
        password: ""
      });
    }
  };
  render() {
    return (
      <div style={style}>
        <LoginBar />
        <Typography variant="title" className="message" style={style}>
          Upload 5 pictures to setup your account
        </Typography>
        <form>
          <Button
            variant="contained"
            size="large"
            color="primary"
            containerElement="label"
            label="My Label"
          >
            <input
              name="img0"
              onChange={this.handleInputChange}
              value={this.state.img0}
              type="file"
              accept="image/*"
            />
          </Button>
          <br />
          <Button
            variant="contained"
            size="large"
            color="primary"
            containerElement="label"
            label="My Label"
          >
            <input
              name="img1"
              onChange={this.handleInputChange}
              value={this.state.img1}
              type="file"
              accept="image/*"
            />
          </Button>
          <br />
          <Button
            variant="contained"
            size="large"
            color="primary"
            containerElement="label"
            label="My Label"
          >
            <input
              name="img2"
              onChange={this.handleInputChange}
              value={this.state.img2}
              type="file"
              accept="image/*"
            />
          </Button>
          <br />
          <Button
            variant="contained"
            size="large"
            color="primary"
            containerElement="label"
            label="My Label"
          >
            <input
              name="img3"
              onChange={this.handleInputChange}
              value={this.state.img3}
              type="file"
              accept="image/*"
            />
          </Button>
          <br />
          <Button
            variant="contained"
            size="large"
            color="primary"
            containerElement="label"
            label="My Label"
          >
            <input
              name="img4"
              onChange={this.handleInputChange}
              value={this.state.img4}
              type="file"
              accept="image/*"
            />
          </Button>
          <br />
          {/* <Button
            style={{ marginBottom: "5px" }}
            variant="contained"
            size="large"
            color="default"
          >
            Upload Image
            <CloudUploadIcon style={{ marginLeft: "5px" }} />
          </Button> */}
          <Typography
            variant="title"
            className="message"
            style={{ color: "white" }}
          >
            Create a new username and password
          </Typography>
          <input
            placeholder="Username"
            name="user"
            value={this.state.user}
            onChange={this.handleInputChange}
            type="text"
          />
          <input
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            type="password"
          />
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={this.handleFormSubmit}
          >
            Submit
          </Button>
        </form>
        <br />
      </div>
    );
  }
}

// ===================== ===================== ===================== ===================== //
//  Button for when user uploads an img from their PC, This code might need axios post too.//
// ===================== ===================== ===================== ===================== //

//         <Button style={{ marginTop: '5em' }} variant='contained' size="large" color='primary'
//             containerElement='label'
//             label='My Label'>
//             <input type="file" />
//         </Button>
//         <Button style={{ marginTop: '5em' }} variant="contained" size="large" color="default">
//             Upload Image
// <CloudUploadIcon style={{ marginLeft: "5px" }} />
//         </Button>
