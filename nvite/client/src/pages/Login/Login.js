import React, { Component } from "react";
// Material-UI Imports
import { Typography, Button } from "../../../node_modules/@material-ui/core";
// Component Imports
import LoginBar from "../../components/LoginBar/LoginBar";

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
