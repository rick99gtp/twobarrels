import './Overview.css';
import { useEffect } from 'react';

const Overview= (props) => {

    useEffect(() => {
        props.changeActivePage(0);
    },[]);

    return (
        <div className='overview'>
            Overview page
        </div>
    )
}

export default Overview;