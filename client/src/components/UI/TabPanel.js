import React from 'react';
import { Box } from '@material-ui/core';

// Reusable template for each tabber element
export function TabPanel({ children, value, index }) {
    return (
        <>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </>
    );
}
