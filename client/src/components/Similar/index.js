import * as React from 'react';

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import {
  Typography,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Container,
  Grid,
  makeStyles,
  TextField,
  Button,
  Box,
  Card,
  Radio
} from '@material-ui/core';

export default function Similar() {

  const [userID, setUserID] = React.useState(1);

  const [place, setPlace] = React.useState('');
  const [soft, setSoft] = React.useState('');
  const [matchList, setMatchList] = React.useState([]);

  const handleRadio = (item) => {
    setPlace(item);
    console.log("Radio Button is ", place);
  }

  const handleSel = (item) => {
    setSoft(item);
  }

  const onApplySim = () => {
    const s = {
      place: place,
      soft: soft,
      userID: userID
    }

    let prez = [...matchList];
    prez.push(s);

    setMatchList(prez);
    console.log("List is: ", matchList);

    //addChat();
  }

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
          variant="h3"
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

        <Typography
          align="center"
          variant="h4"
          component="div"
          gutterBottom
          style={{
            fontFamily: 'Roboto',
            color: 'white',
            opacity: '100%',
            align: 'center',
          }}
        >

          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label"> Which do you prefer more?</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={handleRadio}
            >
        <FormControlLabel
            value="1"
            control={<Radio color="primary" />}
            label="Outdoors"
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="2"
            control={<Radio color="primary" />}
            label="Indoors"
            labelPlacement="bottom"
          />
            </RadioGroup>
          </FormControl>
        </Typography>

        <Typography>Do you like PAC's recent renovation? </Typography>
        <Rating
          name="simple-controlled"
          value={soft}
          onChange={(event, newValue) => {
            setSoft(newValue);
            console.log("Soft is ", soft);
          }}
        />

<Button
            variant="contained"
            color="success"
            id={'button'}
            onChange={onApplySim}

            style={{ height: '30px', marginLeft: '400px', marginTop: '0px' }}>
            Search
          </Button>

      </Card>

    </div>
  )

}