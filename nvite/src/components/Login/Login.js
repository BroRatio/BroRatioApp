import React, { Component, Fragment } from 'react'
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
    // Initial setup for person count will be moved to other pages later
    state = {
        male: 0,
        female: 0,
        mood: '',
        message: 'Take a picture!'
    };
    render() {
        return (
            <Fragment>
                <Paper style={style}>
                    <CameraControl>
                        For the Camera
                </CameraControl>
                    <Score
                        male={this.state.male}
                        female={this.state.female}
                        mood={this.state.mood}
                        message={this.state.message}
                    />
                </Paper>
            </Fragment>
        )
    }
}

// ===================== ===================== ===================== ===================== //
//  Button for when user uploads an img from their PC, This code will need axios post too. //
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
