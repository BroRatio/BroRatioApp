import React, { Component, Fragment } from 'react'
// import AppBar from '@material-ui/core/AppBar';
// import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

const style = {
    height: 400,
    width: 400,
    margin: 50,
    padding: 60,
    textAlign: 'center',
    display: 'inline-block',
    borderRadius: '999px',
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
                    <h1>Image Here</h1>
                    {/* <img target="_blank" src="#" alt="No Results" /> */}
                    <CircularProgress />
                    <br />
                <Button style={{marginTop: '5em'}} variant='contained' color='primary' 
                containerElement='label'>
                    Take Picture
                </Button>
            
                </Paper>
                <Button style={{marginTop: '5em'}} variant='contained' color='primary' 
                containerElement='label'
                label='My Label'>
   <input type="file" />
                </Button>
            </Fragment>

        )
    }
}
