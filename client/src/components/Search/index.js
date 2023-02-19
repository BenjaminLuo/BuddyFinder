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
            minHeight: '100vh',
            padding: '40px',
            padding: '120px 100px 40px 100px'
        }
    }
})


export default function Search(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
                                variant="contained"
                                color="primary">
                                Search
                            </Button>
                        </Grid>
                    </Grid>


                    {/* Returned results */}
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange}>
                            <Tab label="All" />
                            <Tab label="Friends" />
                            <Tab label="Blocked" />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <UserCard
                            name={"Ephei Tea"}
                            userID={"20890448"}
                            year={"3A"}
                            program={"Management Engineering"} />
                        <UserCard
                            name={"Yi Fei"}
                            userID={"00000000"}
                            year={"4A"}
                            program={"Civil Engineering"} />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>

                </CardContent>
            </Card>
        </Container>
    );

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
                            color="primary">
                            Profile
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card >
    )
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
