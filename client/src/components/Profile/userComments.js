import React from 'react';
import {
    Typography, Grid,
    Paper
} from '@material-ui/core';

// Right container, 3rd row: User posts
export function userComments(classes, user) {
    return (
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
    );
}
