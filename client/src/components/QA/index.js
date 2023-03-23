import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import {
  makeStyles,
  Container,  
} from '@material-ui/core';

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
      <Stack spacing={2} direction="row">
        <Button variant="outlined">Text</Button>
        <Button variant="outlined">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </Container>
  )
}

