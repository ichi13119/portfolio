import React from 'react';

import CardContainer from '../linkCard/linkCard.component';

import './home.style.scss';

class Home extends React.Component {

  render() {
    return(
      <div className="homeContainer">
        <div className="textContainer">
          <div className="text">Hi,there.</div>
          <div className="text">Welcome to my world.</div>
        </div>
        <div className="cardContainer">
          <CardContainer />
        </div>
      </div>
    )
  }
};

export default Home;