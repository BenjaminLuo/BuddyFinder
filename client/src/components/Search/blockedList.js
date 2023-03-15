import React from 'react';
import { TabPanel } from "../UI/TabPanel";

// Tabber for blocked user list
export function blockedList(value, query, UserCard) {
    return (
        <TabPanel value={value} index={2}>

            {query ? query.map((item) => (
                item.blocked ?
                    <UserCard
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
