import './MobileMenuTrigger.css';
// import { GiHamburgerMenu } from 'react-icons/gi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MobileMenuTrigger = props => {
    return (
        <div className='mobile-menu-trigger'>
            <button onClick={() => props.onchange()} className='nav-trigger-btn'><FontAwesomeIcon icon="bars" style={{marginRight: '.5em', position: 'relative', fontSize: '.9em'}} />Menu</button>
        </div>
    )
}

export default MobileMenuTrigger;