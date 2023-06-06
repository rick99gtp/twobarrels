import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
	faTwitterSquare,
	faFacebookSquare,
	faTumblrSquare,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function App() {
	library.add(
		fab,
		fas,
		faTwitterSquare,
		faFacebookSquare,
		faTumblrSquare,
		faLinkedin
	);

	const [menuOpen, setMenuOpen] = useState(false);
	const [width, setWidth] = useState(window.innerWidth);

	const changeMenuOpen = () => {
		setMenuOpen(!menuOpen);
	};

	useEffect(() => {
		const handleResizeWindow = () => setWidth(window.innerWidth);

		window.addEventListener("resize", handleResizeWindow);
		return () => {
			window.removeEventListener("resize", handleResizeWindow);
		};
	}, []);

	return (
		<div className="App">
			<Router>
				<Header
					menuOpen={menuOpen}
					changeMenuOpen={changeMenuOpen}
					appWidth={width}
				/>
				<Main appWidth={width} />
			</Router>
		</div>
	);
}

export default App;
