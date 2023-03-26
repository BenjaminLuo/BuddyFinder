import React, { useEffect, useRef, useState } from "react";
import './landing.css';
import {
    Card,
    Typography,
    Link,
    Paper,
    Box
  } from '@material-ui/core';
  import { createTheme, ThemeProvider, styled } from '@material-ui/core/styles'; 
import history from "../Navigation/history";  

const AudioContext = window.AudioContext || window.webkitAudioContext

export default function Profile() {

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
            <Typography
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
            </Typography>
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
              variant="h5"
              component="div"
              gutterBottom
              style={{
                fontFamily: 'Roboto',
                color: 'white',
                opacity: '100%',
                align: 'left',
              }}
            >
              Welcome to Buddy Finder! On this website you'll be able to find other students with similar interests and schedule times to meet them. Get started now!</Typography>
        
          </Card>

          Only use this in case of emergencies!
          <button onClick={toggleOscillator} data-playing={dataPlaying}>
                        <span>{dataPlaying ? "Pause" : "Play"}</span>
          </button>    

        </div>
    )

}