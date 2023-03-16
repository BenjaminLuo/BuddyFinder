import React from 'react';
import {
    Table,
    TableBody,
    TableRow,
    TableCell,
    TableContainer,
    TableHead,
    Paper,
    Button, Grid
} from '@material-ui/core';

export const UsageStatistics = (props) => {
    return (
        <Grid item xs={4}>

            <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ float: 'right', height: '30px', marginBottom: '15px' }}>
                Download data
            </Button>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead style={{ backgroundColor: '#6AAB8E' }}>
                        <TableRow>
                            <TableCell align="center" colSpan={2}>Usage Statistics</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow>
                                <TableCell>{row.field}</TableCell>
                                <TableCell align="right">{row.value}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid item xs={1} />

        </Grid>
    );
};

function createData(field, value) {
    return { field, value };
}

const rows = [
    createData('Friends', 43),
    createData('Blocked Users', 43),
    createData('Posts', 0),
    createData('Comments', 54),
    createData('Upvotes', 49),
    createData('Scheduled Events', 12),
    createData('Scheduled Events (hours)', 43),
    createData('Goals Set', 43),
    createData('Goals Accomplished', 43),
];
