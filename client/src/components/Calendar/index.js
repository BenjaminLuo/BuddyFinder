import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import FullCalendar from "@fullcalendar/react";
// import daygridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction"


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






  render() {

    const events = [{
      title: "test",
      start: "2023-02-25T12:00:00+00:00",
      end: "2023-02-27"
    }]

    const { classes } = this.props;

    // const calendarView = (

    //   <div>

    //     <FullCalendar
    //       plugins={[daygridPlugin, interactionPlugin, timeGridPlugin]}
    //       intialView={"timeGridWeek"}
    //       editable
    //       selectable
    //       //select = {handleSelect}
    //       events={events}
    //       headerToolbar={{
    //         start: "today prev next",
    //         end: "dayGridDay dayGridWeek dayGridMonth",
    //         right: "dayGridMonth,timeGridWeek,timeGridDay"
    //       }}
    //       views={["dayGridDay", "dayGridWeek", "dayGridMonth"]} />
    //   </div>
    // )

    return (
      <div>
        <h1>
          Calendar Page
        </h1>
        {/* {calendarView} */}
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
