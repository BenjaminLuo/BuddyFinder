import React from 'react';
import Typography from "@material-ui/core/Typography";
import Link from '@material-ui/core/Link';
import history from '../Navigation/history';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from "@material-ui/core/Paper";
import { createTheme, ThemeProvider, styled } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { object } from 'prop-types';

import Appbar from '../Appbar';

 //const fetch = require("node-fetch");
const serverURL = "";

const opacityValue = 0.9;
  
const lightTheme = createTheme({
  palette: {
    type: 'light',
    background: {
      default: "#FFA900"
    },
    primary: {
      main: '#FFA900',
      light: '#FFA900',
      dark: '#FFA900',
      background: '#FFA900'
    },
    secondary: {
      main: "#FFA900",
      light: '#FFA900',
      dark: '#FFA900'
    },
  },
});

const SearchPaper = styled(Paper)(({ theme }) => ({
  opacity: 1.5,
  backgroundColor: theme.palette.primary.background,
  padding: 8,
  borderRadius: 4,
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2)
}));

const MainGridContainer = styled(Grid)(({ theme }) => ({
  margin: theme.spacing(4),
}))

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Pro = () => {

 

  return (

    <SearchPaper> 
    <ThemeProvider theme={lightTheme}>
      <Box
        sx={{
          height: '100vh',
          opacity: opacityValue,
          overflowY: "scroll",
          backgroundColor: lightTheme.palette.background.default,

          backgroundImage: "url(/pictogram-movie-posters.jpg)" , 
          backgroundSize: "cover"
        }}
      >
    
         <Appbar> </Appbar>

      <MainGridContainer
            container
            spacing={1}
            style={{ maxWidth: '50%' }}
            direction="column"
            justify="flex-start"
            alignItems="stretch"
          >


 
        <Grid container direction="column" justify="flex-start" alignItems="flex-start">
                    <Grid item>

                      <Typography> Hi! </Typography>

              </Grid>  </Grid>

 



        </MainGridContainer>
        </Box>
      </ThemeProvider>
      </SearchPaper> 
    
  )
}



export default Pro;