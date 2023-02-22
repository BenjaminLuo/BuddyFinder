// --------------------------------------------------- \/ Imports

import React from 'react';

import {
    Typography,
    TextField,
    makeStyles,
    Button,
    Grid,
    Box,
    Tabs,
    Tab,
    Switch
} from '@material-ui/core';

// --------------------------------------------------- /\ Imports
// --------------------------------------------------- \/ Styles

const useStyles = makeStyles((theme) => {
    return {
        page: {
            backgroundColor: 'lightgrey',
            backgroundSize: 'cover',
            opacity: 0.9,
            minHeight: 'calc(100vh - 60px)',
            paddingTop: '90px'
        },
    }
})


const user = {
    display_name: 'Ephei Tea',
    program: 'Management Engineering',
    year: '3A',
    bio: 'About me',
    interests: ['A', 'B', 'C'],
    user_id: 20890448,
    username: 'epheitea',
    password: 'myPassword',
    email: 'ephei@outlook.com',
    private: false,
    searchable: true
}

const user2 = {
    display_name: 'Yi Fei',
    program: 'Civil Engineering',
    year: '4B',
    bio: 'Nothing to know',
    interests: ['A', 'B', 'C'],
    user_id: '00000000',
    username: 'yifei',
    password: 'password123',
    email: 'yifei@outlook.com',
    private: false,
    searchable: true
}


export default function Settings() {
    const classes = useStyles();
    const [data, changeData] = React.useState(user);

    // Tabber toggles
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => setValue(newValue);

    // Update user account information
    const handleSubmit = (e) => {
        data[e.target.id] = document.getElementById(e.target.id + '_info').value
        changeData({ ...data })
    }


    const InputField = (props) => {
        return (
            <Grid container spacing={2} style={{ padding: '10px 40px 10px 40px' }}>
                <Grid item xs={3}>
                    <Typography style={{ marginTop: '5px', textAlign: 'right' }}>
                        {props.field}
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label={props.label}
                        placeholder={"Enter new " + props.field.toLowerCase()}
                        variant="outlined"
                        id={props.id + '_info'}
                        style={{ width: "300px" }}
                        fullWidth
                        size="small" />
                </Grid>
                <Grid item xs={6}>
                    <Button
                        type="submit"
                        variant="contained"
                        id={props.id}
                        onClick={handleSubmit}
                        style={{ float: 'right', marginLeft: '50px' }}
                        color="primary">
                        Change
                    </Button>
                </Grid>
            </Grid>
        )
    }


    return (

        <Box
            sx={{ flexGrow: 1, display: 'flex', height: 224 }}
            className={classes.page}>

            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                style={{ backgroundColor: 'white', paddingTop: '40px', marginTop: '-30px' }}
                sx={{ borderRight: 1, borderColor: 'divider' }}>
                <Tab label="General" />
                <Tab label="Account" />
                <Tab label="Privacy" />
            </Tabs>

            {/* Settings for General (Public information) */}
            {/* Display Name, Bio, Program, Academic Year, Interests */}
            <TabPanel value={value} index={0}>

                <InputField field={"Display Name"} label={data.display_name} id={'display_name'} />
                <InputField field={"Program"} label={data.program} id={'program'} />
                <InputField field={"Academic Year"} label={data.year} id={'year'} />
                <InputField field={"Bio"} label={data.bio} id={'bio'} />
                <InputField field={"Interests"} label={data.interests.toString()} id={'interests'} />

            </TabPanel>

            {/* Settings for Account information */}
            {/* User ID, Username, Password, Email */}
            <TabPanel value={value} index={1}>

                <InputField field={"User ID"} label={data.user_id} id={'user_id'} />
                <InputField field={"Username"} label={data.username} id={'username'} />
                <InputField field={"Password"} label={data.password} id={'password'} />
                <InputField field={"Email"} label={data.email} id={'email'} />

            </TabPanel>

            {/* Settings for Privacy */}
            {/* Hide name from search, Private account */}
            <TabPanel value={value} index={2}>

                {/* <Switch checked={data.private ? true : false} onChange={handleRadioChange} /> */}
                <InputField field={"Private Account"} label={data.private ? 'Yes' : 'No'} id={'private'} />
                <InputField field={"Searchable Account"} label={data.searchable ? 'Yes' : 'No'} id={'searchable'} />

            </TabPanel>

        </Box >
    );
}


function TabPanel(props) {
    const { children, value, index } = props;

    return (
        <div>
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
