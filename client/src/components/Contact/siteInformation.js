import React from 'react';
import { Typography, Grid } from '@material-ui/core';

// Left container: Shows text information about the site
export const SiteInformation = () => {
    return (
        <Grid item xs={6}>
            <Typography gutterBottom variant="h4" align="center">
                Contact Us
            </Typography>
            <hr style={{ align: 'center', width: '10%', borderColor: 'darkgrey' }} />

            <Typography style={{ padding: '50px' }}>
                Welcome to the contact page! Please fill out the form if you want to send us a message and we'll try to get back to you within 2 business days
                <br /><br />
                Before using the contact form, check out the <b>FAQ</b> page to see a list of frequently asked questions!
            </Typography>
        </Grid>
    )
}