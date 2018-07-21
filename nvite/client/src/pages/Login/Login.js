import React, { Component, Fragment } from "react";
// Material-UI Imports
import Paper from "@material-ui/core/Paper";
// import CircularProgress from '@material-ui/core/CircularProgress';
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';
// Componennt Imports
import LoginCam from "../../components/LoginCam/LoginCam";
import LoginBar from "../../components/LoginBar/LoginBar";
// import Score from '../Score/Score'

const style = {
  height: 430,
  width: 620,
  textAlign: "center",
  borderRadius: "100px",
  margin: "auto"
  // marginTop: "5em"
};

export default class Login extends Component {
  render() {
    return (
      <Fragment>
        <LoginBar />
        <Paper style={style}>
          <LoginCam>For the Camera</LoginCam>
        </Paper>
        <br />
      </Fragment>
    );
  }
}

// ===================== ===================== ===================== ===================== //
//  Button for when user uploads an img from their PC, This code might need axios post too.//
// ===================== ===================== ===================== ===================== //
//
//         <Button style={{ marginTop: '5em' }} variant='contained' size="large" color='primary'
//             containerElement='label'
//             label='My Label'>
//             <input type="file" />
//         </Button>
//         <Button style={{ marginTop: '5em' }} variant="contained" size="large" color="default">
//             Upload Image
// <CloudUploadIcon style={{ marginLeft: "5px" }} />
//         </Button>
//
