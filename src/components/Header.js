import './Header.css';
import Logo from './Logo';
import Menu from './Menu';
import MobileMenuTrigger from './MobileMenuTrigger';
import { useState } from 'react';
import background from '../assets/tboverlay4.png';

const Header = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className='header' style={{ backgroundImage: `url(${background})`}}>
            <Logo />
            {menuOpen ? <Menu activePage={props.activePage}/> : null}
            {!menuOpen ? <MobileMenuTrigger /> : null}
        </div>
    )
}

export default Header;