import * as React from 'react';
import {
  Typography,
  Container,
  Grid,
  makeStyles,
  TextField,
  Button,
  Box
} from '@material-ui/core';

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

const Discussion = () => {

  const classes = useStyles();

  const news = [
    {
      title: 'I just went to the grocery store and bought cheese.',
      author: "Carla",
    }, {
      title: 'Bob in IT just said I am playing my music too loud in my cubicle. I HATE him! Maybe he should spend more time fixing the network, which is down again, and less time judging me. Now I have another meeting and I am behind on my project again. I hate Mondays!',
      author: "Stacy",
    },
    {
      title: 'University will be closed next week Wednesday!! Gotta cancel our plans for badminton',
      author: "Beth",
    },
    {
      title: 'Just got back from my week long Caribbean cruise. I almost dont have enough time to pack for my business trip in Florida in 2 days',
      author: "Mark",
    },
  ];

  const [newsSearchTerm, setNewsSearchTerm] = React.useState('');
  const [authorTerm, setAuthorTerm] = React.useState('');

  const [addedNewsTerm, setAddedNewsTerm] = React.useState('');
  const [addedNameTerm, setAddedNameTerm] = React.useState('');
  const [newsList, setNewsList] = React.useState([]);

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

  const foundNewsbyTitle = news.filter(function (item) {
    if (newsSearchTerm) {
      return item.title.includes(newsSearchTerm);
    } else {
      return item;
    }
  });

  const foundNewsbyAuthor = foundNewsbyTitle.filter(function (item) {
    if (authorTerm) {
      return item.author === authorTerm;
    } else {
      return item;
    }
  });

  const onApplyAddition = () => {
    const q = {
      Names: addedNameTerm,
      News: addedNewsTerm,
     }
 
     let arrayAdd = [...newsList];
     arrayAdd.push(q); 
 
     setNewsList(arrayAdd);
     console.log("News List is: ", newsList);
 
     //handleMovieSearch();
  }

  return (
    <div>
      <Container maxWidth={false} className={classes.page}>
        <Grid container spacing={2}>
          {/* Left container */}
          <Grid item xs={1} />
          <Grid item xs={6}>
            <Typography gutterBottom variant="h5" style={{ marginBottom: '20px' }}>
              Search
            </Typography>
            <h5>(Case sensitive)</h5>
            <Search
              label="By news title: "
              onSearch={handleNewsSearch}
            />
            <br></br>
            <Search
              label="By news author: "
              onSearch={handleAuthorSearch}
            />
            <br></br>
            <p>
              Keywords: <i>{newsSearchTerm}</i>
            </p>
            <p>
              Author: <i>{authorTerm}</i> {addedNewsTerm} + {addedNameTerm}
            </p>
            <br></br>
            <Typography gutterBottom variant="h5" style={{ marginBottom: '20px' }}>
              Add your news
            </Typography>
            <Box
              sx={{
                width: 500,
                maxWidth: '100%',
              }}
            >
              <div>
                <TextField fullWidth label="Add your status update" id="addedNews" onChange={handleAddedNews}/>
              </div>
              <br></br>
              <div>
                <TextField id="addedName" label="Your name" variant="standard" onChange={handleAddedName} />
              </div>
              <br></br>
              <Button
                variant="contained"
                color="primary"
                id={'button'}
                 onClick={onApplyAddition}
                style={{ height: '30px', marginLeft: '400px', marginTop: '0px' }}>
                Add
              </Button>
            </Box>

          </Grid>


          {/* Right container */}
          <Grid item xs={4}>
            <Typography gutterBottom variant="h5" style={{ marginBottom: '20px' }}>
              Your news feed
            </Typography>
           <List list={foundNewsbyAuthor} /> 
                  <Grid>
                    <Typography> 

            {newsList.map((item) => {
              return (
                <li>
            <Typography>
                Place:  {item.Names}
            </Typography>

            <Typography> 
              Activity:  {item.News}
            </Typography>  
            </li>
            );
            })}
                  </Typography> 
                  
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
    <label htmlFor="search">{props.label}</label>
    <input
      id="search"
      type="text"
      onChange={props.onSearch}
    />

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
