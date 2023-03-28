import React from 'react';
import {
    Typography,
    Container,
    Avatar
} from '@material-ui/core';

// Left container: User profile information
export function profileInformation(user, authUser) {
    const name = user?.display_name ? user.display_name : authUser?.email.slice(0, authUser?.email.lastIndexOf('@'))
    return (
        <>

            {/* Avatar icon with first 1-2 letters of the name */}
            <Avatar style={{ height: '150px', width: '150px', fontSize: '70px', margin: '40px auto 40px auto', backgroundColor: '#222222' }}>
                {name?.match(/\b(\w)/g).slice(0, 2)}
            </Avatar>

            <Container style={{ marginLeft: '10px' }}>

                <Typography variant="h4" style={{ marginBottom: '8px' }}>
                    {name}
                </Typography>
                <Typography style={{ fontSize: '20px', fontStyle: 'italic', marginBottom: '10px', color: '#333333' }}>
                    ID: {authUser?.uid.slice(0, 8)}...
                </Typography>
                <Typography style={{ fontSize: '16px', color: '#333333' }}>
                    {user?.bio}
                </Typography>

            </Container>

        </>
    )
}
