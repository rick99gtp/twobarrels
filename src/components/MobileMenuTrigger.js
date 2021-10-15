import './MobileMenuTrigger.css';
import { GiHamburgerMenu } from 'react-icons/gi';

function MobileMenuTrigger() {
    return (
        <div className='mobile-menu-trigger'>
            <button className='nav-trigger-btn'><GiHamburgerMenu style={{marginRight: '.5em', position: 'relative', top: '4px', fontSize: '.9em'}} />Menu</button>
        </div>
    )
}

export default MobileMenuTrigger;