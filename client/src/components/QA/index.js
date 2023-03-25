// --------------------------------------------------- \/ Imports
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Card from '@material-ui/core/Card';

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
      backgroundColor: '#A8C69F',
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
    <div align = 'center'>
        <Typography gutterBottom variant="h3" align="center">
    Want to share your thoughts?
  </Typography>
  <hr style={{ align: 'center', width: '10%', borderColor: 'black' }} />

      <Card style={{color: 'white',
              backgroundColor: '#99A1A6',
              marginTop: '50px',
              height: '600px',
              width: '900px',
              marginBottom: '50px'}}>

  <p style={{marginTop: '75px'}}></p>
  <Stack spacing={1.5} alignItems = 'center'>
  <Typography variant = "h6">Do you like PAC's recent renovation? </Typography>
  <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
</Stack>
<p style={{marginTop: '75px'}}></p>
<Stack spacing={1.5} alignItems = 'center'>
  <Typography variant = "h6">Prompt #2 </Typography>
  <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
</Stack>
<p style={{marginTop: '75px'}}></p>
<Stack spacing={1.5} alignItems = 'center'>
  <Typography variant = "h6"> Prompt #3 </Typography>
  <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
</Stack>
      </Card>

    </div>
    
  )
}

