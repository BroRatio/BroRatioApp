import React, { Component, Fragment } from 'react'
// import AppBar from '@material-ui/core/AppBar';
// import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
// import CircularProgress from '@material-ui/core/CircularProgress';
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CameraControl from '../Camera/CameraControl'
import Score from '../Score/Score'

const style = {
    height: 430,
    width: 540,
    textAlign: 'center',

    borderRadius: '100px',
};

export default class Login extends Component {
    render() {
        return (

            <Fragment>
                {/* <AppBar position="static" title='Title Here'>
                    <Typography titleStyle={{ textAlign: "center", margin: "auto" }} variant="display3" color="inherit">
                        Title Here
                    </Typography>
                </AppBar> */}

                <Paper style={style}>
                    <CameraControl>
                        For the Camera
                </CameraControl>
                    {/* <CircularProgress /> */}
                    {/* <Button style={{ marginTop: '5em' }} variant='contained' size='large' color='primary'
                        containerElement='label'>
                        Take Picture
                </Button> */}

<Score />
                </Paper>

            </Fragment>

        )
    }

}


// ===================== ===================== ===================== ===================== //
//  Code for when user uploads an img from their PC, This code will need axios post too.   //
// ===================== ===================== ===================== ===================== //
//                 <br />
//         <Button style={{ marginTop: '5em' }} variant='contained' size="large" color='primary'
//             containerElement='label'
//             label='My Label'>
//             <input type="file" />
//         </Button>
//         <Button style={{ marginTop: '5em' }} variant="contained" size="large" color="default">
//             Upload Image
// <CloudUploadIcon style={{ marginLeft: "5px" }} />
//         </Button>