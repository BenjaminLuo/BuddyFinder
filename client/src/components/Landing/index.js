import React, { useEffect, useRef, useState, useContext } from "react";
import { SignInModal } from '../Appbar/SignInModal';
import './landing.css';
import reactLogo from "./finder.jpeg";
import title from "./main.png";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import history from '../Navigation/history';
import { AuthContext } from '../Authentication/AuthDetails'

import {
  Typography,
  makeStyles,
  Grid,
  Button
} from '@material-ui/core';

const useStyles = makeStyles(() => {
  return {
    page: {
      opacity: 0.9,
      backgroundImage: `url(${reactLogo})`,
      backgroundSize: 'cover',
      height: '94vh',
      overflowY: "hidden"
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
  }
})


// const AudioContext = window.AudioContext || window.webkitAudioContext

export default function Profile() {
  const classes = useStyles();
  const { authUser } = useContext(AuthContext);

  // const [dataPlaying, setDataPlaying] = useState(false);
  // const audioContextRef = useRef();

  // const audioContext = new (AudioContext || (window).webkitAudioContext)();
  // const osc = audioContext.createOscillator();

  // useEffect(() => {
  //   osc.type = "sine";
  //   osc.frequency.value = 880;
  //   osc.connect(audioContext.destination);
  //   osc.start();
  //   audioContextRef.current = audioContext;
  //   audioContext.suspend();
  //   return () => osc.disconnect(audioContext.destination);
  // }, []);

  // const toggleOscillator = () => {
  //   if (dataPlaying) {
  //     audioContextRef.current.suspend();
  //   } else {
  //     audioContextRef.current.resume();
  //   }
  //   setDataPlaying((play) => !play);
  // };

  // Sign-in Modal triggers
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

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
      history.push("/");
    } else {
      handleOpen();
    }
  }

  return (

    <Grid container className={classes.page}>
      <Grid item xs={6} style={{ top: '20%', left: '5%', position: 'absolute' }}>
        <img src={title} width={600} height={150} alt="react logo" />
        <Typography
          variant="h4"
          gutterBottom
          style={{
            fontFamily: 'Roboto',
            color: 'white',
            fontSize: '22px',
            align: 'justify',
            marginLeft: '100px'
          }}
        >
          Welcome to Buddy Finder! Find other students with similar interests and schedule times to meet them. Get started now!</Typography>

        {/* // onClick={toggleOscillator}
          // data-playing={dataPlaying} */}
        {/* <span>{dataPlaying ? "Pause" : "Play"}</span> */}

        <Button
          onClick={handleAuth}
          data-testid={'auth'}
          variant="contained"
          style={{ marginLeft: '100px', marginTop: '20px', backgroundColor: '#6ffd69' }}>
          {authUser ? "Sign out" : "Sign In / Register"}
        </Button>

        {/* Modal and sign in / registration form */}
        {SignInModal(open, handleModalClose, classes)}

      </Grid>


    </Grid>
  )

}
