import * as React from 'react';
import history from '../Navigation/history';
import {
    Button,
    Grid
} from '@material-ui/core';

// Function for creating navigation buttons
export const NavButton = ({ redirect, linkText }) => {
    return (

        <Grid item
            xs={1}
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            <Button
                onClick={() => history.push(redirect)}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                {linkText}
            </Button>

        </Grid>

    );
};
