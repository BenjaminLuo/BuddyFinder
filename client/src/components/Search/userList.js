import React from 'react';
import { TabPanel } from "../../components/UI/TabPanel";

// Tabber for list of all users
export function userList(value, query, UserCard) {
    return (
        <TabPanel value={value} index={0}>

            {query ? query.map((item, index) => (
                item.searchable ?
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
