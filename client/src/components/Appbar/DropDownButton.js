import React from 'react';
import { Button, Typography } from '@material-ui/core';

export function DropDownButton(handleMenu, authUser) {
    return (
        <Button
            title="dropbutton"
            data-testid="dropdownButton"
            onClick={handleMenu}
            style={{ marginLeft: '15px', textTransform: 'none' }}>
            <Typography variant="h6">
                {authUser ? `${authUser.email} ▼`
                    :
                    "User ▼"}
            </Typography>
        </Button>
    );
}
