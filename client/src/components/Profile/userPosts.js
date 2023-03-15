import React from 'react';
import {
    Typography, Grid,
    Paper
} from '@material-ui/core';

// Right container, 2nd row: User posts
export function userPosts(classes, user) {
    return (
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
    );
}
