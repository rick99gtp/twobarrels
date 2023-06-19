import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ExitMobile.css";

const ExitMobile = ({ changeMenuOpen, menuOpen }) => {
	return (
		<div
			onClick={() => changeMenuOpen()}
			className={`exit-mobile ${menuOpen ? "show-exit-mobile" : ""}`}
		>
			<FontAwesomeIcon icon="times" />
		</div>
	);
};

export default ExitMobile;
