import './Menu.css';
import { IoHome, IoPersonSharp, IoBriefcase } from 'react-icons/io5';
import { ImPhone } from 'react-icons/im';
import { GiBeerStein } from 'react-icons/gi';

const Menu = (props) => {

    return (
        <div className='menu'>
            <nav className='nav'>
                <ul>
                    <li className={props.activePage===0 ? 'nav-bg' : null}><IoHome style={{fontSize: '20px', top: '3px', position: 'relative'}}/><span>Overview</span></li>
                    <li className={props.activePage===1 ? 'nav-bg' : null}><IoPersonSharp style={{fontSize: '20px', top: '3px', position: 'relative'}}/><span>Who We Are</span></li>
                    <li className={props.activePage===2 ? 'nav-bg' : null}><IoBriefcase style={{fontSize: '20px', top: '3px', position: 'relative'}}/><span>Jobs</span></li>
                    <li className={props.activePage===3 ? 'nav-bg' : null}><ImPhone style={{fontSize: '20px', top: '3px', position: 'relative'}}/><span>Contact Us</span></li>
                    <li className={props.activePage===4 ? 'nav-bg' : null}><GiBeerStein style={{fontSize: '20px', top: '3px', position: 'relative'}}/><span>Blog</span></li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;