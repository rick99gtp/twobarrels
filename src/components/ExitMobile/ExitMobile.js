import React from 'react'
// import { ImPlus } from 'react-icons/im';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ExitMobile.css';

const ExitMobile = props => {
    return (
        <div onClick={() => props.changeMenuOpen()} className={`exit-mobile ${props.menuOpen ? 'show-exit-mobile' : ''}`}>
            <FontAwesomeIcon icon="times" />
        </div>
    )
}

export default ExitMobile;