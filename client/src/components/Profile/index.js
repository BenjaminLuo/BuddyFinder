// --------------------------------------------------- \/ Imports

import React, { useEffect } from 'react';
import './index.css';

import {
    Typography,
    Container,
    Grid,
    Paper,
    Button,
    makeStyles,
} from '@material-ui/core';

import Avatar from '@material-ui/core/Avatar';


// --------------------------------------------------- /\ Imports
// --------------------------------------------------- \/ Styles

const useStyles = makeStyles((theme) => {
    return {
        page: {
            backgroundSize: 'cover',
            opacity: 0.9,
            padding: '40px',
        },
        rightContainer: {
            minHeight: '100vh'
        },
        rightSubContainer: {
            padding: '50px'
        }
    }
})



const userStub = {
    display_name: 'Ephei Tea',
    user_id: '20890448',
    bio: 'A struggling student',
    interests: ['NodeJS', 'ReactJS', 'MUI', 'Mathematics', 'AWS', 'Research', 'Games', 'Hackathons', 'Sleeping'],
    posts: [
        {
            postID: 132,
            title: "Looking for friends in MGMT25"
        },
        {
            postID: 136,
            title: "Help with MSCI 342 project"
        },
        {
            postID: 156,
            title: "How do I solve this problem?"
        },
        {
            postID: 132,
            title: "Hi."
        },
        {
            postID: 136,
            title: "Why is this code breaking? What do I dooooooo"
        },
        {
            postID: 156,
            title: "Why won't you compile AHHHHHH, I quit, I'm done with this project, why is this course required to graduate?!"
        }
    ],
    comments: [
        {
            commentID: 253,
            value: "Hi"
        },
        {
            commentID: 342,
            value: "I'm a 3rd year management engineering student"
        },
        {
            commentID: 554,
            value: "I'm also looking for a project team, let's work together"
        }
    ]
};


export default function Profile(props) {
    const classes = useStyles();

    const [user, setUser] = React.useState({
        display_name: 'Anonymous User',
        user_id: 'N/A',
        bio: '',
        interests: ['None'],
        posts: ['None'],
        comments: ['None']
    });

    useEffect(() => {
        if (props.user) {
            setUser(props.user)
        } else {
            setUser(userStub)
        }
    }, [props])

    // Adjusting top padding due to NavBar; this component is used by the Search component in a modal
    const paddingTop = props.paddingTop ? props.paddingTop : '100px'

    return (
        <Container maxWidth={false} className={classes.page} style={{ paddingTop: paddingTop }}>

            {/* Left Container: User Account Information */}
            <Grid item xs={3} style={{ position: 'fixed' }}>

                {/* Avatar icon with first 1-2 letters of the name */}
                <Avatar style={{ height: '150px', width: '150px', fontSize: '70px', margin: '40px auto 40px auto' }}>
                    {user.display_name.match(/\b(\w)/g).slice(0, 2)}
                </Avatar>

                <Container style={{ marginLeft: '10px' }}>

                    <Typography variant="h4" style={{ marginBottom: '8px' }}>
                        {user.display_name}
                    </Typography>
                    <Typography style={{ fontSize: '20px', fontStyle: 'italic', marginBottom: '10px', color: '#333333' }}>
                        ID: {user.user_id}
                    </Typography>
                    <Typography style={{ fontSize: '16px', color: '#333333' }}>
                        {user.bio}
                    </Typography>

                </Container>

            </Grid>


            {/* Right Container: User Activity */}
            <Grid item xs={9} className={classes.rightContainer} style={{ float: 'right' }}>

                <container className={classes.rightSubContainer}>

                    <Typography variant="h6" style={{ marginBottom: '12px' }}>
                        Interests
                    </Typography>

                    {user ? user.interests.map((item) => (
                        <Button variant="contained" size="small" color="primary" style={{ margin: '6px' }}>
                            {item}
                        </Button>
                    )) : null}

                </container>
                <container className={classes.rightSubContainer}>

                    <Typography variant="h6" style={{ margin: '12px 0px 12px 0px' }}>
                        Posts
                    </Typography>

                    <Grid container spacing={2} styles={{ marginBottom: '12px' }}>
                        {user ? user.posts.map((item) => (
                            <Paper color="primary" style={{ margin: '6px', width: '150px', padding: '6px', verticalAlign: 'top', display: 'flex' }}>
                                <Grid item xs>
                                    {item.title}
                                </Grid>
                            </Paper>
                        )) : null}
                    </Grid>

                </container>
                <container className={classes.rightSubContainer}>

                    <Typography variant="h6" style={{ margin: '12px 0px 12px 0px' }}>
                        Comments
                    </Typography>

                    <Grid container spacing={2}>
                        {user ? user.comments.map((item) => (
                            <Paper color="primary" style={{ margin: '6px', width: '150px', padding: '6px', verticalAlign: 'top', display: 'flex' }}>
                                <Grid item xs>
                                    {item.value}
                                </Grid>
                            </Paper>
                        )) : null}
                    </Grid>

                </container>
            </Grid>

        </Container>
    );

}
