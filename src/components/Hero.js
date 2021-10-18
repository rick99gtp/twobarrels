import './Hero.css';
import background from '../assets/2B-building-v5.jpg';

const Hero = () => {
    return (
        <div className='overview__hero' style={{ backgroundImage: `url(${background})` }}>
            <h1>We Give'Em Two Barrels - Every Day</h1>
            <hr />
            <span className='overview__hero-bottom'>
                Proudly located in Spokane, WA & Austin, TX
            </span>
        </div>
    )
}

export default Hero;