import "./BodyOverlay.css";
import { useState, useEffect } from "react";

const BodyOverlay = ({ changeMenuOpen }) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<div
			onClick={() => changeMenuOpen()}
			className={`body-overlay ${isVisible ? "show-body-overlay" : null}`}
		></div>
	);
};

export default BodyOverlay;
