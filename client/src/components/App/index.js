import React, { Component } from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core'
import {
  BrowserRouter as Router
} from 'react-router-dom';


import Landing from '../Landing';
import PrivateRoute from '../Navigation/PrivateRoute.js';
import Appbar from '../Appbar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6AAB8E',
      light: '#acaea9',
      dark: '#acaea9'
    },
    secondary: {
      main: '#dedfdd',
      light: '#dedfdd',
      dark: '#dedfdd'
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(',')
  }
})


class App extends Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
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