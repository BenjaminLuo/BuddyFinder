import React, { Component } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useState } from 'react';
import Grid from "@material-ui/core/Grid";


const AddEventForm = ({ isOpen, onClose, onSubmit }) =>{
  const [eventName, setEventName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ eventName, startTime, endTime });
    onClose();
    setEventName('');
    setStartTime('');
    setEndTime('');
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
        <button type="submit">Submit</button>
      </form>
    </div>
  ) : null;
}

const Calendar = () => {
const [isFormOpen, setIsFormOpen] = useState(false);
const [events, setEvents] = useState([]);
const addEvent = (newEvent) => {
  setEvents([...events, {
    title: newEvent.eventName,
    start: newEvent.startTime,
    end: newEvent.endTime,
  }]);}

const closeForm = () => {
  setIsFormOpen(false);
};

const eventClick = ({event}) => {
  if (window.confirm("Are you sure you want to delete this event from your calendar?")) {
    event.remove();
  }
};

return(
  <div>
        <h1>
          Calendar Page
        </h1>
        <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin]}
      intialView={"timeGridWeek"}
      editable
      selectable
      eventClick = {eventClick}
      events={events}
      headerToolbar={{
        start: "today prev next",
        center: "title",
        end: "dayGridDay dayGridWeek dayGridMonth",
        right: "dayGridMonth,timeGridWeek,timeGridDay"
      }}
      views={["dayGridDay", "dayGridWeek", "dayGridMonth"]} />

        <button onClick={() => setIsFormOpen(true)}>Add Event</button>
        <AddEventForm onSubmit={addEvent} isOpen={isFormOpen} onClose={closeForm}
      />
      </div>
);
}

export default Calendar;