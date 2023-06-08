import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Menu = ({ activeMenu, setActiveMenu, menuOpen, changeMenuOpen }) => {
	const hideMenu = (page) => {
		changeMenuOpen();
		setActiveMenu(page);
	};

	const menuOptions = [
		{
			link: "",
			icon: "home",
			name: "Overview",
		},
		{
			link: "whoweare",
			icon: "user",
			name: "Who We Are",
		},
		{
			link: "jobs",
			icon: "briefcase",
			name: "Jobs",
		},
		{
			link: "contactus",
			icon: "phone-alt",
			name: "Contact Us",
		},
		{
			link: "blog",
			icon: "beer",
			name: "Blog",
		},
	];

	return (
		<div className={`menu ${menuOpen ? "show-mobile-nav" : ""}`}>
			<nav className="nav">
				<ul>
					{menuOptions.map((option, index) => {
						return (
							<Link to={`/${option.link}`} onClick={() => hideMenu(index)}>
								<li
									style={{
										backgroundColor: `${activeMenu === index ? "#003454" : ""}`,
									}}
								>
									<FontAwesomeIcon
										icon={option.icon}
										style={{
											fontSize: "21px",
											top: "3px",
											position: "relative",
											color: `${activeMenu === index ? "var(--orange)" : ""}`,
										}}
									/>
									<span className={activeMenu === index ? "active-menu" : ""}>
										{option.name}
									</span>
								</li>
							</Link>
						);
					})}
				</ul>
			</nav>
		</div>
	);
};

export default Menu;
