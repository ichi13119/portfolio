import React from 'react';
import './App.scss';
import './style';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeDay, changeNight } from './redux/mode.actions';


import Header from './component/header/header.component';
import Home from './component/contents/home/home.component';
import About from './component/contents/about/about.component';
import Skills from './component/contents/skills/skills.component';
import Products from './component/contents/products/products.component';
import Contact from './component/contents/contact/contact.component';
import Footer from './component/footer/footer.component';



class App extends React.Component {

    render(){
      return (
        <div className='App'>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            {/* <Route path='/about' component={About} /> */}
            <Route path="/about">
              <About />
            </Route>
            <Route path='/skills' component={Skills} />
            <Route path='/products' component={Products} />
            <Route path='/contact' component={Contact} />
          </Switch>
          {/* <button 
          className="btn-day"
          onClick={() => this.props.changeDay(true)}
          >click me</button>
          <button 
          className="btn-night"
          onClick={() => this.props.changeNight(false)}
          >click here</button> */}
          <Footer />
        </div>
        );
      }
    }


const mapStateToProps = state => {
  return {
    day: state.day.day
  };
};

const mapDispatchToProps = dispatch => ({
    changeDay: () => dispatch(changeDay(true)),
    changeNight: () => dispatch(changeNight(false)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
