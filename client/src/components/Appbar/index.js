import React, { useContext } from 'react';
import firebase from "firebase/app"
import "firebase/auth";
import { auth } from "../Firebase/firebase";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  Typography
} from '@material-ui/core';


import history from '../Navigation/history';
import { NavButton } from './NavButton';
import { AuthContext } from '../Authentication/AuthDetails'
import { DropDownOptions } from './DropDownOptions';
import { DropDownButton } from './DropDownButton';
import { SignInModal } from './SignInModal';
import backgroundImage from '../images/nav_background.png';

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
    },
    appbar: {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover'
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
    firebase.signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  const handleAuth = () => {
    if (authUser) {
      userSignOut();
      history.push("/");
    } else {
      handleOpen();
      handleDropdownClose();
    }
  }


  return (
    <>
      <AppBar className={classes.appbar} position="sticky">
        <Toolbar variant="dense">

          <NavButton redirect={"/"} linkText={"Home"} />

          <div className={classes.toolbarButtons}>
            <NavButton redirect={"/Matching"} linkText={"Matching"} />
            <NavButton redirect={"/Discussion"} linkText={"News"} />
            <NavButton redirect={"/QA"} linkText={"Forum"} />
            <NavButton redirect={"/Calendar"} linkText={"Calendar"} />
            <NavButton redirect={"/Statistics"} linkText={"Statistics"} />
            <NavButton redirect={"/Search"} linkText={"Search"} />
            <NavButton redirect={"/Similar"} linkText={"Similar"} />

            {/* Dropdown element for profile components */}
            {DropDownButton(handleMenu, authUser)}
            {DropDownOptions(anchorEl, handleDropdownClose, handleAuth, authUser, dropdownClick)}
          </div>

        </Toolbar>
      </AppBar>

      {/* Modal and sign in / registration form */}
      {SignInModal(open, handleModalClose, classes)}

    </>
  );
}



