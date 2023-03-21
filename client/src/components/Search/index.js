import React from 'react';
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

import { modalController } from './modalController';
import { searchForUsers } from './searchForUsers';
import { userList } from './userList';
import { friendList } from './friendList';
import { blockedList } from './blockedList';

const useStyles = makeStyles((theme) => {
    return {
        page: {
            backgroundColor: 'lightgrey',
            backgroundSize: 'cover',
            opacity: 0.9,
            minHeight: '90vh',
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


const accounts = [
    {
        display_name: 'Ephei Tea',
        user_id: '20890448',
        bio: 'A struggling student',
        term: '3A',
        program: 'Mangement Engineering',
        private: false,
        searchable: true,
        friend: true,
        blocked: false,
        interests: ['NodeJS', 'ReactJS', 'MUI', 'Mathematics', 'AWS', 'Research', 'Games', 'Hackathons', 'Sleeping'],
        posts: [
            {
                postID: 132,
                title: "Looking for friends in MGMT25"
            },
            {
                postID: 136,
                title: "Help with MSCI 342 project"
            },
            {
                postID: 156,
                title: "How do I solve this problem?"
            },
            {
                postID: 132,
                title: "Hi."
            },
            {
                postID: 136,
                title: "Why is this code breaking? What do I dooooooo"
            },
            {
                postID: 156,
                title: "Why won't you compile AHHHHHH, I quit, I'm done with this project, why is this course required to graduate?!"
            }
        ],
        comments: [
            {
                commentID: 253,
                value: "Hi"
            },
            {
                commentID: 342,
                value: "I'm a 3rd year management engineering student"
            },
            {
                commentID: 554,
                value: "I'm also looking for a project team, let's work together"
            }
        ]
    },
    {
        display_name: 'Yi Fei',
        user_id: '00000000',
        term: '4B',
        program: 'Civil Engineering',
        private: false,
        searchable: true,
        friend: true,
        blocked: false,
        interests: [],
        posts: [],
        comments: []
    },
    {
        display_name: 'John Doe',
        user_id: '12345678',
        bio: 'A struggling student',
        term: '1A',
        program: 'Electrical Engineering',
        private: true,
        searchable: true,
        friend: false,
        blocked: false,
        interests: [],
        posts: [],
        comments: []
    },
    {
        display_name: 'Nyephe',
        user_id: '87654321',
        bio: 'A struggling student',
        term: '2B',
        program: 'Software Engineering',
        private: false,
        searchable: false,
        friend: true,
        blocked: true,
        interests: [],
        posts: [],
        comments: []
    }
]

export var userStub = {
    display_name: 'Yi Fei Tea',
    user_id: '0000',
    bio: 'Just another person',
    interests: ['NodeJS', 'ReactJS', 'MUI', 'Mathematics', 'AWS', 'Research', 'Games', 'Hackathons', 'Sleeping'],
    posts: [
        {
            postID: 132,
            title: "Looking for friends in MGMT25"
        },
        {
            postID: 136,
            title: "Help with MSCI 342 project"
        },
        {
            postID: 156,
            title: "How do I solve this problem?"
        },
        {
            postID: 132,
            title: "Hi."
        },
        {
            postID: 136,
            title: "Why is this code breaking? What do I dooooooo"
        },
        {
            postID: 156,
            title: "Why won't you compile AHHHHHH, I quit, I'm done with this project, why is this course required to graduate?!"
        }
    ],
    comments: [
        {
            commentID: 253,
            value: "Hi"
        },
        {
            commentID: 342,
            value: "I'm a 3rd year management engineering student"
        },
        {
            commentID: 554,
            value: "I'm also looking for a project team, let's work together"
        }
    ]
};


export default function Search(props) {
    const classes = useStyles();

    // For tabbers
    const [value, setValue] = React.useState(0);

    // For search
    const [search, setQuery] = React.useState('');
    let query = filterData(accounts, search);

    // Modal triggers
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Tabbers
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // Preview user profile through a modal
    const handleProfile = (e) => {
        userStub = accounts[accounts.findIndex(item => item.user_id === e.target.id)]
        handleOpen();
    }

    // Add/remove a friend
    function handleFriend(e) {
        const thisIndex = accounts.findIndex(item => "friend" + item.user_id === e.target.id)
        accounts[thisIndex].friend = !accounts[thisIndex].friend
        setQuery(search + ' ')
    }

    // Block/unblock
    const handleBlock = (e) => {
        const thisIndex = accounts.findIndex(item => "block" + item.user_id === e.target.id)
        accounts[thisIndex].blocked = !accounts[thisIndex].blocked
        setQuery(search + ' ')
    }

    // Filter the list of accounts based on the search query
    function filterData(data, query) {
        if (!query || query === '') {
            return data;
        } else {
            return data.filter((d) => d.user_id.includes(query.trim()) || d.display_name.toLowerCase().includes(query.trim()));
        }
    }

    // Each search query is contained inside one of these
    const UserCard = (props) => {
        return (
            <Card style={{ marginBottom: '12px' }}>
                <Grid container spacing={2} className={classes.userCard}>

                    {/* User Information */}
                    <Grid item xs={7}>
                        <Typography style={{ fontWeight: '500', display: 'inline' }}>
                            {props.name + " / "}
                        </Typography>
                        <Typography style={{ display: 'inline' }}>
                            ({props.userID})
                        </Typography>
                        <Typography style={{ fontStyle: 'italic', fontSize: '12px' }}>
                            {props.year + " " + props.program}
                        </Typography>
                    </Grid>

                    {/* Add/remove Friend */}
                    <Grid item xs={1}>
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
                    </Grid>

                    {/* Block/unblock */}
                    <Grid item xs={1}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            id={'block' + props.userID}
                            onClick={(e) => handleBlock(e)}>
                            <Typography variant="h6">{props.blocked ? 'U' : 'B'}</Typography>
                        </Button>
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
                {userList(value, query, UserCard)}

                {/* Returned results: Friends */}
                {friendList(value, query, UserCard)}

                {/* Returned results: Blocked */}
                {blockedList(value, query, UserCard)}

            </Card>
        </Container >
    );

}
