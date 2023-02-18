import * as React from 'react';
import history from '../Navigation/history';

import {
  AppBar,
  Toolbar,
  Button,
  Grid,
  Menu,
  MenuItem
} from '@material-ui/core';


// Navigation Bar (appears on all pages)
export default function NavBar() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dropdownClick = (redirect) => {
    handleClose();
    history.push(redirect);
  }


  return (
    <div>
      <AppBar>
        <Toolbar>

          {/* Grid to organize redirects */}
          <Grid container spacing={2}>
            <NavButton redirect={"/"} linkText={"Home"} />
            <Grid xs={6} item></Grid> {/* Empty space for right-aligning the NavButtons*/}

            <NavButton redirect={"/Matching"} linkText={"Matching"} />
            <NavButton redirect={"/Discussion"} linkText={"Discussion"} />
            <NavButton redirect={"/Calendar"} linkText={"Calendar"} />
            <NavButton redirect={"/Statistics"} linkText={"Statistics"} />

            {/* Dropdown element for profile components */}
            <Grid
              item xs={1}
              sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button onClick={handleMenu}>
                User ▼
              </Button>
              <Menu
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem onClick={() => dropdownClick("Profile")}>Profile</MenuItem>
                <MenuItem onClick={() => dropdownClick("Settings")}>Settings</MenuItem>
              </Menu>
            </Grid>

          </Grid>

        </Toolbar>
      </AppBar>
    </div>
  );
}


const NavButton = (props) => {
  return (

    <Grid item
      xs={1}
      sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

      <Button
        onClick={() => history.push(props.redirect)}
        sx={{ my: 2, color: 'white', display: 'block' }}>

        {props.linkText}

      </Button>

    </Grid>

  )
}
