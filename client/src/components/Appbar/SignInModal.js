import React from 'react';
import {
    Modal,
    Box
} from '@material-ui/core';
import SignIn from '../Authentication/SignIn';

export function SignInModal(open, handleModalClose, classes) {
    return (
        <Modal
            open={open}
            onClose={handleModalClose}>
            <Box className={classes.modal}>
                <SignIn />
            </Box>
        </Modal>
    );
}
