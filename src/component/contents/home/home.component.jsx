import React from 'react';

import CardContainer from '../linkCard/linkCard.component';

import './home.style.scss';

export default function Home() {

    return(
      <div className="homeContainer">
        <div className="textContainer">
          <div className="text">Hi,there.</div>
          <div className="text">Welcome to here.</div>
        </div>
        <div className="cardContainer">
          <CardContainer />
        </div>
      </div>
    )
  };