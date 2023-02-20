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


export default function Statistics(props) {
  const classes = useStyles();

  const [extraToDoItems, updateExtraToDoItems] = React.useState(<ToDoItem />)
  const [goalObject, updateGoalObject] = React.useState([
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
  ]);



  function AddToDoItem(props) {
    updateExtraToDoItems([extraToDoItems, <ToDoItem />]);
  }


  return (
    <Container maxWidth={false} className={classes.page}>

      <Grid container spacing={2}>

        {/* Left Container: User goals */}
        <Grid item xs={1} />
        <Grid item xs={6}>
          <Typography gutterBottom variant="h6" style={{ marginBottom: '20px' }}>
            My To-Do List
          </Typography>

          {goalObject ? goalObject.map((item) => (
            <ToDoItem key={item.id} value={item.goal} disabled={true} />
          )) : null}

          {extraToDoItems}

          <Button
            type="submit"
            onClick={AddToDoItem}
            variant="contained"
            color="primary"
            style={{ height: '30px', marginTop: '3px' }}>
            Add another task...
          </Button>

        </Grid>


        {/* Right Container: Usage statistics */}
        <Grid item xs={4}>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ float: 'right', height: '30px', marginBottom: '15px' }}>
            Download data
          </Button>

          <TableContainer component={Paper}>
            <Table>
              <TableHead style={{ backgroundColor: '#6AAB8E' }}>
                <TableRow>
                  <TableCell align="center" colspan={2}>Usage Statistics</TableCell>
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

function createData(field, value) {
  return { field, value };
}

const rows = [
  createData('Posts', 0),
  createData('Comments', 54),
  createData('Upvotes', 49),
  createData('Scheduled Events', 12),
  createData('Scheduled Events (hours)', 43),
];

const ToDoItem = (props) => {
  return (
    <div id={props.key}>
      <TextField
        placeholder={'Set a goal'}
        disabled={props.disabled}
        focused={!props.disabled}
        value={props.value}
        variant="outlined"
        key={'tf' + props.key}
        fullWidth
        size="small"
        color="primary"
        style={{ marginBottom: "20px", width: '50%' }} />

      <Button
        variant="contained"
        key={'b' + props.key}
        color="primary"
        // onClick={RemoveItem(1)}
        style={{ height: '30px', marginLeft: '15px', marginTop: '3px' }}>
        Done
      </Button>
    </div>
  )
}


// const RemoveItem = (id) => {
//   return (
//     document.getElementById(id).value = ''
//   )
// }
