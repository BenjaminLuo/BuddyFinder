// --------------------------------------------------- \/ Imports

import React, { useEffect } from 'react';

import {
  Typography,
  Container,
  Button,
  Tab,
  Tabs,
  TextField,
  Grid,
  makeStyles,
} from '@material-ui/core';
import { UsageStatistics } from './UsageStatistics';
import { CompletedGoals } from './completedGoals';
import { IncompleteGoals } from './incompleteGoals';
import GetFetch from '../common'

// --------------------------------------------------- /\ Imports
// --------------------------------------------------- \/ Styles

const useStyles = makeStyles((theme) => {
  return {
    page: {
      opacity: 0.9,
      padding: '40px',
      minHeight: '90vh',
    },
  }
})

export default function Statistics() {
  const classes = useStyles();
  const userID = 20890449

  // Tracking the user's goals
  const [goalObject, updateGoalObject] = React.useState([{
    id: 0,
    goal: "",
    completed: false
  }]);

  // Adding a new goal; incrementing the goal ID
  const [nextID, upID] = React.useState(0);

  // Tabber toggles
  const [tabToggle, changeTabToggle] = React.useState(0);
  const handleTabber = (event, newValue) => changeTabToggle(newValue);

  function getUserGoals() {
    return GetFetch('getUserGoals', { userID: userID })
  }
  function updateUserGoals(goalID) {
    return GetFetch('updateUserGoals', {
      goalID: goalID
    })
  }
  function addUserGoals(id, goal) {
    return GetFetch('addUserGoals', {
      id: id,
      goal: goal,
      userID: userID
    })
  }

  // Initializing user goals
  useEffect(() => {
    getUserGoals().then(goals => {
      updateGoalObject(goals)
      upID(goals.length !== 0 ? goals[goals.length - 1].id : 0)
    })
  }, [])

  // Handler for changes to any goal (ie. TextField)
  const handleChange = (e) => {
    goalObject[goalObject.findIndex(item => "tf" + item.id === e.target.id)].goal = e.target.value
    updateGoalObject([...goalObject])
  }

  // Saves entry of active textfield to database upon pressing 'Enter'
  const handleSave = (e) => {
    addUserGoals(goalObject[goalObject.findIndex(item => "tf" + item.id === e.target.id)].id, e.target.value)
  }

  // Find index then remove it
  const removeItem = (e) => {
    const targetIndex = goalObject.findIndex(item => "button" + item.id === e.target.id);
    goalObject[targetIndex].completed = true
    updateGoalObject([...goalObject]) // Trigger re-render
    updateUserGoals(goalObject[targetIndex].id) // Update database
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

  const ToDoItem = (props) => {
    return (
      <Container id={props.itemID} key={props.index}>
        <TextField
          placeholder={'Set a goal'}
          variant="outlined"
          value={props.value}
          id={'tf' + props.itemID}
          onChange={handleChange}
          fullWidth
          onKeyDown={(ev) => { if (ev.key === 'Enter') { handleSave(ev) } }}
          size="small"
          color="primary"
          style={{ marginBottom: "20px", width: '50%' }} />

        <Button
          variant="contained"
          color="primary"
          id={'button' + props.itemID}
          onClick={removeItem}
          style={{ height: '30px', marginLeft: '15px', marginTop: '3px' }}>
          <Typography variant="h6">✔</Typography>
        </Button>
      </Container>
    )
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

          <Tabs
            value={tabToggle}
            onChange={handleTabber} >
            <Tab label="Incomplete" />
            <Tab label="Completed" />
          </Tabs>
          {/* Renders tabber for incomplete goals */}
          <IncompleteGoals
            tabToggle={tabToggle}
            goalObject={goalObject}
            ToDoItem={ToDoItem}
            handleAddition={handleAddition} />
          {/* Renders tabber for completed goals */}
          <CompletedGoals currTab={tabToggle} goalData={goalObject} />

        </Grid>

        {/* Right Container: Usage statistics */}
        <UsageStatistics />

      </Grid>
    </Container >
  );

}


