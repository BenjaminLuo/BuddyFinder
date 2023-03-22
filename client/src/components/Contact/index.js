import React from 'react';

import {
    Container,
    Card,
    CardContent,
    Grid,
    TextField,
    Typography,
    Button,
    makeStyles,
} from '@material-ui/core';
import { SiteInformation } from './siteInformation';
import { confirmationMessage } from './confirmationMessage';
const serverURL = "";

// Local styles
const useStyles = makeStyles(() => {
    return {
        page: {
            backgroundColor: 'lightgrey',
            backgroundSize: 'cover',
            opacity: 0.9,
            padding: '60px',
            minHeight: '90vh'
        },
    }
})


export default function Contact(props) {
    const classes = useStyles();

    // Form toggle
    const [submitted, updateSubmitted] = React.useState(false);

    // State variables
    const [name, updateName] = React.useState("");
    const [email, updateEmail] = React.useState("");
    const [body, updateBody] = React.useState("");

    // Validation check variables
    const [errorName, triggerErrorName] = React.useState(false);
    const [errorEmail, triggerErrorEmail] = React.useState(false);
    const [errorBody, triggerErrorBody] = React.useState(false);
    const [userID, setUserID] = React.useState(1);

    const addTicket = () => {
        callApiAddTicket()
            .then(res => {
                console.log("callApiAddInterest returned: ", res)
                var parsed = JSON.parse(res.express);
                console.log("callApiAddInterest parsed: ", parsed);
            })
    }

    const callApiAddTicket = async () => {
        const url = serverURL + "/api/contactUs";
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: name,
                email: email,
                body: body,
                userID: userID
            })
        });
        const responseInterest = await response.json();
        if (response.status !== 200) throw Error(responseInterest.message);
        console.log("User settings: ", responseInterest);
        return responseInterest;
    }

    // Form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Validation
        name === "" ? triggerErrorName(true) : triggerErrorName(false)
        email === "" ? triggerErrorEmail(true) : triggerErrorEmail(false)
        body === "" ? triggerErrorBody(true) : triggerErrorBody(false)

        // If no errors then forward to database
        if (name !== "" && email !== "" && body !== "") {
            updateSubmitted(true);
            addTicket();
        }
    }

    return (
        <Container maxWidth={false} className={classes.page}>

            <Grid container spacing={2}>

                {/* Left Container: About the site */}
                <SiteInformation />


                {/* Right Container: Contact form */}
                <Grid item xs={6}>
                    <Card style={{ maxWidth: 450, margin: "0 auto", padding: "15px 5px" }}>
                        <CardContent>

                            {/* If the user has already submitted the form, send the confirmation message */}
                            {submitted === true ?

                                confirmationMessage(name, email, body)

                                :

                                <form onSubmit={handleSubmit}>

                                    <TextField
                                        label="Name"
                                        helperText={errorName ? "Please enter your name" : ""}
                                        onChange={(event) => updateName(event.target.value)}
                                        error={errorName}
                                        variant="outlined"
                                        fullWidth
                                        style={{ marginBottom: "20px" }}
                                    />
                                    <TextField
                                        label="Email"
                                        helperText={errorEmail ? "Please enter your email" : ""}
                                        onChange={(event) => updateEmail(event.target.value)}
                                        error={errorEmail}
                                        variant="outlined"
                                        fullWidth
                                        style={{ marginBottom: "20px" }}
                                    />
                                    <TextField
                                        label="How can we help you?"
                                        inputProps={{ maxLength: 200 }}
                                        multiline minRows={5}
                                        helperText={errorBody ? "Please enter your message" : ""}
                                        onChange={(event) => updateBody(event.target.value)}
                                        error={errorBody}
                                        variant="outlined"
                                        fullWidth
                                        style={{ marginBottom: "20px" }}
                                    />
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        fullWidth>
                                        <Typography variant="h6">Send message</Typography>
                                    </Button>

                                </form>

                            }

                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </Container>
    );

}
