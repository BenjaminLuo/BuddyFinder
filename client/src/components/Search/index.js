// --------------------------------------------------- \/ Imports

import React, { useEffect } from 'react';

import {
    Typography,
    Container,
    TextField,
    makeStyles,
    Button,
    Grid,
    Card,
    CardContent,
    Box,
    Tabs,
    Tab,
    Modal
} from '@material-ui/core';

import Profile from '../Profile'

// --------------------------------------------------- /\ Imports
// --------------------------------------------------- \/ Styles

const useStyles = makeStyles((theme) => {
    return {
        page: {
            backgroundColor: 'lightgrey',
            backgroundSize: 'cover',
            opacity: 0.9,
            minHeight: '100vh',
            padding: '120px 100px 40px 100px'
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

var userStub = {
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
    const [value, setValue] = React.useState(0);

    // Modal triggers
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleProfile = (e) => {
        userStub = accounts[accounts.findIndex(item => item.user_id == e.target.id)]
        handleOpen();
    }

    const UserCard = (props) => {
        return (
            <Card style={{ marginBottom: '12px' }}>
                <CardContent style={{ backgroundColor: 'lightgrey', padding: '8px 8px 8px 30px' }}>

                    <Grid container spacing={2}>
                        <Grid item xs={9}>
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

                        <Grid item xs={3}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                id={props.userID}
                                onClick={(e) => handleProfile(e)}
                                disabled={props.disabled ? true : false}>
                                {props.disabled ? 'Private' : 'Profile'}
                            </Button>
                        </Grid>

                    </Grid>
                </CardContent>
            </Card >
        )
    }

    return (
        <Container maxWidth={false} className={classes.page}>
            <Card style={{ maxWidth: 550, margin: "0 auto", padding: "20px 5px", minHeight: "65vh" }}>
                <CardContent>

                    {/* Search for a user */}
                    <Grid container spacing={2}>
                        <Grid item xs={9}>
                            <TextField
                                label="Find a user"
                                placeholder="Search for a user..."
                                variant="outlined"
                                fullWidth
                                size="small"
                                style={{ marginBottom: "30px" }}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Button
                                type="submit"
                                // onClick={handleOpen}
                                variant="contained"
                                color="primary">
                                Search
                            </Button>
                        </Grid>
                    </Grid>

                    {/* Modal to display review */}
                    <Modal
                        open={open}
                        onClose={handleClose}
                    >
                        <Box className={classes.modal}>
                            {/* <Typography>
                                Test
                            </Typography> */}
                            <Profile user={userStub} paddingTop={'0px'} />
                        </Box>
                    </Modal>


                    {/* Returned results */}
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange}>
                            <Tab label="All" />
                            <Tab label="Friends" />
                            <Tab label="Blocked" />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>

                        {accounts ? accounts.map((item) => (
                            item.searchable ?
                                <UserCard
                                    name={item.display_name}
                                    userID={item.user_id}
                                    year={item.term}
                                    program={item.program}
                                    disabled={item.private} />
                                : null
                        )) : null}

                    </TabPanel>
                    <TabPanel value={value} index={1}>

                        {accounts ? accounts.map((item) => (
                            item.friend ?
                                <UserCard
                                    name={item.display_name}
                                    userID={item.user_id}
                                    year={item.term}
                                    program={item.program}
                                    disabled={item.private} />
                                : null
                        )) : null}

                    </TabPanel>
                    <TabPanel value={value} index={2}>

                        {accounts ? accounts.map((item) => (
                            item.blocked ?
                                <UserCard
                                    name={item.display_name}
                                    userID={item.user_id}
                                    year={item.term}
                                    program={item.program}
                                    disabled={item.private} />
                                : null
                        )) : null}

                    </TabPanel>

                </CardContent>
            </Card>
        </Container>
    );

}


function TabPanel(props) {
    const { children, value, index } = props;

    return (
        <div>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
