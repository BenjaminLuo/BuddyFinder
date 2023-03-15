import React, { useEffect } from 'react';
import './index.css';

import {
    Container,
    Grid,
    makeStyles
} from '@material-ui/core';

import { userPosts } from './userPosts';
import { userInterests } from './userInterests';
import { userComments } from './userComments';
import { profileInformation } from './profileInformation';

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

    // Adjusting top padding due to NavBar; this component is also used by the Search component in a modal
    const paddingTop = props.paddingTop ? props.paddingTop : '100px'

    return (
        <Container maxWidth={false} className={classes.page} style={{ paddingTop: paddingTop }}>

            {/* Left Container: User Account Information */}
            {profileInformation(user)}

            {/* Right Container: User Activity */}
            <Grid item xs={9} className={classes.rightContainer} style={{ float: 'right' }}>
                {userInterests(classes, user)}
                {userPosts(classes, user)}
                {userComments(classes, user)}
            </Grid>

        </Container>
    );

}
