import React, { useEffect, useRef, useState } from "react";
import './landing.css';
import reactLogo from "./finder.jpeg";
import title from "./main.png";

import {
  Card,
  Typography,
} from '@material-ui/core';

//const AudioContext = window.AudioContext || window.webkitAudioContext

export default function Profile() {
/*
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
*/
  return (

    <div align="center" style={{
      backgroundcolor: '#5C5D8D',
    }}>

      <Card
        style={{
          color: 'white',
          backgroundColor: '#5C5D8D',
          height: '100%'
        }}
      >
        <img src={title} width={600} height={150} alt="react logo" />
        {/* <Typography
          align="center"
          variant="h1"
          component="div"
          gutterBottom
          style={{
            fontFamily: 'Roboto',
            color: 'white',
            opacity: '100%',
            align: 'center',
          }}
        >
          Buddy Finder
        </Typography> */}
      </Card>
      <Card
        style={{
          color: 'white',
          backgroundColor: '#5C5D8D',
          height: '100%'
        }}
      >
        <Typography
          align="center"
          variant="h4"
          component="div"
          gutterBottom
          style={{
            fontFamily: 'Roboto',
            color: 'white',
            opacity: '100%',
            align: 'left',
          }}
        >
          Welcome to Buddy Finder! Find other students with similar interests and schedule times to meet them. Get started now!</Typography>

      </Card>
      <br></br>
      <img src={reactLogo} width={1200} height={800} alt="react logo" />


    </div>
  )

}
