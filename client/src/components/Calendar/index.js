import React, { Component } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useState, useEffect, useContext } from 'react';
import Grid from "@material-ui/core/Grid";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './calendar.css';

import { AuthContext } from '../Authentication/AuthDetails'

const serverURL = "";

const AddEventForm = ({ isOpen, onClose, onSubmit }) => {
  const [eventName, setEventName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [eventColour, setEventColour] = useState('');
  const [eventRecurrence, setEventRecurrence] = useState('none');

  const { authUser } = useContext(AuthContext);
  const userID = authUser?.uid


  const addCalendar = () => {
    callApiAddCalendar()
      .then(res => {
        console.log("callApiAddCalendar returned: ", res)
        var parsed = JSON.parse(res.express);
        console.log("callApiAddCalendar parsed: ", parsed);
        //    setActivitiesList(parsed);
      })
  }

  const callApiAddCalendar = async () => {
    const url = serverURL + "/api/addCalendar";
    console.log(url);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify({
        eventName: eventName,
        startTime: startTime,
        endTime: endTime,
        userID: userID
      })
    });
    const responseCalendar = await response.json();
    if (response.status !== 200) throw Error(responseCalendar.message);
    console.log("User settings: ", responseCalendar);
    return responseCalendar;
  }

  const handleSubmit = (event) => {

    console.log("I'm here");
    event.preventDefault();
    onSubmit({ eventName, startTime, endTime, eventColour, eventRecurrence });
    onClose();
    setEventName('');
    setStartTime('');
    setEndTime('');
    addCalendar();



  };


  return isOpen ? (
    <div className="popup-form">
      <form onSubmit={handleSubmit}>
        <Grid>
          <label htmlFor="eventName">Enter your event name:</label>
          <input
            id="eventName"
            type="text"
            value={eventName}
            onChange={(event) => setEventName(event.target.value)}
          />
        </Grid>

        <Grid>
          <label htmlFor="startTime">Enter your start time -- YYYY-MM-DD, HH:MM AM/PM:</label>
          <input
            id="startTime"
            type="datetime-local"
            value={startTime}
            onChange={(event) => setStartTime(event.target.value)}
          />
        </Grid>

        <Grid>
          <label htmlFor="endTime">Enter your end time -- YYYY-MM-DD, HH:MM AM/PM:</label>
          <input
            id="endTime"
            type="datetime-local"
            value={endTime}
            onChange={(event) => setEndTime(event.target.value)}
          />
        </Grid>
        <Grid>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Event Colour</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="eventColour"
              name="radio-buttons-group"
              value={eventColour}
              onChange={(event) => setEventColour(event.target.value)}

            >
              <FormControlLabel value="red" control={<Radio />} label="Red" />
              <FormControlLabel value="blue" control={<Radio />} label="Blue" />
              <FormControlLabel value="green" control={<Radio />} label="Green" />
              <FormControlLabel value="purple" control={<Radio />} label="Purple" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 500 }}>
            <InputLabel id="demo-simple-select-label"> Select Recurrence</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={eventRecurrence}
              label="Age"
              onChange={(event) => setEventRecurrence(event.target.value)}
            >
              <MenuItem value={"none"}>None</MenuItem>
              <MenuItem value={"daily"}>Daily</MenuItem>
              <MenuItem value={"weekly"}>Weekly</MenuItem>
              <MenuItem value={"monthly"}>Monthly</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Button variant="contained">Submit</Button>
      </form>
    </div>
  ) : null;
}

const Calendar = () => {




  const [isFormOpen, setIsFormOpen] = useState(false);
  const [events, setEvents] = useState([]);


  const addEvent = (newEvent) => {


    if (newEvent.eventRecurrence === 'none') {
      setEvents([...events, {
        title: newEvent.eventName,
        start: newEvent.startTime,
        end: newEvent.endTime,
        color: newEvent.eventColour,
      }]);
    } else {
      let start = new Date(newEvent.startTime);
      let end = new Date(newEvent.endTime);
      const recurringEvents = [{ title: newEvent.eventName, start: start, end: end }];

      while (start <= new Date('2200-01-01')) {
        if (newEvent.eventRecurrence === 'daily') {
          start.setDate(start.getDate() + 1);
          end.setDate(end.getDate() + 1);
        } else if (newEvent.eventRecurrence === 'weekly') {
          start.setDate(start.getDate() + 7);
          end.setDate(end.getDate() + 7);
        } else if (newEvent.eventRecurrence === 'monthly') {
          start.setMonth(start.getMonth() + 1);
          end.setMonth(end.getMonth() + 1);
        }

        if (start <= new Date('2200-01-01')) {
          recurringEvents.push({
            title: newEvent.eventName,
            start: new Date(start),
            end: new Date(end),
            color: newEvent.eventColour,
          });
        }
      }

      setEvents([...events, ...recurringEvents]);
    }
  }




  const closeForm = () => {
    setIsFormOpen(false);
  };

  const eventClick = ({ event }) => {
    if (window.confirm("Are you sure you want to delete this event from your calendar?")) {
      event.remove();
    }
  };

  return (
    <div className="container">
      <p>

      </p>

      <Button
        variant= "contained"
        color = "primary"
        size="large"
        onClick={() => {
          setIsFormOpen(true);
        }}>
        Add Event</Button>
      <AddEventForm onSubmit={addEvent} isOpen={isFormOpen} onClose={closeForm}
      />
      <p>

      </p>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Search by event name" variant="outlined" />
      </Box>
      <p>

      </p>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        intialView={"timeGridWeek"}
        editable
        selectable
        eventClick={eventClick}
        events={events}
        headerToolbar={{
          start: "today prev next",
          center: "title",
          end: "dayGridDay dayGridWeek dayGridMonth",
          right: "dayGridMonth,timeGridWeek,timeGridDay"
        }}
        views={["dayGridDay", "dayGridWeek", "dayGridMonth"]} />

    </div>
  );
      }
    

export default Calendar;