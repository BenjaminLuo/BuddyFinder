import React from 'react';
import { TabPanel } from "../../components/UI/TabPanel";

// Tabber for blocked user list
export function blockedList(value, query, UserCard) {
    return (
        <TabPanel value={value} index={2}>

            {query ? query.map((item, index) => (
                item.blocked ?
                    <UserCard
                        key={index}
                        name={item.display_name}
                        userID={item.user_id}
                        year={item.term}
                        program={item.program}
                        disabled={item.private}
                        friend={item.friend}
                        blocked={item.blocked} />
                    : null
            )) : null}

        </TabPanel>
    );
}
