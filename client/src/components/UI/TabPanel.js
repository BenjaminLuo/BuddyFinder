import React from 'react';
import { Typography, Box } from '@material-ui/core';

// Reusable template for each tabber element
export function TabPanel(props) {
    const { children, value, index } = props;

    return (
        <>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </>
    );
}
