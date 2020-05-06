import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";

const useStyles = makeStyles((theme) => ({
  list: {
    textDecoration: "none",
    [theme.breakpoints.up('xs')]: {
      width: 150,
    },
    [theme.breakpoints.up('sm')]: {
      width: 200,
    },
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
    [theme.breakpoints.up('lg')]: {
      width: 250,
    },
  },
  links: {
    textDecoration: "none",
    color: "#06F",
  },
  icon: {
    color: "0066FF",
    [theme.breakpoints.up('xs')]: {
      padding: 15,
      fontSize: 40,
    },
    [theme.breakpoints.up('sm')]: {
      padding: 20,
      fontSize: 45,
    },
    [theme.breakpoints.up('md')]: {
      padding: 20,
      fontSize: 50,
    },
  }
}));

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleListItemClick = (event, index) => {
    window.scrollTo(0, 0);
  };

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List component="nav" aria-label="main mailbox folders">
        <Link to="/portfolio" className={classes.links}>
          <ListItem
            button
            onClick={event => handleListItemClick(event, 0)}
          >
            <ListItemText className="listItemText">Home</ListItemText>
          </ListItem>
        </Link>
        <Link to="/about" className={classes.links}>
          <ListItem
            button
            onClick={event => handleListItemClick(event, 1)}
          >
            <ListItemText className="listItemText">About</ListItemText>
          </ListItem>
        </Link>
        <Link to="/skills" className={classes.links}>
          <ListItem
            button
            onClick={event => handleListItemClick(event, 2)}
          >
            <ListItemText className="listItemText">Skills</ListItemText>
          </ListItem>
        </Link>
        <Link to="/works" className={classes.links}>
          <ListItem
            button
            onClick={event => handleListItemClick(event, 3)}
          >
            <ListItemText className="listItemText">Works</ListItemText>
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div className={[classes.header]}>
      {["right"].map(anchor => (
        <React.Fragment key={anchor}>
          <MenuSharpIcon
            onClick={toggleDrawer(anchor, true)}className={classes.icon}/>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
