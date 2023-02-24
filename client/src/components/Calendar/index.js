import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"


const styles = theme => ({
  mainMessageContainer: {
    marginTop: "20vh",
    marginLeft: theme.spacing(20),
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(4),
    },
  },
  paper: {
    overflow: "hidden",
  },
  message: {
    maxWidth: 250,
    paddingBottom: theme.spacing(2),
  },

});


class Home extends Component {

return(
  <div>
    <p>

    </p>
    <p>
      
    </p>
        <h1>
          Calendar Page
        </h1>

        <button onClick={() => setIsFormOpen(true)}>Add Event</button>
        <AddEventForm onSubmit={addEvent} isOpen={isFormOpen} onClose={closeForm}
      />
       <p>

</p>
<p>
  
</p>
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
      
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);