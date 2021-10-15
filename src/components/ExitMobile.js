import React from 'react'
import { ImPlus } from 'react-icons/im';
import './ExitMobile.css';

const ExitMobile = props => {
    return (
        <div onClick={() => props.changeMenuOpen()} className={`exit-mobile ${props.menuOpen ? 'show-exit-mobile' : ''}`}>
            <ImPlus />
        </div>
    )
}

export default ExitMobile;