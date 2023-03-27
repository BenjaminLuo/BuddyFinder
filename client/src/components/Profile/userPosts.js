import React from 'react';
import {
    Typography,
    Grid,
    Paper,
    Container
} from '@material-ui/core';

// Right container, 2nd row: User posts
export function userPosts(classes, user) {
    return (
        <Container className={classes.rightSubContainer}>

            <Typography variant="h5" style={{ margin: '12px 0px 12px 0px', color: 'black', fontSize: '24px' }}>
                Posts
            </Typography>

            <Grid container spacing={2} styles={{ marginBottom: '12px' }}>
                {user ? user.posts.map((item, index) => (
                    <Paper
                        color="primary"
                        key={index}
                        style={{ margin: '6px', width: '150px', padding: '6px', verticalAlign: 'top', display: 'flex' }}
                    >
                        <Grid item key={item.postID} xs>
                            {item.title}
                        </Grid>
                    </Paper>
                )) : null}
            </Grid>

        </Container>
    );
}
