import React from 'react';
import { Typography, Button, Container } from '@material-ui/core';

// Right container, 1st row: User interests
export function userInterests(classes, user) {
    return (
        <Container className={classes.rightSubContainer}>

            <Typography variant="h5" style={{ marginBottom: '12px' }}>
                Interests
            </Typography>

            {user ? user.interests.map((item, index) => (
                <Button
                    key={index}
                    variant="contained"
                    size="small"
                    color="primary"
                    style={{ margin: '6px' }}>
                    {item}
                </Button>
            )) : null}

        </Container>
    );
}
