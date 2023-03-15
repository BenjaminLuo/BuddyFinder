import React from 'react';
import { TabPanel } from "../UI/TabPanel";

// Tabber for friend list
export function friendList(value, query, UserCard) {
    return (
        <TabPanel value={value} index={1}>

            {query ? query.map((item) => (
                item.friend ?
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
