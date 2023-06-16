import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Menu = ({
	activeMenu,
	setActiveMenu,
	menuOpen,
	changeMenuOpen,
	setJobSubMenusVisible,
}) => {
	const hideMenu = (page) => {
		if (changeMenuOpen) {
			changeMenuOpen();
		}
		setActiveMenu(page);
		setJobSubMenusVisible(page.substring(0, 4) === "jobs");
	};

	const menuOptions = [
		{
			link: "overview",
			icon: "home",
			name: "Overview",
			submenus: [],
		},
		{
			link: "whoweare",
			icon: "user",
			name: "Who We Are",
			submenus: [],
		},
		{
			link: "jobs",
			icon: "briefcase",
			name: "Jobs",
			submenus: [
				{
					link: "jobs/how-we-work",
					icon: "circle",
					name: "How We Work",
				},
				{
					link: "jobs/how-to-get-a-job-here",
					icon: "circle",
					name: "How To Get A Job Here",
				},
				{
					link: "jobs/apply-now",
					icon: "circle",
					name: "Apply Now",
				},
				{
					link: "jobs/benefits",
					icon: "circle",
					name: "Benefits",
				},
				{
					link: "jobs/why-spokane",
					icon: "circle",
					name: "Why Spokane?",
				},
				{
					link: "jobs/why-austin",
					icon: "circle",
					name: "Why Austin?",
				},
			],
		},
		{
			link: "contactus",
			icon: "phone-alt",
			name: "Contact Us",
			submenus: [],
		},
		{
			link: "blog",
			icon: "beer",
			name: "Blog",
			submenus: [],
		},
	];

	useEffect(() => {
		console.log("activeMenu:", activeMenu);
	}, []);

	return (
		<div className={`menu ${menuOpen ? "show-mobile-nav" : ""}`}>
			<nav className="nav">
				<ul>
					{menuOptions.map((option, index) => {
						return (
							<li>
								<Link
									to={`/${option.link}`}
									onClick={() => hideMenu(option.link)}
								>
									<FontAwesomeIcon
										icon={option.icon}
										style={{
											fontSize: "21px",
											top: "3px",
											position: "relative",
											color: `${
												activeMenu === option.link ? "var(--orange)" : ""
											}`,
										}}
									/>
									<span
										className={activeMenu === option.link ? "active-menu" : ""}
									>
										{option.name}
									</span>
									{/* Display jobs sub menus if Jobs is the active menu */}
								</Link>
								<ul
									style={{
										display:
											activeMenu.substring(0, 4) === "jobs" ? "block" : "none",
									}}
									className="sub-menu"
								>
									{option.submenus.length > 0 &&
										option.submenus.map((menu) => {
											return (
												<li
													style={{
														color: `${
															activeMenu === menu.link ? "#003454" : ""
														}`,
														paddingLeft: 0,
													}}
												>
													<Link
														to={`/${menu.link}`}
														onClick={() => hideMenu(menu.link)}
													>
														<FontAwesomeIcon
															icon={menu.icon}
															style={{
																fontSize: "10px",
																top: "3px",
																position: "relative",
																color: `${
																	activeMenu === menu.link
																		? "var(--orange)"
																		: ""
																}`,
															}}
														/>
														<span
															className={
																activeMenu === menu.link ? "active-menu" : ""
															}
														>
															{menu.name}
														</span>
													</Link>
												</li>
											);
										})}
								</ul>
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
};

export default Menu;
