import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ExitMobile.css";

const ExitMobile = (props) => {
	return (
		<div
			onClick={() => props.changeMenuOpen()}
			className={`exit-mobile ${props.menuOpen ? "show-exit-mobile" : ""}`}
		>
			<FontAwesomeIcon icon="times" />
		</div>
	);
};

export default ExitMobile;
