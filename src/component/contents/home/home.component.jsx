import React from 'react';

import './home.style.scss';

class Home extends React.Component {

  render() {
    return(
      <div className="homeContainer">
        <div className="textContainer">
          <p className="text">hi,there.</p>
          <p className="text">welcome to my world.</p>
        </div>
      </div>
    )
  }
};

export default Home;