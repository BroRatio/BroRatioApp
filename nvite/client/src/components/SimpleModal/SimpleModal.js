import React, { Fragment } from "react";
// Material-UI
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Modal, Button } from "@material-ui/core";
// Components
import LoginForm from "../LoginForm/LoginForm";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    textAlign: "center"
  }
});

class SimpleModal extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Button
          style={{ marginLeft: "8px" }}
          onClick={this.handleOpen}
          variant="contained"
        >
          <Typography variant="title" id="modal-title">
            Login
          </Typography>
        </Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography color="primary" variant="headline" id="modal-title">
              Login:
            </Typography>
            <Typography variant="subheading" id="simple-modal-description">
              <LoginForm />
            </Typography>
          </div>
        </Modal>
      </Fragment>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
