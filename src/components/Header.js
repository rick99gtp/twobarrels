import './Header.css';
import Logo from './Logo';
import Menu from './Menu';
import MobileMenuTrigger from './MobileMenuTrigger';
import { useState, useEffect } from 'react';
import background from '../assets/tboverlay4.png';
import ExitMobile from './ExitMobile';

const Header = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const changeMenuOpen = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        console.log(menuOpen);
    },[menuOpen]);

    return (
        <div className='header' style={{ backgroundImage: `url(${background})`}}>
            <Logo />
            {menuOpen ? <Menu activePage={props.activePage}/> : null}
            {!menuOpen ? <MobileMenuTrigger onchange={changeMenuOpen} /> : null}

            <ExitMobile menuopen={menuOpen} changemenuopen={changeMenuOpen}/>
        </div>
    )
}

export default Header;