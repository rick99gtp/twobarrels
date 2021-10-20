import './Menu.css';
// import { IoHome, IoPersonSharp, IoBriefcase } from 'react-icons/io5';
// import { ImPhone } from 'react-icons/im';
// import { GiBeerStein } from 'react-icons/gi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Menu = (props) => {

    const [activeMenu,setActiveMenu] = useState(0);

    const hideMenu = (page) => {
        props.changeMenuOpen();
        setActiveMenu(page);
    };

    return (
        <div className={`menu ${props.menuOpen ? 'show-mobile-nav' : ''}`}>
            <nav className='nav'>
                <ul>
                    <li className={activeMenu === 0 ? 'nav-bg' : null}><Link to="/" onClick={() => hideMenu(0)}><FontAwesomeIcon icon="home" style={{fontSize: '21px', top: '3px', position: 'relative'}}/><span>Overview</span></Link></li>
                    <li className={activeMenu === 1 ? 'nav-bg' : null}><Link to="/whoweare" onClick={() => hideMenu(1)}><FontAwesomeIcon icon="user" style={{fontSize: '21px', top: '3px', position: 'relative'}}/><span>Who We Are</span></Link></li>
                    <li className={activeMenu === 2 ? 'nav-bg' : null}><Link to="/jobs" onClick={() => hideMenu(2)}><FontAwesomeIcon icon="briefcase" style={{fontSize: '21px', top: '3px', position: 'relative'}}/><span>Jobs</span></Link></li>
                    <li className={activeMenu === 3 ? 'nav-bg' : null}><Link to="/contactus" onClick={() => hideMenu(3)}><FontAwesomeIcon icon="phone-alt" style={{fontSize: '21px', top: '3px', position: 'relative'}}/><span>Contact Us</span></Link></li>
                    <li className={activeMenu === 4 ? 'nav-bg' : null}><Link to="/blog" onClick={() => hideMenu(4)}><FontAwesomeIcon icon="beer" style={{fontSize: '21px', top: '3px', position: 'relative'}}/><span>Blog</span></Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;