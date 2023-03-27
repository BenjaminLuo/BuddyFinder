import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthDetails'
import { Rating } from '@material-ui/lab';
import {
  Typography,
  FormControl,
  FormLabel,
  FormControlLabel,
  FormGroup,
  RadioGroup,
  Button,
  Box,
  Card,
  Radio,
  Select,
  MenuItem,
  Slider,
  Checkbox,
  Grid
} from '@material-ui/core';

const serverURL = "";

function valuetext(value) {
  return `${value}°C`;
}

export default function Similar() {
  const { authUser } = useContext(AuthContext);
  const userID = authUser?.uid
  const [resultsList, setResultsList] = React.useState([]);
  const [final, setFinal] = React.useState('');

  const loadResults = () => {
    callApiUsers()
      .then(res => {
        console.log("callApiUsers returned: ", res)
        var parsed = JSON.parse(res.express);
        console.log("callApiUsers parsed: ", parsed);

        setResultsList(parsed);
        console.log("The List is ", resultsList);
      })
  }

  const callApiUsers = async () => {
    const url = serverURL + "/api/searchPeople";
    console.log(url);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        final: final
      })
    });
    const notArrayBody = await response.json();
    if (response.status !== 200) throw Error(notArrayBody.message);
    console.log("User settings: ", notArrayBody);
    return notArrayBody;
  }

  const addPeople = () => {
    callApiAddPeople()
      .then(res => {
        console.log("callApiAddChat returned: ", res)
        var parsed = JSON.parse(res.express);
        console.log("callApiAddChat parsed: ", parsed);

      })
  }

  const callApiAddPeople = async () => {
    const url = serverURL + "/api/addPeople";
    console.log(url);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify({
        final: final,
        userID: userID
      })
    });
    const responseSimilar = await response.json();
    if (response.status !== 200) throw Error(responseSimilar.message);
    console.log("User settings: ", responseSimilar);
    return responseSimilar;
  }



  const [place, setPlace] = React.useState('');
  const [soft, setSoft] = React.useState('');
  const [play, setPlay] = React.useState('');
  const [numb, setNumb] = React.useState('');
  const [fur, setFur] = React.useState('');
  const [matchList, setMatchList] = React.useState([]);

  const acts = [{ "type": "Basketball", "num": 1 },
  { "type": "Gym", "num": 2 },
  { "type": "Soccer", "num": 3 },
  { "type": "Swimming", "num": 4 }]

  const [value, setvalue] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const [checked, setChecked] = React.useState(true);



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

  const addUp = () => {
    {
      if (checked === true) {
        setFur(1);
      } else {
        setFur(0);
      }
    }

    const sum = parseInt(place) + soft + play + numb + fur;
    console.log("Let's count ", sum);


    if (sum % 2 === 0) {
      setFinal(0);
    } else {
      setFinal(1);
    }

    console.log("Group ", final);
  }

  const onApplySim = () => {

    addUp();
    console.log("2nd Group ", final);

    const si = {
      final: final,
      userID: userID
    }

    let rep = [...matchList];
    rep.push(si);

    setMatchList(rep);
    console.log("This is it: ", matchList);

    // addPeople();
    loadResults();
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
          Spare some time to fill out the following questionaire to hopefully find some like minded people
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
              <FormControlLabel control={<Checkbox onChange={handleToggleChange} />} label="Randomize futher" />
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

      <Grid>

        <Typography>

          {resultsList.map((item) => {
            return (
              <ul>

                <Typography>
                  User:  {item.display_name}
                </Typography>
              </ul>
            );
          })}
        </Typography>
      </Grid>

    </div >
  )

}