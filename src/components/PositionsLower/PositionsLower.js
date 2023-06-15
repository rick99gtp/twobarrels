import "./PositionsLower.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const PositionsLower = (props) => {
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
				<h4>{props.title}</h4>
				<FontAwesomeIcon icon={activeIcon} className="fa-position" />
			</div>
			<ul className={`career-ul ${ulVisible ? "show-ul" : ""}`}>
				{props.children}
			</ul>
		</div>
	);
};

export default PositionsLower;
