import React from 'react';
import { Box, Modal } from '@material-ui/core';
import Profile from '../../components/Profile';

// Controls opening and closing of modals
export function modalController(open, handleClose, classes) {
    return (
        <Modal
            open={open}
            onClose={handleClose}>
            <Box className={classes.modal}>
                <Profile user={null} paddingTop={'0px'} />
            </Box>
        </Modal>
    );
}
