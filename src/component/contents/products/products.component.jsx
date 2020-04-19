import React from 'react';
// import {
//   ProductsContainer,
//   TextContiner, 
//   Text,
// } from './products.style.jsx';
import { connect } from 'react-redux';
// import { changeDay, changeNight } from '../../../redux/mode.actions';

import './products.style.scss'

class Products extends React.Component {
  render() {
    return(
      <div className="productsContainer">
        <div className="productsBlock">
          <div className="text">Sorry. . .　Not ready yet.</div>
          <div className="text">Please wait a moment until I'm getting update.</div>
        </div>
      </div>

      // <ProductsContainer day>
      //   <TextContiner>
      //     <Text>Sorry. . .　Not ready yet</Text>
      //     <Text style={{ fontSize: '60px' }}>Please wait a moment until I'm getting ready</Text>
      //   </TextContiner>
      // </ProductsContainer>
    )
  }
};


const mapStateToProps = state => {
  return {
    day: state.day.day
  };
};

export default 
connect(
  mapStateToProps,
  null
)(Products);
