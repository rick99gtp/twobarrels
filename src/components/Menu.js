import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState } from "react";

const Menu = ({ menuOpen, activePage, changeMenuOpen }) => {
	const [activeMenu, setActiveMenu] = useState(0);

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
							<li
								style={{
									backgroundColor: `${activeMenu === index ? "#003454" : ""}`,
								}}
							>
								<Link to={`/${option.link}`} onClick={() => hideMenu(index)}>
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
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
};

export default Menu;
