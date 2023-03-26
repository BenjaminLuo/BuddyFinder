import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core'
import {
  BrowserRouter as Router
} from 'react-router-dom';

import Landing from '../Landing';
import PrivateRoute from '../Navigation/PrivateRoute.js';
import Appbar from '../Appbar';
import { theme } from './theme';

import SignIn from '../Authentication/SignIn';
import SignUp from '../Authentication/SignUp';
import AuthDetails from '../Authentication/AuthDetails';


// Main routing hub: Loads Appbar on each page and sets default screen to the Landing page
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AuthDetails>
          <Router>
            <Appbar />
            <div className="App">
              <PrivateRoute exact path="/" component={Landing} />
              {/* <SignIn /> */}
              {/* <SignUp /> */}
              {/* <AuthDetails /> */}
            </div>
          </Router>
        </AuthDetails>
      </ThemeProvider>
    );
  }
}

export default App;