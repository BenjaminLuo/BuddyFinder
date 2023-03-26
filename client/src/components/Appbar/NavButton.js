import * as React from 'react';
import history from '../Navigation/history';
import {
    Button,
    Typography
} from '@material-ui/core';

// Function for creating navigation buttons
export const NavButton = ({ redirect, linkText }) => {
    return (
        <Button
            onClick={() => history.push(redirect)}
            sx={{ my: 2, display: 'block' }}
            style={{ marginLeft: '15px', textTransform: 'none' }}>
            <Typography variant="h6"> {linkText} </Typography>
        </Button>
    );
};
