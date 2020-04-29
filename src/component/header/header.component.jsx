import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { changeDay, changeNight } from '../../redux/mode.actions';

import TemporaryDrawer from '../menu/sidebar';

import './header.style.scss';
// import {
//   HeaderContainer, Menu
// } from './header.style.jsx';

class Header extends React.Component {

  render() {
    return (
      <div className="headerContainer">
        <div className='drawer'>
          <TemporaryDrawer/>
        </div>
      </div>
    )
  }
};

const mapStateToProps = props => {
  return {
    day: props
  };
};

// const mapDispatchToProps = dispatch => ({
//     changeDay: () => { dispatch(changeDay()) },
//     changeNight: () => { dispatch(changeNight()) },
// });

export default 
connect(
  mapStateToProps,
  null
)(Header);