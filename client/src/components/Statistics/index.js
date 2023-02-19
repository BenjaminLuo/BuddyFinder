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
      height: '100vh',
    },
  }
})


export default function Statistics(props) {
  const classes = useStyles();


  return (
    <Container maxWidth={false} className={classes.page}>

      <Grid container spacing={2}>

        {/* Left Container: User goals */}
        <Grid item xs={1} />
        <Grid item xs={6}>
          <Typography gutterBottom variant="h6" style={{ marginBottom: '20px' }}>
            My To-Do List
          </Typography>

          <ToDoItem label="Set a goal..." />
          <ToDoItem label="Set a goal..." />
          <ToDoItem label="Set a goal..." />

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
    <div>
      <TextField
        placeholder={props.label}
        variant="outlined"
        fullWidth
        size="small"
        style={{ marginBottom: "20px", width: '50%' }} />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ height: '30px', marginLeft: '15px', marginTop: '3px' }}>
        Done
      </Button>
    </div>
  )
}
