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
import Card from '@material-ui/core/Card';
import { styled } from '@material-ui/core/styles';
import Stack from '@mui/material/Stack';
import { object } from 'prop-types';
import Box from "@material-ui/core/Box";

const serverURL = "";


const useStyles = makeStyles((theme) => {

  return {
    page: {
      backgroundColor: '#A8C69F',
      backgroundSize: 'cover',
      opacity: 0.9,
      //padding: '40px',
      //paddingTop: '120px',
      minHeight: '100vh',
    },
    smallRadioButton: {
      "& svg": {
        width: "2em",
        height: "2em"
      }
    }
  }

})

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: '#0a0a0a',
  padding: theme.spacing(1),
}));

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


  const handleActivitySearch = () => {
    callApiSearchActivity()
      .then(res => {
        console.log("callApiSearchActivity returned: ", res)
        var parsed = JSON.parse(res.express);
        console.log("callApiSearchActivity parsed: ", parsed[0])
        setSearchResultsList(parsed);
      });
  }

  const callApiSearchActivity = async () => {

    const url = serverURL + "/api/searchActivity";
    console.log(url);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //authorization: `Bearer ${this.state.token}`
      },
      body: JSON.stringify({
        place: place,
        activity: activity,
        time: time,
        userID: userID
      })
    });
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    console.log("Found Activities: ", body);
    return body;
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

  const [loc, setLoc] = React.useState(true);



  const onChangeRating = (event) => {
    setPlace(event.target.value);
  }

  const onUpdateMovies = (item) => {
    setActivity(item);
  }



  let [activityList, setActivityList] = React.useState([]);


  const categories = ["Basketball", "Squash", "Swimming", "Gym", "Golf"];
  const cat = ["Basketball", "Gym", "Soccer"];


  const [searchResultsList, setSearchResultsList] = React.useState([]);
  const [submitSearchList, setSubmitSearchList] = React.useState([]);

  const onApplySearch = () => {
    const s = {
      place: place,
      activity: activity,
      time: time
    }

    let arraySearch = [...submitSearchList];
    arraySearch.push(s);

    setSubmitSearchList(arraySearch);
    console.log("Search List is: ", submitSearchList);

    handleActivitySearch();
  }

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

    addInterest();
  }

  return (

    <div align="center" style={{
      backgroundcolor: '#5C5D8D',
    }}>
      <Card style={{
        color: 'white',
        backgroundColor: '#A8C69F',
      }}
      >
        <Typography variant="h1" gutterBottom component="div">
          Match
        </Typography>
      </Card>
      <Card style={{
        color: 'white',
        backgroundColor: '#A8C69F',
        marginTop: '50px',
        height: '700px',
        width: '900px',
        marginBottom: '50px'
      }}>

        <Grid>
          <FormControl>
            <Typography variant="h3" gutterBottom component="div">
              Place
            </Typography>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="Place"
              value={place} onChange={onChangeRating}
              className={classes.smallRadioButton}

            >
              <FormControlLabel value="PAC" control={<Radio color="primary" />} label="PAC" labelPlacement='bottom' />
              <FormControlLabel value="CIF" control={<Radio color="primary" />} label="CIF" labelPlacement='bottom' />
            </RadioGroup>
          </FormControl>

        </Grid>
        <p style={{ marginTop: '75px' }}></p>

        <Grid>
          <FormControl className={classes.formControl}>
            <Typography variant="h3" gutterBottom component="div">
              Activity
            </Typography>

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

              {(place === "CIF") ?

                cat.map((categ) => {
                  return (
                    <MenuItem
                      value={categ}
                      onClick={() => onUpdateMovies(categ)}
                    > {categ}
                    </MenuItem>

                  );
                })

                :

                categories.map((cate) => {
                  return (
                    <MenuItem
                      value={cate}
                      onClick={() => onUpdateMovies(cate)}
                    > {cate}
                    </MenuItem>

                  );
                })

              }

            </Select>



          </FormControl>


        </Grid>
        <p style={{ marginTop: '75px' }}></p>
        <Grid >

          <Typography variant="h3" gutterBottom component="div">
            Select a Time
          </Typography>
          <FormControl className={classes.formControl}>
            <FormLabel component="legend"></FormLabel>
            <label htmlFor="Time"> </label>
            <input
              id="Time"
              type="datetime-local"
              value={time}
              onChange={(event) => setTime(event.target.value)}
            />
          </FormControl>
          <p style={{ marginTop: '75px' }}></p>

          <Grid >

            <div style={{
              width: '200px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
              <SubmitButton
                // item={item}
                label={'Submit'}
                onButtonClick={onApplyChanges}
              />

              <SearchButton
                // item={item}
                label={'Search'}
                onButtonClick={onApplySearch}
              />
            </div>


          </Grid>
          <p style={{ marginTop: '75px' }}></p>
          <Grid>

          </Grid>
        </Grid>

      </Card>

      <Card style={{
        color: 'white',
        backgroundColor: '#A8C69F',
      }}
      >

        <Grid>

          <Typography>

            {activityList.map((item) => {
              return (
                <ul>
                  <Typography>
                    Place:  {item.place}
                  </Typography>

                  <Typography>
                    Activity:  {item.activity}
                  </Typography>

                  <Typography>
                    Time:  {item.time}
                  </Typography>

                </ul>
              );
            })}
          </Typography>
        </Grid>

        <Grid>



          <Typography>

            {searchResultsList.map((item) => {
              return (
                <ul>
                  <Div>
                    <Typography>
                      User:  {item.firstName}
                    </Typography>

                    <Typography>
                      Place:  {item.location}
                    </Typography>

                    <Typography>
                      Activity:  {item.action}
                    </Typography>

                    <Typography>
                      Time:  {item.time}
                    </Typography>
                  </Div>
                </ul>
              );
            })}
          </Typography>
        </Grid>



      </Card>

    </div>


  );

}

const SubmitButton = ({ label, onButtonClick }) => (
  <Button
    type="button"
    variant="contained"
    color="success"
    onClick={(event) => onButtonClick(event)}
  >
    {label}
  </Button>
)

const SearchButton = ({ label, onButtonClick }) => (

  <Button
    type="button"
    variant="contained"
    color="success"
    onClick={(event) => onButtonClick(event)}
  >
    {label}
  </Button>
)