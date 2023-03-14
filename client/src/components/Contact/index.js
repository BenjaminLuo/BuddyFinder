// --------------------------------------------------- \/ Imports

import React, { useEffect } from 'react';
import axios from 'axios';

import {
    Typography,
    Container,
    Card,
    CardContent,
    Grid,
    TextField,
    Button,
    makeStyles,
} from '@material-ui/core';

const url = "http://localhost:5000"

// --------------------------------------------------- /\ Imports
// --------------------------------------------------- \/ Styles

const useStyles = makeStyles((theme) => {
    return {
        page: {
            backgroundColor: 'lightgrey',
            backgroundSize: 'cover',
            opacity: 0.9,
            padding: '40px',
            minHeight: '100vh',
            paddingTop: '120px'
        },
    }
})


export default function Contact(props) {
    const classes = useStyles();

    // Form toggle
    const [submitted, updateSubmitted] = React.useState(false);

    // States
    const [name, updateName] = React.useState("");
    const [email, updateEmail] = React.useState("");
    const [body, updateBody] = React.useState("");

    // Validation check variables
    const [errorName, triggerErrorName] = React.useState(false);
    const [errorEmail, triggerErrorEmail] = React.useState(false);
    const [errorBody, triggerErrorBody] = React.useState(false);

    useEffect(() => {
        $.ajax({
            type: "POST",
            path: "/contactUs",
            url: "https://dobw52i69c.execute-api.ca-central-1.amazonaws.com/prod",
            crossDomain: true,
            data: {
                name: "fae",
                email: "fae@outlook.com",
                body: "My message"
            },
            contentType: "application/json",
            dataType: "json",
            success: function (data, status) {
                alert("Data: " + data + "`\nStatus: " + status);
            }
        })
    }, []);

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

            // API to send review to database
            axios.post(url + '/api/contactUs', {
                name: name,
                email: email,
                body: body
            })

        }
    }

    return (
        <Container maxWidth={false} className={classes.page}>

            <Grid container spacing={2}>

                {/* Left Container: About the site */}
                <Grid item xs={6}>
                    <Typography gutterBottom variant="h4" align="center">
                        Contact Us
                    </Typography>
                    <hr style={{ align: 'center', width: '10%', borderColor: 'darkgrey' }} />

                    <Typography style={{ padding: '50px' }}>
                        Welcome to the contact page! Please fill out the form if you want to send us a message and we'll try to get back to you within 2 business days
                        <br /><br />
                        Before using the contact form, check out the <b>FAQ</b> page to see a list of frequently asked questions!
                    </Typography>

                </Grid>


                {/* Right Container: Contact form */}
                <Grid item xs={6}>
                    <Card style={{ maxWidth: 450, margin: "0 auto", padding: "15px 5px" }}>
                        <CardContent>

                            {/* If the user has already submitted the form, then confirm it */}
                            {submitted === true ?

                                <div>
                                    <Typography variant="h5">
                                        We've received your message!
                                    </Typography>
                                    <br /><b>Name</b>: {name}
                                    <br /><b>Email</b>: {email}
                                    <br /><b>Message</b>: {body}
                                </div>

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
                                        Send message
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
