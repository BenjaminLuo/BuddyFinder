import React from 'react';
import { Card, Typography } from '@material-ui/core';
import { TabPanel } from '../../components/UI/TabPanel';

// Tab menu for goals that are already completed
export const CompletedGoals = (props) => {
    return (
        <TabPanel value={props.currTab} index={1}>

            {/* Retrieves all existing user goals */}
            {props.goalData ? props.goalData.map((item) => (
                item.completed ?
                    <Card style={{ padding: '10px 10px', marginBottom: '5px' }}>
                        <Typography>
                            {item.goal}
                        </Typography>
                    </Card>
                    : ''
            )) : null}

        </TabPanel>);
}
