import React from 'react';
import { Typography, Button } from '@material-ui/core';

// Right container, 1st row: User interests
export function userInterests(classes, user) {
    return (
        <container className={classes.rightSubContainer}>

            <Typography variant="h6" style={{ marginBottom: '12px' }}>
                Interests
            </Typography>

            {user ? user.interests.map((item) => (
                <Button variant="contained" size="small" color="primary" style={{ margin: '6px' }}>
                    {item}
                </Button>
            )) : null}

        </container>
    );
}
