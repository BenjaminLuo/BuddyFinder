import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { object } from 'prop-types';

const serverURL = "";

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

  const addInterest = () => {
    callApiAddInterest()
      .then(res => {
        console.log("callApiAddInterest returned: ", res)
        var parsed = JSON.parse(res.express);
        console.log("callApiAddInterest parsed: ", parsed);
    //    setActivitiesList(parsed);
      })
  }

  const callApiAddInterest = async () => {
    const url = serverURL + "/api/addInterest";
    console.log(url);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify({
        place: place,
        activity: activity,
        time: time,
        userID: userID       
      })
    });
    const responseInterest = await response.json();
    if (response.status !== 200) throw Error(responseInterest.message);
    console.log("User settings: ", responseInterest);
    return responseInterest;
  }

  const classes = useStyles();

  const [userID, setUserID] = React.useState(1);

  const [value, setvalue] = React.useState('');
  //const [userID, setUserID] = React.useState('');


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


  const [activity, setActivity] = React.useState("");
  const [place, setPlace] = React.useState("");
  const [time, setTime] = React.useState("");

  const [open, setOpen] = React.useState(false);



  const onChangeRating = (event) => {
    setPlace(event.target.value);
  }

  const onUpdateMovies = (item) => {
    setActivity(item);
  } 



  let [activityList, setActivityList] = React.useState([]);
  
  
const categories = ["Basketball", "Squash", "Swimming", "Gym"];




  const onApplyChanges = () => {
    const j = {
     place: place,
     activity: activity,
     time: time

  
    }

    let rev = [...activityList];
    rev.push(j); 

    setActivityList(rev);
    console.log("List is: ", activityList);

    //addReview(); 
  }

  return (
    <Container maxWidth={false} className={classes.page}>

    <Grid container spacing={2}>


        <Grid item xs={6}>

      <Typography variant="h3" gutterBottom component="div">
        Match
      </Typography>

      <FormControl component="fieldset">
        <FormLabel component="legend">Place</FormLabel>
        <RadioGroup row aria-label="position" name="Place"  
        
        helperText = {"Where would you like to go?"}

        value={place} onChange={onChangeRating}>
          
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
      </Grid>

      <Grid item xs={8}>


        <FormControl className={classes.formControl}>
        <FormLabel component="legend">Activity</FormLabel>

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


            {categories.map((cat) => {
              return (
                <MenuItem
                  value={cat}
                  onClick={() => onUpdateMovies(cat)}
                > {cat}
                </MenuItem>

              );


            })}

          </Select>

        </FormControl>

        </Grid>

        <Grid item xs={6}>

 
        <FormControl className={classes.formControl}>
        <FormLabel component="legend">Time</FormLabel>
          <label htmlFor="Time">Select a Time: </label>
          <input
            id="Time"
            type="datetime-local"
            value={time}
            onChange={(event) => setTime(event.target.value)}
          /> 
          </FormControl>
</Grid>

<Grid item xs={4}>


        <SubmitButton
              // item={item}
              label={'Submit'}
              onButtonClick={onApplyChanges}
            />

            </Grid>

            <Typography>

      <ul>
        {activityList.map((item) => {
          return (
            <li>
      <Typography>
             Place:  {item.place}
      </Typography>
      
      <Typography> 
           Activity:  {item.activity}
      </Typography>       
               
      <Typography> 
           Time:  {item.time}
      </Typography> 


          </li>
          );
        })}
      </ul>

       </Typography>

</Grid>
  </Container>

  );

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
