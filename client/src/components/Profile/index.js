import React, { useEffect } from 'react';

import {
    Container,
    Grid,
    makeStyles
} from '@material-ui/core';

import { userPosts } from './userPosts';
import { userInterests } from './userInterests';
import { userComments } from './userComments';
import { profileInformation } from './profileInformation';

const useStyles = makeStyles(() => {
    return {
        page: {
            backgroundSize: 'cover',
            opacity: 0.9,
            minHeight: '150vh',
            backgroundColor: 'lightgrey'
        },
        rightSubContainer: {
            padding: '10px'
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
            postID: 137,
            title: "Hi."
        },
        {
            postID: 139,
            title: "Why is this code breaking? What do I dooooooo"
        },
        {
            postID: 158,
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

    // Declaring user object
    const [user, setUser] = React.useState({
        display_name: 'Anonymous User',
        user_id: 'N/A',
        bio: '',
        interests: ['None'],
        posts: ['None'],
        comments: ['None']
    });

    // Initializing user data
    useEffect(() => {
        if (props.user) {
            setUser(props.user)
        } else {
            setUser(userStub)
        }
    }, [props])

    return (
        <Container maxWidth={false} className={classes.page}>

            {/* Left Container: User Account Information */}
            {profileInformation(user)}

            {/* Right Container: User Activity */}
            <Grid item xs={9} style={{ float: 'right' }}>
                {userInterests(classes, user)}
                {userPosts(classes, user)}
                {userComments(classes, user)}
            </Grid>

        </Container>
    );

}
