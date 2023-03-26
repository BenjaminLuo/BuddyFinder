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

  const [newsSearchTerm, setNewsSearchTerm] = React.useState(''); //search by news
  const [authorTerm, setAuthorTerm] = React.useState(''); //search by author
  const [addedNewsTerm, setAddedNewsTerm] = React.useState(''); //user inputted news
  const [addedNameTerm, setAddedNameTerm] = React.useState(''); //user inputted author
  const [newsList, setNewsList] = React.useState([]);

  // validation checks
  const [error, seterror] = React.useState(false);

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
    if (addedNewsTerm.length == 0 || addedNameTerm.length == 0) {
      seterror(true);
    } else {
      const q = {
        Names: addedNameTerm,
        News: addedNewsTerm,
      }

      let arrayAdd = [...newsList];
      arrayAdd.push(q);

      setNewsList(arrayAdd);
      console.log("News List is: ", newsList);

    }
  }


  return (
    <div>
      <Container maxWidth={false} className={classes.page}>
        <Typography variant="h3" gutterBottom component="div">
          News
        </Typography>
        <Grid container spacing={1}>
          {/* Left container */}
          <Grid item xs={1} />
          <Grid item xs={6}>
            <Typography gutterBottom variant="h4" style={{ marginBottom: '20px' }}>
              Search
            </Typography>
            <h5>(Case sensitive)</h5>
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
              Author: <i>{authorTerm}</i>
            </p>
            <br></br>
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


          {/* Right container */}
          <Grid item xs={4}>
            <Typography gutterBottom variant="h4" style={{ marginBottom: '20px' }}>
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
    <TextField id="outlined-basic" label="Search" variant="outlined" onChange={props.onSearch} />
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
