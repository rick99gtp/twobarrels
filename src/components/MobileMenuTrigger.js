import './MobileMenuTrigger.css';
import { GiHamburgerMenu } from 'react-icons/gi';

const MobileMenuTrigger = props => {
    return (
        <div className='mobile-menu-trigger'>
            <button onClick={() => props.onchange()} className='nav-trigger-btn'><GiHamburgerMenu style={{marginRight: '.5em', position: 'relative', top: '4px', fontSize: '.9em'}} />Menu</button>
        </div>
    )
}

export default MobileMenuTrigger;