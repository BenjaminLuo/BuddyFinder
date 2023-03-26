// --------------------------------------------------- \/ Imports
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

import {
  Typography,
  makeStyles,
  Container,
  Grid,
  Box,
  Button,
  TextField,
  MenuItem,
  Select,
  FormControl,
  Card
} from '@material-ui/core';

const serverURL = "";

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

  const addChat = () => {
    callApiAddChat()
      .then(res => {
        console.log("callApiAddChat returned: ", res)
        var parsed = JSON.parse(res.express);
        console.log("callApiAddChat parsed: ", parsed);
        //    setActivitiesList(parsed);
      })
  }

  const callApiAddChat = async () => {
    const url = serverURL + "/api/addChat";
    console.log(url);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify({
        post: post,
        ran: ran,
        userID: userID
      })
    });
    const responseInterest = await response.json();
    if (response.status !== 200) throw Error(responseInterest.message);
    console.log("User settings: ", responseInterest);
    return responseInterest;
  }

  const classes = useStyles();

  const [userID, setUserID] = React.useState(1);

  const [value, setValue] = React.useState('');
  const [post, setPost] = React.useState('');
  const [ran, setRan] = React.useState('');
  const [postList, setPostList] = React.useState([]);

  const chat = ["1", "2", "3"];

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const [open, setOpen] = React.useState(false);

  const onUpdateTown = (item) => {
    setPost(item);
  }

  const handleAddedPost = (event) => {
    setRan(event.target.value);
  }

  const onApplyPost = () => {
    const q = {
      post: post,
      ran: ran,
      userID: userID
    }

    let rez = [...postList];
    rez.push(q);

    setPostList(rez);
    console.log("List is: ", postList);

    addChat();
  }

  return (
    <div align = 'center'>
        <Typography gutterBottom variant="h3" align="center">
    Want to share your thoughts?
  </Typography>
  <hr style={{ align: 'center', width: '10%', borderColor: 'black' }} />

      <Card style={{color: 'white',
              backgroundColor: '#99A1A6',
              marginTop: '50px',
              height: '250px',
              width: '900px',
              marginBottom: '50px'}}>

  <p style={{marginTop: '75px'}}></p>
  <Box
          sx={{
            width: 500,
            maxWidth: '100%',
          }}
        >
          <div>
            <FormControl style={{ minWidth: 120 }}>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"

                helperText={"Select an activity you like most"}

                autoWidth
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                onChange={handleChange}
              >

                <MenuItem value="">
                  <em>None</em>
                </MenuItem>

                {chat.map((ch) => {
                  return (
                    <MenuItem
                      value={ch}
                      onClick={() => onUpdateTown(ch)}
                    > {ch}
                    </MenuItem>

                  );
                })}
              </Select>
            </FormControl>
          </div>
          <br></br>
          <div>
            <TextField fullWidth label="Add your status update" id="addedNews" onChange={handleAddedPost} />
          </div>

          <Button
            variant="contained"
            color="success"
            id={'button'}

            onClick={onApplyPost}

            style={{ height: '30px', marginLeft: '400px', marginTop: '0px' }}>
            Post
          </Button>
        </Box>


      </Card>

    </div>
    
  )
}

