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
            padding: '40px',
            padding: '120px 100px 40px 100px'
        }
    }
})


export default function Contact(props) {
    const classes = useStyles();


    return (
        <Container maxWidth={false} className={classes.page}>

            <Typography gutterBottom variant="h4" align="center">
                FAQ
            </Typography>
            <hr style={{ align: 'center', width: '10%', borderColor: 'darkgrey', marginBottom: '50px' }} />

            <FAQContent
                question={"Question 1"}
                answer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."} />

            <FAQContent
                question={"Question 2"}
                answer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."} />

            <FAQContent
                question={"Question 3"}
                answer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."} />

        </Container>
    );

}


const FAQContent = (props) => {
    const classes = useStyles();

    return (
        <Accordion className={classes.accordion}>

            <AccordionSummary
                expandIcon={"▼"}
                style={{ paddingRight: '20px', paddingLeft: '40px' }}>
                <Typography>{props.question}</Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Typography>{props.answer}</Typography>
            </AccordionDetails>

        </Accordion>
    )
}
