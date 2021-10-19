import './WantToWorkHere.css';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

const WantToWorkHere = () => {
    return (
        <div className='want-to-work-here__container'>
            <p>Want to work here? See all current openings and opportunities at Two Barrels.</p>
            <Link to="/jobs">
                Jobs <FaAngleRight />
            </Link>
        </div>
    )
}

export default WantToWorkHere;