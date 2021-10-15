import './Overview.css';
import { useEffect } from 'react';
import background from '../assets/2B-building-v5.jpg';

const Overview = (props) => {

    useEffect(() => {
        props.changeActivePage(0);
    }, []);

    return (
        <div className='overview'>
            <section>
                <div className='overview__hero'  style={{ backgroundImage: `url(${background})` }}>
                    <h1>We Give'Em Two Barrels - Every Day</h1>
                    <hr />
                    <span className='overview__hero-bottom'>
                        Proudly located in Spokane, WA & Austin, TX
                    </span>
                </div>
            </section>
        </div>
    )
}

export default Overview;