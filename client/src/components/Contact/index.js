// --------------------------------------------------- \/ Imports

import React from 'react';

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

// --------------------------------------------------- /\ Imports
// --------------------------------------------------- \/ Styles

const useStyles = makeStyles((theme) => {
    return {
        page: {
            backgroundColor: 'lightgrey',
            backgroundSize: 'cover',
            opacity: 0.9,
            padding: '40px',
            paddingTop: '120px'
        },
    }
})


export default function Contact(props) {
    const classes = useStyles();


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

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tellus at urna condimentum mattis pellentesque id nibh. Scelerisque viverra mauris in aliquam sem fringilla ut. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. In tellus integer feugiat scelerisque varius. Eu ultrices vitae auctor eu augue ut lectus arcu. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Tempor orci dapibus ultrices in iaculis nunc sed. Id diam maecenas ultricies mi eget mauris pharetra. Molestie nunc non blandit massa enim nec dui nunc mattis. Commodo odio aenean sed adipiscing diam.

                    </Typography>

                </Grid>


                {/* Right Container: Contact form */}
                <Grid item xs={6}>
                    <Card style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }}>
                        <CardContent>

                            <TextField
                                label="Name"
                                placeholder="Name"
                                variant="outlined"
                                fullWidth
                                style={{ marginBottom: "20px" }}
                            />
                            <TextField
                                label="Email"
                                placeholder="Email"
                                variant="outlined"
                                fullWidth
                                style={{ marginBottom: "20px" }}
                            />
                            <TextField
                                label="How can we help you?"
                                inputProps={{ maxLength: 200 }}
                                multiline minRows={5}
                                placeholder="How can we help you?"
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

                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </Container>
    );

}
