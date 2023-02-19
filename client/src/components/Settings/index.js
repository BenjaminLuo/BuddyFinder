// --------------------------------------------------- \/ Imports

import React from 'react';

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
    Tab
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


export default function Settings() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
                <Tab label="Blocked Users" />
            </Tabs>

            {/* Settings for General (Public information) */}
            {/* Display Name, Bio, Program, Academic Year, Interests */}

            <TabPanel value={value} index={0}>

                <InputField field={"Display Name"} label={"Ephei Tea"} />
                <InputField field={"Program"} label={"Management Engineering"} />
                <InputField field={"Academic Year"} label={"3A"} />
                <InputField field={"Bio"} label={"About me"} />
                <InputField field={"Interests"} label={"My interests"} />

            </TabPanel>

            {/* Settings for Account information */}
            {/* User ID, Username, Password, Email */}
            <TabPanel value={value} index={1}>

                <InputField field={"User ID"} label={"20890448"} />
                <InputField field={"Username"} label={"epheitea"} />
                <InputField field={"Password"} label={"myPassword"} />
                <InputField field={"Email"} label={"ephei@outlook.com"} />

            </TabPanel>

            {/* Settings for Privacy */}
            {/* Hide name from search, Private account */}
            <TabPanel value={value} index={2}>

                <InputField field={"Private Account"} label={"No"} />
                <InputField field={"Searchable Account"} label={"Yes"} />

            </TabPanel>

            {/* List of blocked users */}
            <TabPanel value={value} index={3}>

                <BlockedUser name={"Ephei Tea"} userID={"20890448"} year={"3A"} program={"Management Engineering"} />
                <BlockedUser name={"Yi Fei"} userID={"00000000"} year={"4A"} program={"Civil Engineering"} />

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
                    style={{ width: "300px" }}
                    fullWidth
                    size="small" />
            </Grid>
            <Grid item xs={6}>
                <Button
                    type="submit"
                    variant="contained"
                    style={{ float: 'right', marginLeft: '50px' }}
                    color="primary">
                    Change
                </Button>
            </Grid>
        </Grid>
    )
}

const BlockedUser = (props) => {
    return (
        <Card style={{ marginLeft: '50px', marginBottom: '12px' }}>
            <CardContent style={{ backgroundColor: 'white', width: '400px', padding: '8px 8px 8px 50px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
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
                            color="primary">
                            Unblock
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}