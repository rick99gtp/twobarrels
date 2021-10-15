import './Header.css';
import Logo from './Logo';
import Menu from './Menu';

const Header = (props) => {
    return (
        <div className='header'>
            <Logo />
            <Menu activePage={props.activePage}/>
        </div>
    )
}

export default Header;