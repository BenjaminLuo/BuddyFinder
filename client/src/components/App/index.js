import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core'
// import {
//   BrowserRouter as Router
// } from 'react-router-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from '../Landing';
// import PrivateRoute from '../Navigation/PrivateRoute.js';
import Appbar from '../Appbar';
import { theme } from './theme';

import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import AuthDetails from './components/AuthDetails';



// Main routing hub: Loads Appbar on each page and sets default screen to the Landing page
class App extends Component {

  render() {
    return (

      <ThemeProvider theme={theme}>
        <Router>
          <Appbar />
          <div className="App">
            <SignIn />
            <SignUp />
            <AuthDetails />
          </div>
        </Router>
      </ThemeProvider>

    );
  }
}

export default App;