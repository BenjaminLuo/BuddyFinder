import * as React from 'react';
import {
  Typography,
  Container,
  Grid,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    page: {
      backgroundColor: 'lightgrey',
      backgroundSize: 'cover',
      opacity: 0.9,
      padding: '40px',
      paddingTop: '120px'
    },
  }
})

export default function Matching(props) {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.page}>

      <Grid container spacing={2}>

        <Grid item xs={12}>
          <Typography gutterBottom variant="h4" align="center">
            Discussion Forum
          </Typography>
          <hr style={{ align: 'center', width: '10%', borderColor: 'black' }} />

          <Typography style={{ padding: '50px' }} align="center">
            Let's connect! (I'll update this text later)
          </Typography>

        </Grid>

      </Grid>
    </Container>
  )

}