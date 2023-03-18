import * as React from 'react';
import {
  Typography,
  Container,
  Paper,
  Button,
  TextField,
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

  const handleNewsSearch = (event) => {
    setNewsSearchTerm(event.target.value);
  };

  const handleAuthorSearch = (event) => {
    setAuthorTerm(event.target.value);
  };

  const foundNewsbyTitle = news.filter(function (item) {
    if (newsSearchTerm) {
      return item.title.includes(newsSearchTerm);
    } else {
      return item;
    }
  });

  const foundNewsbyAuthor = foundNewsbyTitle.filter(function (item) {
    if (authorTerm) {
      return item.author == authorTerm;
    } else {
      return item;
    }
  });

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
              Author: <strong>{authorTerm}</strong>
            </p>
          </Grid>


          {/* Right container */}
          <Grid item xs={4}>
          <List list={foundNewsbyAuthor} />
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