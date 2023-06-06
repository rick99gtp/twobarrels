import "./Icon.css";
import { Link } from "react-router-dom";

const Icon = ({ h4, p, middleTile, icon }) => {
	return (
		<div className={`icon ${middleTile ? "middle-tile" : ""}`}>
			<Link to="/jobs">
				{icon}
				<h4 className="icon__h4">{h4}</h4>
				<p className="icon__p">{p}</p>
			</Link>
		</div>
	);
};

export default Icon;
