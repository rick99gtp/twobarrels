import './PositionsLower.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, Children } from 'react';

const PositionsLower = props => {
    const [ulVisible, setUlVisible] = useState(false);
    const [ulHeight, setUlHeight] = useState(null);
    const [activeIcon, setActiveIcon] = useState('plus');

    const calculateHeight = () => {
        const count = Children.count(props.children);
        return {
            height: `${count * 55}px`
        }
    };

    useEffect(() => {
        setUlHeight(calculateHeight());
    }, []);

    useEffect(() => {
        if (!ulVisible) {
            setUlHeight({
                height: '0px'
            });

            // change icon to plus
            setActiveIcon('plus');
        }
        else {
            setUlHeight(calculateHeight());
            setActiveIcon('minus');
        }
    }, [ulVisible]);

    const changeUlVisible = () => {
        setUlVisible(!ulVisible);
    };

    return (
        <div className='position__container'>
            <div className='position-item' onClick={changeUlVisible}>
                <h4>{props.title}</h4><FontAwesomeIcon icon={activeIcon} className='fa-position' />
            </div>
            <ul className={`career-ul ${ulVisible ? 'show-ul' : ''}`} style={ulHeight}>
                {props.children}
            </ul>
        </div>
    )
}

export default PositionsLower;