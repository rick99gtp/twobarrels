import './Menu.css';
import { IoHome } from 'react-icons/io5';

const Menu = (props) => {

    return (
        <div className='menu'>
            <nav className='nav'>
                <ul>
                    <li className={props.activePage===0 ? 'nav-bg' : null}><IoHome style={{fontSize: '18px', top: '2px', position: 'relative'}}/><span>Overview</span></li>
                    <li className={props.activePage===1 ? 'nav-bg' : null}>Who We Are</li>
                    <li className={props.activePage===2 ? 'nav-bg' : null}>Jobs</li>
                    <li className={props.activePage===3 ? 'nav-bg' : null}>Contact Us</li>
                    <li className={props.activePage===4 ? 'nav-bg' : null}>Blog</li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;