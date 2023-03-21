import * as React from 'react';
import history from '../Navigation/history';
import {
    Button,
    Grid,
    Typography
} from '@material-ui/core';

// Function for creating navigation buttons
export const NavButton = ({ redirect, linkText }) => {
    return (

        <Grid item
            xs={1}
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            <Button
                onClick={() => history.push(redirect)}
                sx={{ my: 2, display: 'block' }}>
                <Typography variant="h6"> {linkText} </Typography>
            </Button>

        </Grid>

    );
};
