import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import { HashRouter as Router } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
	faTwitterSquare,
	faFacebookSquare,
	faTumblrSquare,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import ScrollToTop from "./components/ScrollToTop";

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
	const [activeMenu, setActiveMenu] = useState("overview");
	const [jobSubMenusVisible, setJobSubMenusVisible] = useState(false);

	const changeMenuOpen = () => {
		setMenuOpen(!menuOpen);
	};

	useEffect(() => {
		const handleResizeWindow = () => setWidth(window.innerWidth);

		window.addEventListener("resize", handleResizeWindow);

		document.title = "Two Barrels LLC | Software Company | When 1 Isn't Enough";
		return () => {
			window.removeEventListener("resize", handleResizeWindow);
		};
	}, []);

	useEffect(() => {
		console.log(`job sub menus visible = ${jobSubMenusVisible}`);
	}, [jobSubMenusVisible]);

	return (
		<div className="App">
			<Router basename="/app">
				<ScrollToTop />
				<Header
					activeMenu={activeMenu}
					setActiveMenu={setActiveMenu}
					menuOpen={menuOpen}
					changeMenuOpen={changeMenuOpen}
					appWidth={width}
					setJobSubMenusVisible={setJobSubMenusVisible}
					jobSubMenusVisible={jobSubMenusVisible}
				/>
				<Main
					appWidth={width}
					setActiveMenu={setActiveMenu}
					activeMenu={activeMenu}
					jobSubMenusVisible={jobSubMenusVisible}
					setJobSubMenusVisible={setJobSubMenusVisible}
				/>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
