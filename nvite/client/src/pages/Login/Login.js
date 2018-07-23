import React, { Component } from "react";
// Material-UI Imports
import { Typography, Button } from "../../../node_modules/@material-ui/core";
// Component Imports
import LoginBar from "../../components/LoginBar/LoginBar";
import axios, { post } from 'axios';

const style = {
  textAlign: "center",
  color: "white",
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
    
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onChange = this.handleInputChange.bind(this);

    this.fileInput = React.createRef();
    this.fileInput2 = React.createRef();
    this.fileInput3 = React.createRef();
    this.fileInput4 = React.createRef();
  }

  handleInputChange = e => {
    const { name, value} = e.target;
    
    //For the Username and Password
    this.setState({
      [name]: value
    });
  };

  onChange(e) {
    const {name} = e.target;
    const formData = new FormData();
    formData.append('file',e.target.files[0])
    this.setState({
      [name]:formData
    })
  };


  handleFormSubmit = e => {
    e.preventDefault();
    console.log(e);

    console.log(this.fileInput.current.name)
    console.log(this.fileInput2.current.name)
    
    if (this.state.user && this.state.password) {
      console.log(
        `Testing: ${this.state.user} ${this.state.password} ${this.state.img1}`
      );
     console.log(this.state);
   
     axios.post("./api/login/auth", { loginPacket: this.state }).then(function(data){
      console.log(data); 
     })

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
              type="file"
              accept="image/*"
              ref ={this.fileInput}
              onChange={this.onChange}
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
              type="file"
              accept="image/*"
              ref ={this.fileInput2}
              onChange={this.onChange}
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
              type="file"
              accept="image/*"
              ref ={this.fileInput3}
              onChange={this.onChange}
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
              type="file"
              accept="image/*"
              ref ={this.fileInput4}
              onChange={this.onChange}
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
              type="file"
              accept="image/*"
              ref ={this.fileInput5}
              onChange={this.onChange}
            />
          </Button>
          <br />
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
