import React from 'react';
import {
    Typography,
    Grid,
    Container,
    Paper
} from '@material-ui/core';

// Right container, 3rd row: User posts
export function userComments(classes, user) {
    return (
        <Container className={classes.rightSubContainer}>

            <Typography variant="h5" style={{ margin: '12px 0px 12px 0px', color: 'black', fontSize: '24px' }}>
                Comments
            </Typography>

            <Grid container spacing={2}>
                {user?.hasOwnProperty('comments') ? user.comments.map((item, index) => (
                    <Paper
                        color="primary"
                        key={index}
                        style={{ margin: '6px', width: '150px', padding: '6px', verticalAlign: 'top', display: 'flex' }}
                    >
                        <Grid item key={item.commentID} xs>
                            {item.value}
                        </Grid>
                    </Paper>
                )) :
                    <Paper
                        color="primary"
                        style={{ margin: '6px', width: '150px', padding: '6px', verticalAlign: 'top', display: 'flex' }}
                    >
                        No comments yet
                    </Paper>
                }
            </Grid>

        </Container>
    );
}
