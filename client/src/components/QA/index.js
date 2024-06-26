// --------------------------------------------------- \/ Imports


import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthDetails'

import {
  Typography,
  makeStyles,
  Box,
  Button,
  TextField,
  MenuItem,
  Select,
  FormControl,
  Card,
  Grid
} from '@material-ui/core';

const serverURL = "";

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


export default function QA() {

  const [usersList, setUsersList] = React.useState([]);

  const { authUser } = useContext(AuthContext);
  const userID = authUser?.uid

  React.useEffect(() => {
    loadUsers();
  }, []);



  const loadUsers = () => {
    callApiUserNames()
      .then(res => {
        console.log("callApiUserNames returned: ", res)
        var parsed = JSON.parse(res.express);
        console.log("callApiUserNames parsed: ", parsed);

        setUsersList(parsed);
        console.log("The List is ", usersList);
      })
  }

  const callApiUserNames = async () => {
    const url = serverURL + "/api/getUsersArray";
    console.log(url);

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const arrayBody = await response.json();
    if (response.status !== 200) throw Error(arrayBody.message);
    console.log("User settings: ", arrayBody);
    return arrayBody;
  }

  const addChat = () => {
    callApiAddChat()
      .then(res => {
        console.log("callApiAddChat returned: ", res)
        var parsed = JSON.parse(res.express);
        console.log("callApiAddChat parsed: ", parsed);

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


  //const classes = useStyles();



  const [value, setValue] = React.useState('');
  const [post, setPost] = React.useState('');
  const [ran, setRan] = React.useState('');
  const [postList, setPostList] = React.useState([]);


  const chat = ["Yi Fei", "Suiyu", "A struggling student", "Ephei Tea", "NA", "Benjamin Luo"];

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
    <div align='center'>
      <Typography gutterBottom variant="h3" align="center">
        Want to share your thoughts?
      </Typography>
      <hr style={{ align: 'center', width: '10%', borderColor: 'black' }} />

      <Card style={{
        color: 'white',
        backgroundColor: '#99A1A6',
        marginTop: '50px',
        height: '250px',
        width: '900px',
        marginBottom: '50px'
      }}>

        <p style={{ marginTop: '75px' }}></p>
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

      <Grid>

        <Typography>

          {postList.map((item) => {
            return (
              <ul>
                <Typography>
                  To:  {item.post}
                </Typography>

                <Typography>
                  Message:  {item.ran}
                </Typography>

              </ul>
            );
          })}
        </Typography>
      </Grid>

      <Grid>

        <Typography>

          {usersList.map((item) => {
            return (
              <ul>
                <Typography>
                  To:  {item.display_name}
                </Typography>

                <Typography>
                  Message:  {item.content}
                </Typography>

              </ul>
            );
          })}
        </Typography>
      </Grid>

    </div>

  )
}

