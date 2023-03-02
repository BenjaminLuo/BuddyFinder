import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { createTheme, ThemeProvider, styled } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { object } from 'prop-types';

const useStyles = makeStyles((theme) => {
  return {
    page: {
      backgroundColor: 'lightgrey',
      backgroundSize: 'cover',
      opacity: 0.9,
      padding: '40px',
      paddingTop: '120px',
      minHeight: '100vh',
    },
  }
})

export default function Matching() {

  const classes = useStyles();

  const [value, setvalue] = React.useState('');
  const [userID, setUserID] = React.useState('');


  const handleChange = (event) => {
    setvalue(event.target.value);
    console.log(value);
  };


  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const [name, setName] = React.useState("");

  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [rating, setRating] = React.useState("");
  const [time, setTime] = React.useState("");

  const [open, setOpen] = React.useState(false);


  const onChangeBody = (event) => {
    setBody(event.target.value);
  }

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  }

  const onChangeRating = (event) => {
    setRating(event.target.value);
  }

  const onUpdateMovies = (item) => {
    setvalue(item.id);
    setName(item.name);
  } 

  const handleRemoveItem = (item) => {
    const newMovies = activityList.filter(
    (movie) => item.id !== movie.id);
    setActivityList(newMovies);
    };

  let [activityList, setActivityList] = React.useState([]);
  
  
const categories = ["Basketball", "Squash", "Swimming", "Gym"];
const places = ["PAC", "CIF"];



  const onApplyChanges = () => {
   // var index = initialReviews.map(function(e) { return e.title; }).indexOf(value);
    const j = {
     selection: name,
     title: title,
     body: body,
     rating: rating
  
    }

    let rev = [...activityList];
    rev.push(j); 

    setActivityList(rev);
    console.log("List is: ", activityList);

    //addReview(); 
  }

  return (
    <><div>
      <Typography variant="h3" gutterBottom component="div">
        Match
      </Typography>

      <FormControl component="fieldset">
        <FormLabel component="legend">Place</FormLabel>
        <RadioGroup row aria-label="position" name="Place"  
        
        helperText = {"Where would you like to go?"}

        value={null} onChange={onChangeRating}>
          
        <FormControlLabel
            value="PAC"
            control={<Radio color="primary" />}
            label="PAC"
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="CIF"
            control={<Radio color="primary" />}
            label="CIF"
            labelPlacement="bottom"
          />

</RadioGroup>
      </FormControl>


      <FormControl className={classes.formControl}>

        <InputLabel id="demo-controlled-open-select-label">Select Activity</InputLabel>
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

          {categories.map((sport) => {
            return (
              <MenuItem
                value={sport}
                onClick={() => onUpdateMovies(sport)}
              > {sport}
              </MenuItem>

            );



          })}

        </Select>

      </FormControl>




        <Typography variant="h3" gutterBottom component="div">
          Place
        </Typography>


        <FormControl className={classes.formControl}>

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


            {places.map((plac) => {
              return (
                <MenuItem
                  value={plac}
                  onClick={() => onUpdateMovies(plac)}
                > {plac}
                </MenuItem>

              );


            })}

          </Select>

        </FormControl>

        <Grid>
          <label htmlFor="Time">Enter your end time -- YYYY-MM-DD, HH:MM AM/PM:</label>
          <input
            id="Time"
            type="datetime-local"
            value={time}
            onChange={(event) => setTime(event.target.value)}
          />
        </Grid>

        <SubmitButton
              // item={item}
              label={'Submit'}
              onButtonClick={onApplyChanges}
            />

      </div></>
  )

}

const SubmitButton = ({label, onButtonClick }) => (
  <Button
    type="button"
    variant="contained"
    color="secondary"
    onClick={(event) => onButtonClick(event)}
  >
    {label}
  </Button>
)