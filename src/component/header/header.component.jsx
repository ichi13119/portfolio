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
        {/* <Menu> */}
        <TemporaryDrawer />
        {/* <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='skills'>Skills</Link></li>
          <li><Link to='/products'>Products</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul> */}
        {/* </Menu> */}
      </div>

      // <HeaderContainer>
      //   <Menu to='/'>Home</Menu>
      //   <Menu to='/about'>About</Menu>
      //   <Menu to='/skills'>Skills</Menu>
      //   <Menu to='/products'>Products</Menu>
      //   <Menu to='/contact'>Contact</Menu>
      // </HeaderContainer>
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