import React from 'react';
import { Box, Modal } from '@material-ui/core';
import Profile from '../Profile';
import { userStub } from './index';

// Controls opening and closing of modals
export function modalController(open, handleClose, classes) {
    return (
        <Modal
            open={open}
            onClose={handleClose}>
            <Box className={classes.modal}>
                <Profile user={userStub} paddingTop={'0px'} />
            </Box>
        </Modal>
    );
}
