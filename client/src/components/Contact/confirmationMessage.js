import React from 'react';
import { Typography } from '@material-ui/core';

// Renders the inputed name, email, and message for the user to see
export function confirmationMessage(name, email, body) {
    return <>
        <Typography variant="h5" style={{ color: 'black' }}>
            <b>We've received your message!</b>
        </Typography>
        <br /><b>Name</b>: {name}
        <br /><b>Email</b>: {email}
        <br /><b>Message</b>: {body}
    </>;
}
