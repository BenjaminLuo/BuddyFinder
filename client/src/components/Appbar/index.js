import * as React from 'react';
import './index.css'

import history from '../Navigation/history';

import {
  AppBar,
  Toolbar,
  Button,
  Grid
} from '@material-ui/core';


// Navigation Bar (appears on all pages)
export default function NavBar() {

  return (
    <div>
      <AppBar>
        <Toolbar>

          {/* Grid to organize redirects */}
          <Grid container spacing={2}>
            <NavButton size={1} redirect={"/"} linkText={"Landing"} />
            <Grid xs={6} item></Grid> {/* Empty space for right-aligning the NavButtons*/}

            <NavButton size={1} redirect={"/Matching"} linkText={"Matching"} />
            <NavButton size={1} redirect={"/Discussion"} linkText={"Discussion"} />
            <NavButton size={1} redirect={"/Calendar"} linkText={"Calendar"} />
            <NavButton size={1} redirect={"/Statistics"} linkText={"Statistics"} />
            <NavButton size={1} redirect={"/Profile"} linkText={"Profile"} />
          </Grid>

        </Toolbar>
      </AppBar>
    </div>
  );
}


const NavButton = (props) => {
  return (

    <Grid sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

      <Button
        onClick={() => history.push(props.redirect)}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        {props.linkText}
      </Button>

    </Grid>

  )
}
