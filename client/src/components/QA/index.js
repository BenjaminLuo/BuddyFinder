// --------------------------------------------------- \/ Imports
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

import {
  Typography,
  makeStyles,
  Container,
  Grid,
} from '@material-ui/core';

// --------------------------------------------------- /\ Imports
// --------------------------------------------------- \/ Styles

const useStyles = makeStyles((theme) => {
  return {
    page: {
      backgroundColor: 'lightgrey',
      backgroundSize: 'cover',
      opacity: 0.9,
      minHeight: '100vh',
      padding: '120px 100px 40px 100px'
    }
  }
})


export default function QA(props) {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.page}>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h4" align="center">
            Want to share your thoughts?
          </Typography>
          <hr style={{ align: 'center', width: '10%', borderColor: 'black' }} />
          <h2 style={{ padding: '50px' }} align="left">
            Give your vote below!
          </h2>
        </Grid>
        <Stack spacing={1}>
          <Typography>Do you like PAC's recent renovation? </Typography>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        </Stack>
        <Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

