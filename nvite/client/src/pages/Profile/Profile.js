import React, { Component } from "react";
import PropTypes from "prop-types";
// Material-UI Imports
import {
  GridList,
  GridListTile,
  IconButton,
  Button,
  Dialog
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
// Components Imports
import LoginBar from "../../components/LoginBar/LoginBar";

class Results extends Component {
  state = {
    open: false,
    currentImg: ""
  };

  handleOpen = img => {
    this.setState({ open: true, currentImg: img });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    <LoginBar />;
    let imageListContent;
    const { images } = this.props;
    if (images) {
      imageListContent = (
        <GridList cols={3}>
          {images.map(img => (
            <GridListTile
              title={img.tags}
              style={{ boxShadow: "0 6px 10px grey, 0 6px 10px grey" }}
              key={img.id}
              subtitle={
                <span>
                  by <strong>{img.user}</strong>
                </span>
              }
              actionIcon={
                <IconButton onClick={() => this.handleOpen(img.largeImageURL)}>
                  <InfoIcon color="white" />
                </IconButton>
              }
            >
              <img src={img.largeImageURL} alt="No Result" />
            </GridListTile>
          ))}
        </GridList>
      );
    } else {
      imageListContent = null;
    }

    const actions = [
      <Button label="Close" primary={true} onClick={this.handleClose} />
    ];
    return (
      <div>
        {imageListContent}
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <img src={this.state.currentImg} alt="" style={{ width: "100%" }} />
        </Dialog>
      </div>
    );
  }
}

Results.propTypes = {
  images: PropTypes.array.isRequired
};

export default Results;
