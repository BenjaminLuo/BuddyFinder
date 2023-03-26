import React, { useContext } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Grid,
  makeStyles,
  Modal,
  Box,
  Menu,
  Typography,
  MenuItem
} from '@material-ui/core';


import history from '../Navigation/history';
import { NavButton } from './NavButton';
import SignIn from '../Authentication/SignIn'
import { AuthContext } from '../Authentication/AuthDetails'


const useStyles = makeStyles(() => {
  return {
    page: {
      opacity: 0.9,
      minHeight: '90vh',
      padding: '40px 100px 40px 100px'
    },
    modal: {
      position: 'absolute',
      overflowY: 'auto',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '33%',
      minHeight: '70%',
      backgroundColor: 'lightgrey',
      border: '0px',
      padding: '40px',
      zoom: '0.8'
    },
  }
})


// Navigation Bar (appears on all pages)
export default function NavBar() {
  const classes = useStyles();
  const { authUser } = useContext(AuthContext);

  // 'User' dropdown menu triggers
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => { setAnchorEl(event.currentTarget) };
  const handleDropdownClose = () => { setAnchorEl(null) };

  // Sign-in Modal triggers
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);


  const dropdownClick = (redirect) => {
    handleDropdownClose();
    history.push(redirect);
  }

  const handleAuth = () => {
    handleOpen();
    handleDropdownClose();
    console.log(authUser)
  }


  return (
    <>
      <AppBar position="sticky">
        <Toolbar variant="dense">

          {/* Grid to organize redirects */}
          <Grid container spacing={2}>
            <NavButton redirect={"/"} linkText={"Home"} />
            <Grid xs={4} item></Grid> {/* Empty space for right-aligning the NavButtons*/}

            <NavButton redirect={"/Matching"} linkText={"Matching"} />
            <NavButton redirect={"/Discussion"} linkText={"News"} />
            <NavButton redirect={"/QA"} linkText={"Forum"} />
            <NavButton redirect={"/Calendar"} linkText={"Calendar"} />
            <NavButton redirect={"/Statistics"} linkText={"Statistics"} />
            <NavButton redirect={"/Search"} linkText={"Search"} />

            {/* Dropdown element for profile components */}
            <Grid
              item xs={1}
              sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button title="dropbutton" data-testid="dropdownButton" onClick={handleMenu}>
                <Typography variant="h6">User ▼</Typography>
              </Button>
              <Menu
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleDropdownClose}>
                <MenuItem data-testid={'auth'} onClick={handleAuth}>Sign In</MenuItem>
                <MenuItem data-testid={'profile'} onClick={() => dropdownClick("Profile")}>Profile</MenuItem>
                <MenuItem data-testid={'settings'} onClick={() => dropdownClick("Settings")}>Settings</MenuItem>
                <MenuItem data-testid={'contact'} onClick={() => dropdownClick("Contact")}>Contact</MenuItem>
                <MenuItem data-testid={'faq'} onClick={() => dropdownClick("FAQ")}>FAQ</MenuItem>
              </Menu>
            </Grid>

          </Grid>

        </Toolbar>
      </AppBar>

      <Modal
        open={open}
        onClose={handleModalClose}>
        <Box className={classes.modal}>
          <Typography variant="h4" style={{ paddingBottom: '30px' }} >
            Sign In
          </Typography>
          <SignIn />
        </Box>
      </Modal>

    </>
  );
}

