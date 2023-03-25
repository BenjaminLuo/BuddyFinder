import React from 'react';
import {
    TextField,
    Button,
    Typography,
    Grid
} from '@material-ui/core';

// Search bar and functionality
export function searchForUsers(setQuery) {
    return (
        <Grid container spacing={0}>
            <Grid item xs={8} style={{ margin: '0 auto' }}>
                <TextField
                    label="Find a user"
                    placeholder="Search for a user..."
                    onInput={(e) => { setQuery(e.target.value); }}
                    variant="outlined"
                    fullWidth
                    size="small"
                    style={{ marginBottom: "30px" }} />
            </Grid>
            <Grid item xs={2}>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary">
                    <Typography variant="h6">Search</Typography>
                </Button>
            </Grid>
            <Grid item xs={1}>
            </Grid>
        </Grid>
    );
}
