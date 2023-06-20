import "./JobPost.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const JobPost = ({
	priority,
	title,
	location,
	worktype,
	salary,
	icon,
	note,
	route,
	appWidth,
}) => {
	return (
		<div className="job-post__container">
			<FontAwesomeIcon icon={icon} className="fa-icon" />
			<div className="middle-section">
				<div className="priority-container">
					{priority && (
						<h4 style={{ fontFamily: "Lato, sans-serif", color: "#000" }}>
							🔥 Priority
						</h4>
					)}
					<h4 style={{ marginTop: 0 }}>{title}</h4>
				</div>
				<div className="details-container">
					<h5>{location}</h5>
					<h5>
						{worktype} - {salary}
					</h5>
				</div>
			</div>
			{note && appWidth < 768 && <h5>{note}</h5>}
			<Link to={`#/jobs${route}`}>LEARN MORE</Link>
		</div>
	);
};

export default JobPost;
