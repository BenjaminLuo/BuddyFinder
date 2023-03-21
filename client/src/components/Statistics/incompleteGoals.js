import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { TabPanel } from '../../components/UI/TabPanel';

// Tab menu for goals that are incomplete
export const IncompleteGoals = ({ tabToggle, goalObject, ToDoItem, handleAddition }) => {
    return (
        <TabPanel value={tabToggle} index={0}>

            {/* Retrieves all existing user goals */}
            {goalObject ? goalObject.map((item, index) => (
                item.completed ? '' :
                    ToDoItem({ itemID: item.id.toString(), value: item.goal, index: index })
            )) : null}

            <Button
                type="submit"
                onClick={(e) => handleAddition(e)}
                variant="contained"
                color="primary"
                style={{ height: '30px', marginTop: '3px' }}>
                <Typography variant="h6">Add another task...</Typography>
            </Button>

        </TabPanel>
    );
}
