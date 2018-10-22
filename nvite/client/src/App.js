import React from "react";
import { Redirect } from "react-router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// Material-UI imports
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { deepOrange, indigo } from "@material-ui/core/colors";
// Page Imports
import Landing from "./pages/Landing/Landing";
import Uploader from "./pages/Uploader/dropzone";
import Start from "./pages/Start/Start";
import ImagePage from "./pages/ImagePage/ImagePage";
import axios from "../node_modules/axios";

const theme = createMuiTheme({
  palette: {
    primary: { main: deepOrange[500] },
    secondary: { main: indigo[400] }
  }
});

function doAuthRequest() {
  if (localStorage.getItem("broLogin") != null) {
    if (JSON.parse(localStorage.getItem("broLogin")).loginStatus == true) {
      console.log("inside the function")
      return axios.post("./api/userInfo/loginValid", {
        username: JSON.parse(localStorage.getItem("broLogin")).user,
        uni: JSON.parse(localStorage.getItem("broLogin")).uni
      }).then(
        localresponse => {
          var currentToken = JSON.parse(localStorage.getItem("broLogin"));
          if (localresponse.data.integrity) {
            currentToken.loginStatus = true;
            currentToken.uni = localresponse.data.newHash;
            console.log("newKey", localresponse.data.newHash)
          }
          else {
            currentToken.loginStatus = false;
            currentToken.uni = "";
          }
          return localStorage.setItem("broLogin", JSON.stringify(currentToken));
        })
    }
    else {
      console.log("Not Logged In");
      return Promise.reject('Not Logged In Buddy');
    }
  }
  else {
    return Promise.reject('No Login Onject in your sesh yet');
  }
}


const App = () => {

  window.setInterval(function () {
    window.setTimeout(function () {
      let rval = Math.floor(Math.random() * 5) + 1;
      if (document.getElementsByTagName("video").length > 0) {
        document.getElementsByTagName("video")[0].style.backgroundImage = "url('./api/images/bak" + rval + ".gif')";
      }
    }, 100);
    let rval = Math.floor(Math.random() * 5) + 1;
    if (document.getElementsByTagName("video").length > 0) {
      document.getElementsByTagName("video")[0].style.backgroundImage = "url('./api/images/bak" + rval + ".gif')";
    }
  }, 15000);

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              render={props => {
                if (localStorage.getItem("broLogin") == null) {
                  console.log("FRESH-SESH")
                  return <Start />;
                } else {
                  doAuthRequest().then((nm) => {

                  }).catch((err) => {
                    console.log(err);
                    return <Start />;
                  })
                }
                var itemm = JSON.parse(localStorage.getItem("broLogin"))
                  .loginStatus;
                console.log("NOT-FRESH-SESH")
                console.log(itemm)
                if (itemm === true)
                  return <Redirect to="/landing" />;
                else
                  return <Start />;

              }}
            />
            <Route
              exact
              path="/landing"
              render={props => {
                let item;
                if (localStorage.getItem("broLogin") == null) {
                  return <Redirect to="/" />
                }
                else {
                  doAuthRequest().then((nm) => {
                  }).catch((err) => {
                    console.log(err);
                    return <Redirect to="/" />
                  })
                  var itemm = JSON.parse(localStorage.getItem("broLogin"))
                    .loginStatus;
                  if (itemm === true)
                    return <Landing />;
                  else
                    return <Redirect to="/" />
                }
              }}
            />
            <Route
              exact
              path="/images"
              render={props => {
                let item;
                if (localStorage.getItem("broLogin") == null) {
                  return <Redirect to="/" />
                } else {
                  doAuthRequest().then((nm) => {
                    item = JSON.parse(localStorage.getItem("broLogin"))
                      .loginStatus;

                  }).catch((err) => {
                    console.log(err);
                  })
                }
                if (item === false)
                  return <Redirect to="/" />;
                else return <ImagePage />;

              }}
            />
            <Route
              exact
              path="/signup"
              render={props => {
                let item;
                if (localStorage.getItem("broLogin") == null) {
                  item = false;
                } else {
                  doAuthRequest().then((nm) => {
                    item = JSON.parse(localStorage.getItem("broLogin"))
                      .loginStatus;
                  }
                  ).catch((err) => {
                    console.log(err);
                  })
                }
                if (item === true)
                  return <Redirect to="/landing" />;
                else
                  return <Uploader />;

              }}
            />
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
