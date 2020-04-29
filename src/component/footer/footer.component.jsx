import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import { Button } from "@material-ui/core";

import "./footer.style.scss";

const useStyles = makeStyles({
  footerLinks: {
    textDecoration: "none",
    color: "#06F",
  },
});

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
              <Link to="/" className={classes.footerLinks}>
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
