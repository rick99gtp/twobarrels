import './Icon.css';
// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Icon = (props) => {

// const [color, setColor] = useState('var(--turquoise');

// const iconStyle = {
//     textDecoration: "none",
//     color: color
// }

// useEffect(() => {
//     console.log(color);
// }, [color]);

return (
    <div className='icon'>
        <Link to='/jobs'>
            {props.icon}
            <h4 className='icon__h4'>{props.h4}</h4>
            <p className='icon__p'>{props.p}</p>
        </Link>
    </div>
)
}

export default Icon;