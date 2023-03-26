import * as React from 'react';

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import {
  Typography,
  FormControl,
  FormLabel,
  FormControlLabel,
  FormGroup,
  RadioGroup,
  Container,
  Grid,
  makeStyles,
  TextField,
  Button,
  Box,
  Card,
  Radio,
  Select,
  MenuItem,
  Slider,
  Checkbox
} from '@material-ui/core';

function valuetext(value) {
  return `${value}°C`;
}

export default function Similar() {

  const [userID, setUserID] = React.useState(0);

  const [place, setPlace] = React.useState('');
  const [soft, setSoft] = React.useState('');
  const [play, setPlay] = React.useState('');
  const [numb, setNumb] = React.useState('');
  const [fur, setFur] = React.useState(0);
  const [matchList, setMatchList] = React.useState([]);

  const acts = [{ "type": "Basketball", "num": 1 },
  { "type": "Gym", "num": 2 },
  { "type": "Soccer", "num": 3 },
  { "type": "Swimming", "num": 4 }]

  const [value, setvalue] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const [checked, setChecked] = React.useState(true);

  const [final, setFinal] = React.useState('');

  const handleChange = (event) => {
    setvalue(event.target.value);
    console.log(value);
  };

  const handleToggleChange = (event) => {
    setChecked(event.target.checked);
    console.log(checked);
  };


  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleRadio = (item) => {
    setPlace(item);
    console.log("Radio Button is ", place);
  }

  const onUpdateSelection = (item) => {
    setPlay(item);
    console.log("Play is ", play)
  }

  const onChangeSlider = (item) => {
    setNumb(item);
    console.log("Random Number is ", numb)
  }

  const handleSel = (item) => {
    setSoft(item);
  }

  const onApplySim = () => {
      {if (checked === true) {
       setFur(1);
      } else {
        setFur(0);
      }}

      const sum =   parseInt(place) + soft + play + numb +  fur ;
        console.log("Let's count ", sum);

      {  if(sum % 2 === 0) {
        setFinal(0);
      } else{
        setFinal(1);
      } }
      console.log("Group ", final);

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
            <FormLabel id="demo-row-radio-buttons-group-label"
              style={{ fontFamily: 'Roboto', color: 'white', opacity: '100%', align: 'center', }} >
              Which do you prefer more?</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={(event, newValue) => {
                setPlace(newValue);
                console.log("Place is ", place);
              }}
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

        <Typography>Which is your favourite activity? </Typography>

        <FormControl style={{ minWidth: 120 }}>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"

            helperText={"Select an activity you like most"}

            autoWidth
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            onChange={handleChange}
          >

            <MenuItem value="">
              <em>None</em>
            </MenuItem>

            {acts.map((a) => {
              return (
                <MenuItem
                  value={a.num}
                  onClick={() => onUpdateSelection(a.num)}
                > {a.type}
                </MenuItem>

              );
            })}

          </Select>
        </FormControl>

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
          <Typography>How much do you like MSCI 342? </Typography>

          <FormControl>
            <Rating
              name="simple-controlled"
              value={soft}
              onChange={(event, newValue) => {
                setSoft(newValue);
                console.log("Soft is ", soft);
              }}
            />
          </FormControl>
        </Typography>


        <Typography>Pick a number </Typography>

        <Box sx={{ width: 300 }}>
          <Slider
            aria-label="Temperature"
            defaultValue={2}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={5}
            onChange={(event, newValue) => {
              setNumb(newValue);
              console.log("Random Number is ", numb);
            }}
          />
        </Box>

        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label"
            style={{ fontFamily: 'Roboto', color: 'white', opacity: '100%', align: 'center', }} >
            <FormGroup>
              <FormControlLabel control={<Checkbox   onChange={handleToggleChange} />} label="Randomize futher" />
              <FormControlLabel disabled control={<Checkbox />} label="I am happy" />
            </FormGroup>
          </FormLabel>
        </FormControl>

        <Button
          variant="contained"
          color="success"
          id={'button'}
          onClick={onApplySim}

          style={{ height: '30px', marginLeft: '400px', marginTop: '0px' }}>
          Search
        </Button>

      </Card>

    </div >
  )

}