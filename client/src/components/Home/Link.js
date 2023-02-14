<<<<<<< HEAD
import React from 'react';
import { useState } from 'react';
const STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal',
};
export default function Link({ page, children }) {
    const [status, setStatus] = useState(STATUS.NORMAL);
    const onMouseEnter = () => {
        setStatus(STATUS.HOVERED);
    };
    const onMouseLeave = () => {
        setStatus(STATUS.NORMAL);
    };
    return (
        <a
            className={status}
            href={page || '#'}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </a>
    );
=======
import React from 'react';
import {useState} from 'react';
const STATUS = {
HOVERED: 'hovered',
NORMAL: 'normal',
};
export default function Link({page, children}) {
const [status, setStatus] = useState(STATUS.NORMAL);
const onMouseEnter = () => {
setStatus(STATUS.HOVERED);
};
const onMouseLeave = () => {
setStatus(STATUS.NORMAL);
};
return (
<a
className={status}
href={page || '#'}
onMouseEnter={onMouseEnter}
onMouseLeave={onMouseLeave}
>
{children}
</a>
);
>>>>>>> 4d8f954917cc71f21658ee5a794d74f94682d2fd
}