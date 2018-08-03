import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
// Material-UI Imports
import {
  GridList,
  GridListTile,
  IconButton,
  GridListTileBar,
  ListSubheader
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import InfoIcon from "@material-ui/icons/Info";
// Components Imports
import LoginBar from "../../components/LoginBar/LoginBar";
import tileData from "./tileData";

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

const styles = theme => ({
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
});

function TitlebarGridList(props) {
  const { classes } = props;

  return (
    <Fragment>
      <LoginBar />
      <GridList col={3} cellHeight={400}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </Fragment>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TitlebarGridList);
