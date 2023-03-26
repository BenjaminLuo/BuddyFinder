import * as React from 'react';
import {
  Typography,
  Container,
  Grid,
  makeStyles,
  TextField,
  Button,
  Box,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel
} from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    page: {
      backgroundColor: '#A8C69F',
      backgroundSize: 'cover',
      opacity: 0.9,
      //padding: '40px',
      paddingTop: '40px',
      minHeight: '100vh',
    },
  }
})

const Discussion = () => {

  const classes = useStyles();

  // GENERAL NEWS LIST
  const newsGeneral = [
    {
      title: 'I just went to the grocery store and bought cheese.',
      author: "Carla",
    }, {
      title: 'Bob in IT just said I am playing my music too loud in my cubicle.',
      author: "Stacy",
    },
    {
      title: 'University will be closed next week Wednesday!! Gotta cancel our plans for badminton',
      author: "Beth",
    },
    {
      title: 'Just got back from my week long Caribbean cruise.',
      author: "Mark",
    },
  ];

  //PHYSICAL ACTIVITY NEWS LIST 
  const newsPhys = [
    {
      title: 'The Warriors have a game againsts Laurier this weekend. Anyone down?',
      author: "Henry",
    }, {
      title: 'My midterms are over. I can play some badminton this Friday after 4:00 PM.',
      author: "Sophie",
    },
    {
      title: 'Have never played volleyball before. Can anyone teach me some tricks?',
      author: "Amanda",
    },
    {
      title: 'I will be joining the table tennis club this term!',
      author: "Akib",
    },
  ];

  //SOCIAL EVENTS NEWS LIST
  const newsSocial = [
    {
      title: 'I have been grinding 342 lately. I am down for some lunch tonight!',
      author: "Benjamin",
    }, {
      title: 'Heard about free Iftar meals next Thursday?',
      author: "Anyka",
    },
    {
      title: 'I will be volunteering for bake sale at the end of this term!',
      author: "Akib",
    },
  ];

  const [newsSearchTerm, setNewsSearchTerm] = React.useState(''); //search by news
  const [authorTerm, setAuthorTerm] = React.useState(''); //search by author
  const [addedNewsTerm, setAddedNewsTerm] = React.useState(''); //user inputted news
  const [addedNameTerm, setAddedNameTerm] = React.useState(''); //user inputted author

  // LISTS FOR EACH SUB FORUM
  const [newsGeneralList, setNewsGeneralList] = React.useState([]);
  const [newsSocialList, setNewsSocialList] = React.useState([]);
  const [newsPhysList, setNewsPhysList] = React.useState([]);

  //Radio group values
  const [general, setGeneral] = React.useState('');
  const [phys, setPhys] = React.useState('');
  const [social, setSocial] = React.useState('');

  // validation checks
  const [error, seterror] = React.useState(false); //texfields

  //EVENT HANDLERS FOR TEXTFIELDS
  const handleNewsSearch = (event) => {
    setNewsSearchTerm(event.target.value);
  };

  const handleAuthorSearch = (event) => {
    setAuthorTerm(event.target.value);
  };

  const handleAddedNews = (event) => {
    setAddedNewsTerm(event.target.value);
  };

  const handleAddedName = (event) => {
    setAddedNameTerm(event.target.value);
  }

  //EVENT HANDLERS FOR RADIOGROUP
  const handleGeneral = (event) => {
    setGeneral(event.target.value);
  }

  const handlePhys = (event) => {
    setPhys(event.target.value);
  }

  const handleSocial = (event) => {
    setSocial(event.target.value);
  }

  // FILTER SEARCH COMPONENT FOR GENERAL ***********************************************
  const foundGeneralNewsbyTitle = newsGeneral.filter(function (item) {
    if (newsSearchTerm) {
      return item.title.includes(newsSearchTerm);
    } else {
      return item;
    }
  });

  const foundGeneralNewsbyAuthor = foundGeneralNewsbyTitle.filter(function (item) {
    if (authorTerm) {
      return item.author === authorTerm;
    } else {
      return item;
    }
  });

  // FILTER SEARCH COMPONENT FOR SOCIAL *********************************************
  const foundSocialNewsbyTitle = newsSocial.filter(function (item) {
    if (newsSearchTerm) {
      return item.title.includes(newsSearchTerm);
    } else {
      return item;
    }
  });

  const foundSocialNewsbyAuthor = foundSocialNewsbyTitle.filter(function (item) {
    if (authorTerm) {
      return item.author === authorTerm;
    } else {
      return item;
    }
  });git 

  // FILTER SEARCH COMPONENT FOR PHYSICAL ACTIVITY *********************************************
  const foundPhysNewsbyTitle = newsPhys.filter(function (item) {
    if (newsSearchTerm) {
      return item.title.includes(newsSearchTerm);
    } else {
      return item;
    }
  });

  const foundPhysNewsbyAuthor = foundPhysNewsbyTitle.filter(function (item) {
    if (authorTerm) {
      return item.author === authorTerm;
    } else {
      return item;
    }
  });

  // ******************* ADD USER INPUTTED VALUES TO LISTS *******************
  const onApplyAddition = () => {
    //VALIDATE IF USER INPUTTED VALUES
    if (addedNewsTerm.length == 0 || addedNameTerm.length == 0) {
      seterror(true);
    }
    //PUSH INPUT TO CORRESPONSING GENERAL FORUM
    if (general.length > 1) {
      const q = {
        News: addedNewsTerm,
        Name: addedNameTerm,
      }

      let arrayAdd = [...newsGeneralList];
      arrayAdd.push(q);

      setNewsGeneralList(arrayAdd);
      console.log("News List in General is: ", newsGeneralList);
      setGeneral('');

      //PUSH INPUT TO CORRESPONSING SOCIAL FORUM
    } if (social.length > 1) {
      const q = {
        News: addedNewsTerm,
        Name: addedNameTerm,
      }

      let arrayAdd = [...newsSocialList];
      arrayAdd.push(q);

      setNewsSocialList(arrayAdd);
      console.log("News List in General is: ", newsSocialList);
      setSocial('');
    }
    //PUSH INPUT TO CORRESPONSING PHYSICAL ACTIVITY FORUM
    if (phys.length > 1) {
      const q = {
        News: addedNewsTerm,
        Name: addedNameTerm,
      }

      let arrayAdd = [...newsPhysList];
      arrayAdd.push(q);

      setNewsPhysList(arrayAdd);
      console.log("News List in General is: ", newsPhysList);
      setPhys('');
    }
    else {
      
    }
  }

  return (
    <div>
      <Container maxWidth={false} className={classes.page}>
        <Typography variant="h3" gutterBottom component="div">
          News
        </Typography>

        <Grid container spacing={1}>
          {/* *************************** Left container ************************************** */}
          <Grid item xs={1} />
          <Grid item xs={6}>

            {/* SEARCH SECTION */}
            <Typography gutterBottom variant="h4" style={{ marginBottom: '20px' }}>
              Search
            </Typography>
            <Typography>By news</Typography>
            <Search
              label="By news title: "
              onSearch={handleNewsSearch}
            />
            <br></br>
            <Typography>By author</Typography>
            <Search
              label="By news author: "
              onSearch={handleAuthorSearch}
            />
            <br></br>
            <p>
              Keywords: <i>{newsSearchTerm}</i>
            </p>
            <p>
              Author: <i>{authorTerm}</i>{general}{social}{phys}
            </p>
            <br></br>

            {/* ADD YOUR NEWS IN SUB FORUM */}
            <Typography gutterBottom variant="h4" style={{ marginBottom: '20px' }}>
              Add your news
            </Typography>
            <Box
              sx={{
                width: 500,
                maxWidth: '100%',
              }}
            >
              <div>
                <TextField fullWidth label="Add your status update" id="addedNews" onChange={handleAddedNews} />
              </div>
              <div>
                {(error && addedNewsTerm.length <= 0) ?
                  <label>Status update is required for posting</label> : ""}
              </div>
              <br></br>
              <div>
                <TextField id="addedName" label="Your name" variant="standard" onChange={handleAddedName} />
              </div>
              <div>
                {(error && addedNameTerm <= 0) ?
                  <label>Author name is required for posting</label> : ""}
              </div>
              <br></br>

              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Choose your sub forum</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="subForum"
                >
                  <FormControlLabel value="General" control={<Radio />} label="General" onChange={handleGeneral} />
                  <FormControlLabel value="Physical Activity" control={<Radio />} label="Physical Activity" onChange={handlePhys} />
                  <FormControlLabel value="Social Event" control={<Radio />} label="Social Event" onChange={handleSocial} />
                </RadioGroup>
              </FormControl>

              <Button
                variant="contained"
                color="success"
                id={'button'}
                onClick={onApplyAddition}
                style={{ height: '30px', marginLeft: '400px', marginTop: '0px' }}>
                Add
              </Button>
            </Box>

          </Grid>


          {/* *************************** Right container ************************************** */}
          <Grid item xs={4}>
            <Typography gutterBottom variant="h4" style={{ marginBottom: '20px' }}>
              Discussion
            </Typography>

            <p>Check out your feed for the following sub threads: </p>

            {/* SHOW THE LIST OF GENERAL THREADS */}
            <h3>GENERAL</h3>
            <List list={foundGeneralNewsbyAuthor} />
            <Grid>
              {newsGeneralList.map((item) => {
                if (item.News !== '' && item.Name !== ''){
                return (
                  <li>
                    <p> {"News title: " + item.News}</p>
                    <p> {"Author: " + item.Name}</p>
                  </li>
                );
                } 
              })}
            </Grid>

            {/* SHOW THE LIST OF SOCIAL THREADS */}
            <h3>SOCIAL EVENTS</h3>
            <List list={foundSocialNewsbyAuthor} />
            <Grid>
              {newsSocialList.map((item) => {
                if (item.News !== '' && item.Name !== ''){
                return (
                  <li>
                    <p> {"News title: " + item.News}</p>
                    <p> {"Author: " + item.Name}</p>
                  </li>
                );
                }
              })}
            </Grid>

            {/* SHOW THE LIST OF PHYSICAL ACTIVITY THREADS */}
            <h3>PHYSICAL ACTIVITY</h3>
            <List list={foundPhysNewsbyAuthor} />
            <Grid>
              {newsPhysList.map((item) => {
                if (item.News !== '' && item.Name !== ''){
                return (
                  <li>
                    <p> {"News title: " + item.News}</p>
                    <p> {"Author: " + item.Name}</p>
                  </li>
                );
                }
              })}
            </Grid>
            <Grid item xs={1} />
          </Grid>
        </Grid>

      </Container>
    </div>
  );
}

const Search = (props) => (
  <div>
    <TextField id="outlined-basic" label="Search (Case sensitive)" variant="outlined" onChange={props.onSearch} />
  </div>
);

const List = (props) => {
  return (
    <ul>
      {props.list.map((item) => {
        return (
          <Item item={item} />
        );
      })}
    </ul>

  )
}

const Item = (props) => {
  return (
    <li>
      <p> {"News title: " + props.item.title}</p>
      <p> {"Author: " + props.item.author}</p>
    </li>
  )
}

export default Discussion;
