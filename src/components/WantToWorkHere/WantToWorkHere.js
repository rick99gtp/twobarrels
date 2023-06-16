import "./WantToWorkHere.css";
import { Link } from "react-router-dom";
// import { FaAngleRight } from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WantToWorkHere = ({ setActiveMenu }) => {
	return (
		<div className="want-to-work-here__container">
			<p>
				Want to work here? See all current openings and opportunities at Two
				Barrels.
			</p>
			<Link to="/jobs" onClick={() => setActiveMenu("jobs")}>
				Jobs <FontAwesomeIcon icon="angle-right" />
			</Link>
		</div>
	);
};

export default WantToWorkHere;
