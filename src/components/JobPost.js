import "./JobPost.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const JobPost = ({
	priority,
	title,
	location,
	salary,
	icon,
	note,
	work_type,
}) => {
	return (
		<div className="job-post__container">
			<FontAwesomeIcon icon={icon} className="fa-icon" />
			{priority && (
				<h4 style={{ fontFamily: "Lato, sans-serif", color: "#000" }}>
					🔥 Priority
				</h4>
			)}
			<h4 style={{ marginTop: 0 }}>{title}</h4>
			<h5>{location}</h5>
			<h5>{salary}</h5>
			{note && <h5>{note}</h5>}
			<Link
				to="/"
				style={{
					position: "relative",
					letterSpacing: "2px",
					fontSize: "17px",
					margin: "18px 0 0",
					textAlign: "center",
					background: "var(--orange)",
					color: "#fff",
					fontWeight: "700",
					padding: ".75em 1.5em",
					textTransform: "uppercase",
					transition: "all .25s",
					width: "100%",
					display: "block",
				}}
			>
				LEARN MORE
			</Link>
		</div>
	);
};

export default JobPost;
