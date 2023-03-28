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
import backgroundImage from '../images/nav_background.png';
import { AuthContext } from '../Authentication/AuthDetails'

const useStyles = makeStyles(() => {
    return {
        page: {
            opacity: 0.9,
            minHeight: '100vh',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            overflowY: 'none'
        },
        rightSubContainer: {
            padding: '10px'
        },
        overlay: {
            background: 'rgba(255, 255, 255, 0.5)',
            height: '100vh'
        },
    }
})


export default function Profile({ userID }) {
    const classes = useStyles();
    const { authUser } = useContext(AuthContext);

    // Declaring user object
    const [user, setUser] = React.useState({});

    // Initializing user data
    useEffect(() => {
        // If an external component is referencing Profile, then load the requested user
        if (userID) {
            setUser(userID)
            // Load the current user
        } else if (authUser?.length !== 0) {
            GetFetch('getUserSettings', { userID: authUser?.uid })
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
    }, [authUser, userID])

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
