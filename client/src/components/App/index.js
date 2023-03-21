import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core'
import {
  BrowserRouter as Router
} from 'react-router-dom';


import Landing from '../Landing';
import PrivateRoute from '../Navigation/PrivateRoute.js';
import Appbar from '../Appbar';
import { theme } from './theme';
import CssBaseline from '@mui/material/CssBaseline';



// Main routing hub: Loads Appbar on each page and sets default screen to the Landing page
class App extends Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Router>
          <Appbar />
          <div>
            <PrivateRoute exact path="/" component={Landing} />
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;