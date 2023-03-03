// --------------------------------------------------- \/ Imports

import React from 'react';

import {
  Typography,
  Container,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  TableHead,
  Paper,
  Button,
  TextField,
  Grid,
  makeStyles,
} from '@material-ui/core';

// --------------------------------------------------- /\ Imports
// --------------------------------------------------- \/ Styles

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


const goals = [
  {
    id: 1,
    goal: "",
    date: "",
    completed: false
  },
]


export default function Discussion(props) {
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
          placeholder={'Im feeling lucky...'}
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
          Done
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
            Post your latest feed!
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
            Post another update
          </Button>

        </Grid>


        {/* Right Container: Usage statistics */}
        <Grid item xs={4}>

          <TableContainer component={Paper}>
            <Table>
              <TableHead style={{ backgroundColor: '#6AAB8E' }}>
                <TableRow>
                  <TableCell align="center" colSpan={2}>What's on your feed today</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow>
                    <TableCell>{row.field}</TableCell>
                    <TableCell align="right">{row.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Grid item xs={1} />

        </Grid>

      </Grid>
    </Container>
  );

}

function createData(field) {
  return { field };
}

const rows = [
  createData('I just went to the grocery store and bought cheese.'),
  createData('Bob in IT just said I am playing my music too loud in my cubicle. I HATE him! Maybe he should spend more time fixing the network, which is down again, and less time judging me. Now I have another meeting and I am behind on my project again. I hate Mondays!'),
  createData('University will be closed next week Wednesday!! Gotta cancel our plans for badminton'),
  createData('Just got back from my week long Caribbean cruise. I almost dont have enough time to pack for my business trip in Florida in 2 days'),
];
