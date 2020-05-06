import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import { Button } from "@material-ui/core";

import "./footer.style.scss";

const useStyles = makeStyles((theme) => ({
  footerLinks: {
    fontWeight: 'normal',
    textDecoration: "none",
    color: "#06F",
    [theme.breakpoints.up("xs")]: {
      fontSize: 12,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 16,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 18,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 20,
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

  // const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="footerContainer">
      <div className="divine wide"></div>
      <div className="linkItemsContainer">
        <ul>
          <li>
            <Button onClick={() => handleListItemClick()}>
              <Link exact to="/portfolio" className={classes.footerLinks}>
                Home
              </Link>
            </Button>
          </li>
          <li>
            <Button onClick={() => handleListItemClick()}>
              <Link to="/about" className={classes.footerLinks}>
                About
              </Link>
            </Button>
          </li>
          <li>
            <Button onClick={() => handleListItemClick()}>
              <Link to="/skills" className={classes.footerLinks}>
                Skills
              </Link>
            </Button>
          </li>
          <li>
            <Button onClick={() => handleListItemClick()}>
              <Link to="/products" className={classes.footerLinks}>
                Products
              </Link>
            </Button>
          </li>
        </ul>
      </div>
      <div className="divine"></div>
      <div className="copyright">
        <p>©︎ 2020 ichi13119</p>
      </div>
    </div>
  );
}
