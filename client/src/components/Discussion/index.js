import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import {
  Typography,
  Container,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
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


const textfield = 2;

export default function Discussion(props) {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.page}>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h4" align="center">
            News feed
          </Typography>
          <hr style={{ align: 'center', width: '10%', borderColor: 'black' }} />
          <h2 style={{ padding: '50px' }} align="left">
            Drop your latest feed below!
          </h2>
        </Grid>
        <Box
          sx={{
            width: 500,
            maxWidth: '100%',
          }}
        >
          <TextField fullWidth label="What's on your mind?" id="fullWidth" />
        </Box>

        <Stack spacing={2} direction="column">
          <Button id='btn1' variant="outlined">Share</Button>
        </Stack>
      </Grid>
      <Typography gutterBottom variant="h5" align="right">
        Here is what is on your feed:
      </Typography>
      <Typography gutterBottom variant="h5" align="right">
        {textfield}
      </Typography>
    </Container>
  )

}