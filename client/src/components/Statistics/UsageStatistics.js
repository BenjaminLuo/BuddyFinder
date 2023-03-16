import React from 'react';
import {
    Table,
    TableBody,
    Box,
    Modal,
    TableRow,
    TableCell,
    TableContainer,
    Typography,
    TableHead,
    makeStyles,
    Paper,
    Button,
    Grid
} from '@material-ui/core';
import { theme } from '../App/theme'

const useStyles = makeStyles(() => {
    return {
        modal: {
            position: 'absolute',
            overflowY: 'auto',
            top: '20%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '40%',
            maxHeight: '50vh',
            backgroundColor: 'lightgrey',
            border: '0px',
            padding: '40px',
            zoom: '0.8'
        },
    }
})

export const UsageStatistics = () => {
    const classes = useStyles();

    // Modal triggers
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Preview user profile through a modal
    const handleProfile = (e) => {
        handleOpen();
    }

    const userData = {
        name: 'ephei',
        email: 'ephei@outlook.com'
    }

    return (
        <Grid item xs={4}>

            <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={(e) => handleProfile(e)}
                style={{ float: 'right', height: '30px', marginBottom: '15px' }}>
                <Typography variant="h6">
                    Download data
                </Typography>
            </Button>

            <Modal
                open={open}
                onClose={handleClose}>
                <Box style={{ whiteSpace: 'pre-line' }} className={classes.modal}>
                    {JSON.stringify(userData)}
                </Box>
            </Modal>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead style={{ backgroundColor: theme.palette.primary.main }}>
                        <TableRow>
                            <TableCell align="center" colSpan={2}>
                                <Typography variant="h6">Usage Statistics</Typography>
                            </TableCell>
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
