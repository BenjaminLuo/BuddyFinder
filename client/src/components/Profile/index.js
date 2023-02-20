// --------------------------------------------------- \/ Imports

import React from 'react';

import {
    Typography,
    Container,
    Grid,
    makeStyles,
} from '@material-ui/core';

import Avatar from '@material-ui/core/Avatar';


// --------------------------------------------------- /\ Imports
// --------------------------------------------------- \/ Styles

const useStyles = makeStyles((theme) => {
    return {
        page: {
            backgroundColor: 'lightgrey',
            backgroundSize: 'cover',
            opacity: 0.9,
            padding: '40px',
            paddingTop: '120px'
        },
        rightContainer: {
            height: 'calc(100vh - 144px)',
            display: 'table'
        },
        rightSubContainer: {
            display: 'table-row'
        }
    }
})


const user = {
    display_name: 'Ephei Tea',
    user_id: '20890448',
    bio: 'A struggling student'
}


export default function Profile(props) {
    const classes = useStyles();


    return (
        <Container maxWidth={false} className={classes.page}>

            <Grid container spacing={2}>

                {/* Left Container: User Account Information */}
                <Grid item xs={3}>

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
                <Grid item xs={9} className={classes.rightContainer}>

                    <container className={classes.rightSubContainer}>

                        <Typography variant="h6">
                            Interests
                        </Typography>

                    </container>
                    <container className={classes.rightSubContainer}>

                        <Typography variant="h6">
                            Posts
                        </Typography>

                    </container>
                    <container className={classes.rightSubContainer}>

                        <Typography variant="h6">
                            Comments
                        </Typography>

                    </container>

                </Grid>

            </Grid>
        </Container>
    );

}
