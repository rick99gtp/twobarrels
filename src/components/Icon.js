import './Icon.css';
import { Link } from 'react-router-dom';

const Icon = (props) => {

    const linkStyle = {
        textDecoration: 'none'
    };

return (
    <div className='icon'>
        <Link to='/jobs' style={linkStyle}>
            {props.icon}
            <h4 className='icon__h4'>{props.h4}</h4>
            <p className='icon__p'>{props.p}</p>
        </Link>
    </div>
)
}

export default Icon;