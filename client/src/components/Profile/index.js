import React, { useEffect, useContext } from 'react';

import {
    Container,
    Grid,
    makeStyles
} from '@material-ui/core';

import { userPosts } from './userPosts';
import { userInterests } from './userInterests';
import { userComments } from './userComments';
import { profileInformation } from './profileInformation';
import GetFetch from '../common'
import backgroundImage from '../images/banner_background.png';
import { AuthContext } from '../Authentication/AuthDetails'

const useStyles = makeStyles(() => {
    return {
        page: {
            opacity: 0.9,
            minHeight: '120vh',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover'
        },
        rightSubContainer: {
            padding: '10px'
        },
        overlay: {
            background: 'rgba(255, 255, 255, 0.4)',
            height: '120vh'
        },
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

export default function Profile({ userID }) {
    const classes = useStyles();
    const { authUser } = useContext(AuthContext);

    // Declaring user object
    const [user, setUser] = React.useState({});

    function getUserData(userID) {
        return GetFetch('getUserSettings', { userID: userID })
    }

    // Initializing user data
    useEffect(() => {
        // If an external component is referencing Profile, then load the requested user
        if (userID) {
            getUserData(userID)
                .then(user => setUser(user[0]))
            // Load the current user
        } else if (authUser?.length !== 0) {
            getUserData(authUser?.uid)
                .then(user => setUser(user[0]))
        } else {
            setUser({
                display_name: 'Anonymous User',
                user_id: 'N/A',
                bio: '',
                interests: ['None'],
                posts: ['None'],
                comments: ['None']
            })
        }
    }, [authUser])

    return (
        <Container maxWidth={false} className={classes.page}>
            <Container maxWidth={false} className={classes.overlay}>

                <Grid container spacing={2} >

                    {/* Left Container: User Account Information */}
                    <Grid item xs={3} style={{ padding: '40px 0px 0px 40px' }}>
                        {profileInformation(user, authUser)}
                    </Grid>

                    {/* Right Container: User Activity */}
                    <Grid item xs={9}>
                        {userInterests(classes, user)}
                        {userPosts(classes, user)}
                        {userComments(classes, user)}
                    </Grid>

                </Grid>

            </Container>
        </Container>
    );

}
