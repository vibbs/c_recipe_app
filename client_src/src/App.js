import React, {Component} from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import Main from './components/Main'
import Navbar from './components/Navbar'
import SignUpForm from './components/Registration/SignUpForm';
import SignInForm from './components/Registration/SignInForm';
import Terms from './components/Terms';


import {AppConsumer, AppProvider }from './components/AppContext';


class App extends Component {
 
  state = { 
    isSignedIn: false,
    userID : null,
    userObject: null
  }
 

  componentDidMount = () => {
   
  }

  render() {
    return (
      <AppProvider>
        <div className="App">
            <Navbar/>
            <div className="container">
              <Main/>
            </div>
            <div className="fixed-action-btn">
              <Link to="/recipes/add" className="btn-floating btn-large red">
                <i className="fa fa-plus" > </i>
              </Link>
            </div>
        </div>
      </AppProvider>

    );
  }
}



export default App;

/*
## Main APP content 
<AppProvider>
        <div className="App">
            <Navbar/>
            <div className="container">
              <Main/>
            </div>
            <div className="fixed-action-btn">
              <Link to="/recipes/add" className="btn-floating btn-large red">
                <i className="fa fa-plus" > </i>
              </Link>
            </div>
        </div>
      </AppProvider>





      registration page:
      <div className="App__Aside">
            <h2>Travern Manager</h2>
            <p> This would container some marketing and about details</p>
          </div>
          
          
          <div className="App__Form">
              <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>

              <Route exact path="/" component={SignUpForm}>
              </Route>
              <Route path="/sign-in" component={SignInForm}>
              </Route>
              <Route path="/terms" component={Terms}>
              </Route>
          </div>

*/