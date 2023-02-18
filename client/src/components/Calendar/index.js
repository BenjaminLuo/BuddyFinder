import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";


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
    const { classes } = this.props;

    const calendarView = (
      <div>
        <FullCalendar
          headerToolbar={{
            start: "today prev next",
            end: "dayGridDay dayGridWeek dayGridMonth",
          }}
          plugins={[daygridPlugin]}
          views={["dayGridDay", "dayGridWeek", "dayGridMonth"]} />
      </div>
    )

    return (
      <div>
        <h1>
          Calendar Page
        </h1>
        {calendarView}
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
