import * as React from 'react';
import './landing.css';
import {
    Card,
    Typography
  } from '@material-ui/core'; 

export default function Profile() {

    return (
        <div align="center" style={{
            //backgroundcolor: '#5C5D8D',
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
              Welcome to Buddy Finder! On our website you'll be able to find other students with similar interests and schedule times to meet them. Get started now!</Typography>
          </Card>
        </div>
    )

}