import React, { Component } from "react";
import { Input, InputAdornment, Button } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Visibility from "@material-ui/icons/Visibility";

const styles = {
  width: "auto"
};

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      password: ""
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
      console.log(`Testing: ${this.state.user} ${this.state.password}`);
      this.setState({
        user: "",
        password: ""
      });
      //   axios.post('/user', {
      //   user: 'Fred',
      //   password: 'Flintstone'
      // })
      // .then(function (response) {
      //   console.log(response);
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
    }
  };

  render() {
    return (
      <div style={styles}>
        <form>
          <Input
            placeholder="Username"
            name="user"
            value={this.state.user}
            onChange={this.handleInputChange}
            type="text"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
          <Input
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            type="password"
            startAdornment={
              <InputAdornment position="start">
                <Visibility />
              </InputAdornment>
            }
          />
          <br />
          <Button
            variant="contained"
            size="small"
            color="primary"
            type="submit"
            onClick={this.handleFormSubmit}
            style={{ marginTop: "1em" }}
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
