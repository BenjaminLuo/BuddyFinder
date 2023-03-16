// --------------------------------------------------- \/ Imports

import React from 'react';

import {
    Typography,
    Container,
    makeStyles,
    Accordion,
    AccordionSummary,
    AccordionDetails
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
            padding: '120px 100px 40px 100px'
        }
    }
})


export default function FAQ(props) {
    const classes = useStyles();
    return (
        <Container maxWidth={false} className={classes.page}>

            <Typography gutterBottom variant="h4" align="center">
                FAQ
            </Typography>
            <hr style={{ align: 'center', width: '10%', borderColor: 'darkgrey', marginBottom: '50px' }} />

            <FAQContent
                question={"What is BuddyFinder? "}
                answer={"BuddyFinder is a social platform created to connect students with similar interests for extracurricular activities. It also hosts a forum for user interaction and various tools for scheduling and customization. Welcome to the site!"} />

            <FAQContent
                question={"Who created BuddyFinder? "}
                answer={"This website was created by a team of 4 University of Waterloo Management Engineering students for the MSCI 342 final project"} />

            <FAQContent
                question={"How do I contact site moderators?"}
                answer={"We have a 'Contact' page where you can submit any inquiries you have. We welcome all inquiries and will do our best to get back to you within 2 business days!"} />

            <FAQContent
                question={"How can I get started? "}
                answer={"We suggest signing into the platform using your Google account. Afterwards, you can customize your profile through the settings and find other users through the search or matching tools. There are opportunities to interact with other users through the forum or to organize your schedule through the calendar and statistics pages!"} />

            <FAQContent
                question={"Do I need an account?"}
                answer={"An account is not necessary if you want to browse the website and post anonymously. However, if you want to use scheduling, then it is necessary to sign in through your Google account"} />

        </Container>
    );

}


// Function for each accordion component
const FAQContent = ({ question, answer }) => {
    const classes = useStyles();

    return (
        <Accordion className={classes.accordion}>

            <AccordionSummary
                expandIcon={"▼"}
                style={{ paddingRight: '20px', paddingLeft: '40px', backgroundColor: '#6AAB8E' }}>
                <Typography>{question}</Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Typography>{answer}</Typography>
            </AccordionDetails>

        </Accordion>
    )
}
