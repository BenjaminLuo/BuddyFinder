import React, { useContext } from 'react';
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase";
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
      backgroundColor: 'white',
      border: '0px',
      padding: '40px',
      zoom: '0.8'
    },
    toolbarButtons: {
      marginLeft: 'auto'
    }
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

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  const handleAuth = () => {
    if (authUser) {
      userSignOut();
    } else {
      handleOpen();
      handleDropdownClose();
    }
  }


  return (
    <>
      <AppBar position="sticky">
        <Toolbar variant="dense">

          <NavButton redirect={"/"} linkText={"Home"} />

          <div className={classes.toolbarButtons}>
            <NavButton redirect={"/Matching"} linkText={"Matching"} />
            <NavButton redirect={"/Discussion"} linkText={"News"} />
            <NavButton redirect={"/QA"} linkText={"Forum"} />
            <NavButton redirect={"/Calendar"} linkText={"Calendar"} />
            <NavButton redirect={"/Statistics"} linkText={"Statistics"} />
            <NavButton redirect={"/Search"} linkText={"Search"} />

            {/* Dropdown element for profile components */}
            <Button
              title="dropbutton"
              data-testid="dropdownButton"
              onClick={handleMenu}
              style={{ marginLeft: '15px', textTransform: 'none' }}>
              <Typography variant="h6">
                {
                  authUser ? `${authUser.email} ▼`
                    :
                    "User ▼"
                }
              </Typography>
            </Button>
            <Menu
              anchorEl={anchorEl}
              getContentAnchorEl={null}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'center' }}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleDropdownClose}>
              <MenuItem data-testid={'auth'} onClick={handleAuth}>{authUser ? "Sign Out" : "Sign In"}</MenuItem>
              <MenuItem data-testid={'profile'} onClick={() => dropdownClick("Profile")}>Profile</MenuItem>
              <MenuItem data-testid={'settings'} onClick={() => dropdownClick("Settings")}>Settings</MenuItem>
              <MenuItem data-testid={'contact'} onClick={() => dropdownClick("Contact")}>Contact</MenuItem>
              <MenuItem data-testid={'faq'} onClick={() => dropdownClick("FAQ")}>FAQ</MenuItem>
            </Menu>
          </div>

        </Toolbar>
      </AppBar>

      <Modal
        open={open}
        onClose={handleModalClose}>
        <Box className={classes.modal}>
          <SignIn />
        </Box>
      </Modal>

    </>
  );
}

