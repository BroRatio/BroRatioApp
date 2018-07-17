import React, { Component, Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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
                <AppBar position="static"  title='Title Here'>
                    <Toolbar titleStyle={{textAlign: "center"}}>
                        <Typography  variant="title" color="inherit">
                            Title Here
                        </Typography>
                        
                    </Toolbar>
                </AppBar>
                <Paper style={style}>
                    <h1>Image Here</h1>
                    <CircularProgress />
                </Paper>
                <br />
                <Button variant='contained' color='primary'>
                    Take Picture
                </Button>
            </Fragment>

        )
    }
}
