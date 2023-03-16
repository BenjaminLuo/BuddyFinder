// --------------------------------------------------- \/ Imports

import React from 'react';

import {
  Typography,
  Container,
  Button,
  TextField,
  Grid,
  makeStyles,
} from '@material-ui/core';
import { UsageStatistics } from './UsageStatistics';

// --------------------------------------------------- /\ Imports
// --------------------------------------------------- \/ Styles

const useStyles = makeStyles((theme) => {
  return {
    page: {
      backgroundColor: 'lightgrey',
      backgroundSize: 'cover',
      opacity: 0.9,
      padding: '40px',
      minHeight: '90vh',
    },
  }
})


const goals = [
  {
    id: 1,
    goal: "To pass 3A with 86%+",
    date: "",
    completed: false
  },
  {
    id: 2,
    goal: "To go on exchange",
    date: "",
    completed: false
  },
  {
    id: 3,
    goal: "To finish sprint 1 on time",
    date: "",
    completed: true
  }
]


export default function Statistics(props) {
  const classes = useStyles();

  const [goalObject, updateGoalObject] = React.useState(goals);
  const [nextID, upID] = React.useState(goals.length + 1);


  const handleChange = (e) => {
    goalObject[goalObject.findIndex(item => "tf" + item.id === e.target.id)].goal = e.target.value
    updateGoalObject([...goalObject])
  }

  // Find index then remove it
  const removeItem = (e) => {
    goalObject[goalObject.findIndex(item => "button" + item.id === e.target.id)].completed = true
    updateGoalObject(goalObject.filter((value, index) => value.completed !== true))
  }

  const ToDoItem = (props) => {
    return (
      <div id={props.itemID}>
        <TextField
          placeholder={'Set a goal'}
          variant="outlined"
          value={props.value}
          id={'tf' + props.itemID}
          onChange={handleChange}
          fullWidth
          size="small"
          color="primary"
          style={{ marginBottom: "20px", width: '50%' }} />

        <Button
          variant="contained"
          color="primary"
          id={'button' + props.itemID}
          onClick={removeItem}
          style={{ height: '30px', marginLeft: '15px', marginTop: '3px' }}>
          <Typography variant="h6">Done</Typography>
        </Button>
      </div>
    )
  }


  // Adds another To-Do item
  const handleAddition = () => {
    updateGoalObject([...goalObject, {
      id: nextID,
      goal: "",
      date: "",
      completed: false
    }])
    upID(nextID + 1);
  }

  return (
    <Container maxWidth={false} className={classes.page}>

      <Grid container spacing={2}>

        {/* Left Container: User goals */}
        <Grid item xs={1} />
        <Grid item xs={6}>
          <Typography gutterBottom variant="h5" style={{ marginBottom: '20px' }}>
            My To-Do List
          </Typography>

          {/* Retrieves all existing user goals */}
          {goalObject ? goalObject.map((item) => (
            item.completed ? '' :
              ToDoItem({ itemID: item.id.toString(), value: item.goal })
          )) : null}

          <Button
            type="submit"
            onClick={(e) => handleAddition(e)}
            variant="contained"
            color="primary"
            style={{ height: '30px', marginTop: '3px' }}>
            <Typography variant="h6">Add another task...</Typography>
          </Button>

        </Grid>

        {/* Right Container: Usage statistics */}
        <UsageStatistics />

      </Grid>
    </Container>
  );

}

