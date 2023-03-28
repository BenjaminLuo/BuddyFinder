import React, { useEffect, useRef, useState } from "react";
import './landing.css';
import reactLogo from "./finder.jpeg";
import title from "./main.png";

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
      height: '100vh',
    }
  }
})


const AudioContext = window.AudioContext || window.webkitAudioContext

export default function Profile() {
  const classes = useStyles();

  const [dataPlaying, setDataPlaying] = useState(false);
  const audioContextRef = useRef();

  useEffect(() => {
    const audioContext = new AudioContext();
    const osc = audioContext.createOscillator();
    osc.type = "sine";
    osc.frequency.value = 880;
    osc.connect(audioContext.destination);
    osc.start();
    audioContextRef.current = audioContext;
    audioContext.suspend();
    return () => osc.disconnect(audioContext.destination);
  }, []);

  const toggleOscillator = () => {
    if (dataPlaying) {
      audioContextRef.current.suspend();
    } else {
      audioContextRef.current.resume();
    }
    setDataPlaying((play) => !play);
  };

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
          Welcome to Buddy Finder! On this website you'll be able to find other students with similar interests and schedule times to meet them. Get started now!</Typography>

        <Button
          onClick={toggleOscillator}
          data-playing={dataPlaying}
          variant="contained"
          style={{ marginLeft: '100px', marginTop: '20px', backgroundColor: '#6ffd69' }}>
          <span>{dataPlaying ? "Pause" : "Play"}</span>
        </Button>

      </Grid>


    </Grid>
  )

}
