import React from 'react'
import { ImPlus } from 'react-icons/im';
import './ExitMobile.css';

function ExitMobile(props) {
    return (
        <div onClick={() => props.changemenuopen()} className={`exit-mobile ${props.menuopen ? 'show-exit-mobile' : ''}`}>
            <ImPlus />
        </div>
    )
}

export default ExitMobile;