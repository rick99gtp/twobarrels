import "./Header.css";
import Logo from "./Logo";
import Menu from "./Menu";
import BodyOverlay from "./BodyOverlay";
import MobileMenuTrigger from "./MobileMenuTrigger";
import background from "../assets/tboverlay4.png";
import ExitMobile from "./ExitMobile";

const Header = ({
	activeMenu,
	setActiveMenu,
	menuOpen,
	activePage,
	changeMenuOpen,
	appWidth,
}) => {
	return (
		<div className="header" style={{ backgroundImage: `url(${background})` }}>
			<Logo />
			<Menu
				activeMenu={activeMenu}
				setActiveMenu={setActiveMenu}
				menuOpen={menuOpen}
				activePage={activePage}
				changeMenuOpen={changeMenuOpen}
			/>
			{appWidth < 768 ? (
				<MobileMenuTrigger onchange={() => changeMenuOpen()} />
			) : null}

			<ExitMobile menuOpen={menuOpen} changeMenuOpen={() => changeMenuOpen()} />
			{menuOpen ? (
				<BodyOverlay changeMenuOpen={() => changeMenuOpen()} />
			) : null}
		</div>
	);
};

export default Header;
