import React, { useEffect, useContext } from 'react';
import './index.css'

import {
    Typography,
    Container,
    makeStyles,
    Button,
    Grid,
    Card,
    Box,
    Tabs,
    Tab
} from '@material-ui/core';

import { AuthContext } from '../Authentication/AuthDetails'
import { modalController } from './modalController';
import { searchForUsers } from './searchForUsers';
import { userList } from './userList';
import { friendList } from './friendList';
import { blockedList } from './blockedList';
import GetFetch from '../common'
import backgroundImage from '../images/light_background.png';


const useStyles = makeStyles(() => {
    return {
        page: {
            opacity: 0.9,
            minHeight: '90vh',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            padding: '40px 100px 40px 100px'
        },
        modal: {
            position: 'absolute',
            overflowY: 'auto',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            maxHeight: '70%',
            backgroundColor: 'lightgrey',
            border: '0px',
            padding: '40px',
            zoom: '0.8'
        },
        button: {
            maxWidth: '25px',
            padding: '3px',
            minWidth: '25px',
            marginTop: '3px'
        },
        card: {
            maxWidth: 550,
            margin: "0 auto",
            padding: "20px 5px",
            minHeight: "65vh"
        },
        userCard: {
            backgroundColor: 'lightgrey',
            padding: '8px 8px 8px 30px'
        }
    }
})


export default function Search() {
    const classes = useStyles();
    const { authUser } = useContext(AuthContext);
    const [accounts, loadAccounts] = React.useState([]);
    const [friends, updateFriends] = React.useState([]);
    const [blocked, updateBlocked] = React.useState([]);

    // For tabbers
    const [value, setValue] = React.useState(0);

    // For search
    const [search, setQuery] = React.useState('');
    let query = filterData(accounts, search);

    // Modal triggers
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // API Calls for fetching data
    function getUsers() { return GetFetch('getUserList') }
    function getFriends() { return GetFetch('getFriendList', { userID: authUser?.uid }) }
    function getBlocked() { return GetFetch('getBlockList', { userID: authUser?.uid }) }
    function updateUsers(whichList, action, addressee) {
        return GetFetch(whichList, {
            action: action,
            userID: authUser?.uid,
            addressee: addressee
        })
    }

    // Initializing user data
    useEffect(() => {
        getUsers().then(userList => loadAccounts(userList))
        getFriends().then(friendList => updateFriends(friendList))
        getBlocked().then(blockedUsers => updateBlocked(blockedUsers))
    }, [authUser])

    // Tabbers
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // Preview user profile through a modal
    const handleProfile = (e) => {
        const userStub = accounts[accounts.findIndex(item => item.user_id === e.target.id)]
        handleOpen();
    }

    // Add/remove a friend
    function handleFriend(e) {
        e = e.target.id.slice(6) // Processing on the ID to retrieve the user ID
        if (friends.includes(e)) {
            updateFriends(friends.filter(item => item !== e));
            updateUsers('removeUser', 'friend', e);
        } else {
            updateFriends(friends.concat([e]));
            updateUsers('addUser', 'friend', e);
        }
    }

    // Block/unblock
    const handleBlock = (e) => {
        e = e.target.id.slice(5) // Processing on the ID to retrieve the user ID
        if (blocked.includes(e)) {
            updateBlocked(blocked.filter(item => item !== e));
            updateUsers('removeUser', 'block', e);
        } else {
            updateBlocked(blocked.concat([e]));
            updateUsers('addUser', 'block', e);
        }
    }

    // Filter the list of accounts based on the search query
    function filterData(data, query) {
        if (!query || query === '') {
            return data;
        } else {
            return data.filter((d) => d.user_id.includes(query.trim()) || d.display_name.toLowerCase().includes(query.trim().toLowerCase()));
        }
    }

    // Each search query is contained inside one of these
    const UserCard = (props) => {
        return (
            <Card style={{ marginBottom: '12px' }}>
                <Grid container spacing={2} className={classes.userCard}>

                    {/* User Information */}
                    <Grid item xs={7}>
                        <Typography style={{ fontWeight: '600', display: 'inline' }}>
                            {props.name + " / "}
                        </Typography>
                        <Typography style={{ display: 'inline' }}>
                            ({props.userID.slice(0, 5)}...)
                        </Typography>
                        <Typography style={{ fontStyle: 'italic', fontSize: '12px' }}>
                            {props.year + " " + props.program}
                        </Typography>
                    </Grid>

                    {/* Add/remove Friend */}
                    <Grid item xs={1}>
                        {authUser ?
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                id={'friend' + props.userID}
                                data-testid={'test_friend_' + props.userID}
                                onClick={(e) => handleFriend(e)}>
                                <Typography variant="h6">{props.friend ? '-' : '+'}</Typography>
                            </Button>
                            : ""}
                    </Grid>

                    {/* Block/unblock */}
                    <Grid item xs={1}>
                        {authUser ?
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                id={'block' + props.userID}
                                onClick={(e) => handleBlock(e)}>
                                <Typography variant="h6">{props.blocked ? 'U' : 'B'}</Typography>
                            </Button>
                            : ""}
                    </Grid>

                    {/* View profile */}
                    <Grid item xs={3}>
                        <Button
                            type="submit"
                            variant="contained"
                            data-testid={'profile_' + props.userID}
                            color="primary"
                            id={props.userID}
                            key={'profbutton_' + props.userID}
                            onClick={(e) => handleProfile(e)}
                            disabled={props.disabled ? true : false}>
                            <Typography variant="h6">{props.disabled ? 'Private' : 'Profile'}</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Card >
        )
    }

    return (
        <Container maxWidth={false} className={classes.page}>
            <Card className={classes.card}>

                {/* Search for a user */}
                {searchForUsers(setQuery)}

                {/* Modal to display review */}
                {modalController(open, handleClose, classes)}

                {/* Tabber to navigate between lists of users*/}
                <Box sx={{ borderBottom: 1, borderColor: 'divider', marginLeft: '25px' }}>
                    <Tabs value={value} onChange={handleChange}>
                        <Tab label="All" />
                        <Tab label="Friends" />
                        <Tab label="Blocked" />
                    </Tabs>
                </Box>

                {/* Returned results: All */}
                {userList(value, query, UserCard, friends, blocked)}

                {/* Returned results: Friends */}
                {friendList(value, query, UserCard, friends, blocked)}

                {/* Returned results: Blocked */}
                {blockedList(value, query, UserCard, friends, blocked)}

            </Card>
        </Container >
    );

}
