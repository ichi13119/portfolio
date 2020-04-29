import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Histories from "./histories/histories.component";
import Personalities from "./personalities/personalities.component";

import './about.style.scss';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'white',
    color: '06F',
    textAlign: "center",
  }
});

export default function About() {
  const classes = useStyles();
  
  return (
    <div className="aboutContainer">
      <div className="aboutBlock">
        <h1 className='pageTitle title'>
          about me
        <div className="divine"></div>
        </h1>
        <div className="topics">
          <div className="title">
            <span className="divine">Goal in life</span>
          </div>
          <div className="details">
            <p className="goal">自身の能力を最大化し、最高のパフォーマンスを発揮する</p>
          </div>
        </div>
        <div className="basics">
          {/* <img></img> */}
          <p></p>
        </div>
      </div>
      <div className={classes.root}>
          <Histories />
          <Personalities />
      </div>
    </div>
  );
}