import "./PositionsLower.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const PositionsLower = ({ title, children }) => {
	const [ulVisible, setUlVisible] = useState(false);
	const [activeIcon, setActiveIcon] = useState("plus");

	useEffect(() => {
		if (!ulVisible) {
			setActiveIcon("plus");
		} else {
			setActiveIcon("minus");
		}
	}, [ulVisible]);

	return (
		<div className="position__container">
			<div
				className={`position-item ${ulVisible && "dropdown-active"}`}
				onClick={() => setUlVisible(!ulVisible)}
			>
				<h3 className="lower-title">{title}</h3>
				<FontAwesomeIcon icon={activeIcon} className="fa-position" />
			</div>
			<ul className={`career-ul ${ulVisible ? "show-ul" : ""}`}>{children}</ul>
		</div>
	);
};

export default PositionsLower;
