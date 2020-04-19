import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";

const useStyles = makeStyles({
  list: {
    width: 250,
    textDecoration: "none",
  },
  links: {
    textDecoration: "none",
    color: "#06F",
  },
  header: {
    textAlign: "right",
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false
  });

  const [selectedIndex, setSelectedIndex] = React.useState(0);

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
    setSelectedIndex(index);
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
        <Link to="/" className={classes.links}>
          <ListItem
            button
            selected={selectedIndex === 0}
            onClick={event => handleListItemClick(event, 0)}
          >
            <ListItemText>Home</ListItemText>
          </ListItem>
        </Link>
        <Link to="/about" className={classes.links}>
          <ListItem
            button
            selected={selectedIndex === 1}
            onClick={event => handleListItemClick(event, 1)}
          >
            <ListItemText>About</ListItemText>
          </ListItem>
        </Link>
        <Link to="/skills" className={classes.links}>
          <ListItem
            button
            selected={selectedIndex === 2}
            onClick={event => handleListItemClick(event, 2)}
          >
            <ListItemText>Skills</ListItemText>
          </ListItem>
        </Link>
        <Link to="/products" className={classes.links}>
          <ListItem
            button
            selected={selectedIndex === 3}
            onClick={event => handleListItemClick(event, 3)}
          >
            <ListItemText>Products</ListItemText>
          </ListItem>
        </Link>
        <Link to="/contact" className={classes.links}>
          <ListItem
            button
            selected={selectedIndex === 4}
            onClick={event => handleListItemClick(event, 4)}
          >
            <ListItemText>Contact</ListItemText>
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
            onClick={toggleDrawer(anchor, true)}
            style={{
              fontSize: 50,
              padding: 20,
              color: "0066FF"
            }}/>
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
