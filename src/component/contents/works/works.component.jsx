import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import "./works.style.scss";

const useStyles = makeStyles((theme) => ({
  content: {
    [theme.breakpoints.up("xs")]: {
      paddingTop: 20,
    },
    [theme.breakpoints.up("sm")]: {
      padding: 0,
    },
  },
  cardLink: {
    color: "#FFC355",
    fontWeight: "bold",
  },
  cardButton: {
    border: "1.5px solid #FFC355",
    borderRadius: 0,
  },
  cardText: {
    textAlign: "left",
    color: "#06F",
    paddingLeft: 10,
    [theme.breakpoints.up("xs")]: {
      fontSize: 22,
      display: "inline",
      textAlign: "center",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 22,
      display: "block",
      textAlign: "left",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 22,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 24,
    },
  },
}));

export default function Works() {
  const classes = useStyles();

  const handleListItemClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="worksContainer">
      <div className="worksBlock">
        <h1 className="pageTitle">
          Works
          <div className="divine"></div>
        </h1>
        <div className="linkContainer">
          <Card className="linkCard" variant="outlined">
            <CardContent className={classes.content}>
              <Typography className={classes.cardText}>First</Typography>
              <Typography className={classes.cardText}>three.js</Typography>
              <Typography className={classes.cardText}>work</Typography>
              <CardActions>
                <Button
                  className={classes.cardButton}
                  onClick={() => handleListItemClick()}
                >
                  <Link to="/first-three" className={classes.cardLink}>
                    Show it
                  </Link>
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
