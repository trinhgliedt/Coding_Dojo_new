import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";

import { Menu } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { sizing, palette } from "@material-ui/system";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `black`,
  },
});

const NarBarSideDrawer = ({ navLinks }) => {
  const [state, setState] = useState({ right: false });
  const classes = useStyles();

  const Box = styled.div`
    ${sizing}${palette}
  `;
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ [anchor]: open });
  };
  const sideDrawerList = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List component="nav">
        {navLinks.map(({ title, path, icon }) => (
          <Link to={path} key={title} className={classes.linkText}>
            <ListItem button>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
  return (
    <div>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer("right", true)}
      >
        <Menu />
      </IconButton>
      <Box width="100%" bgcolor="secondary.main">
        Test
      </Box>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {sideDrawerList("right")}
      </Drawer>
    </div>
  );
};

export default NarBarSideDrawer;
