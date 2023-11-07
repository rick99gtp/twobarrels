import "./Icons.css";
import Icon from "../Icon/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icons = ({ appWidth, setActiveMenu }) => {
	const iconStyle = {
		fontSize: "46px",
		overflow: "hidden",
		transition: "all .25s",
		marginTop: "30px",
		textDecoration: "none",
	};

	const tiles = [
		{
			IconName: "cog",
			IconTitle: "Systems",
			IconDescription:
				"Are You Passionate About Turning Things Off And On Again? Are You Naturally Tech-Savvy? Let's Talk!",
		},
		{
			IconName: "code",
			IconTitle: "Software",
			IconDescription:
				"Got Code? Is It Logical And Clean? Do You Feel Passionate About Tabs Or Spaces? If So, We Want Your Skills!",
		},
		{
			IconName: "pencil-alt",
			IconTitle: "Creative",
			IconDescription:
				"Are You Smart? A Little Competitve? Do You Care About Sentences And The Way A Page Looks? Talk To Us!",
		},
	];

	return (
		<div className={`icons ${appWidth >= 768 ? "icon-flex" : ""}`}>
			{tiles.map((tile, index) => {
				return (
					<Icon
						key={tile.IconName}
						icon={
							<FontAwesomeIcon
								icon={tile.IconName}
								style={iconStyle}
								className={"icon-hover-style"}
							/>
						}
						h4={tile.IconTitle}
						p={tile.IconDescription}
						middleTile={index === 1 && appWidth >= 768}
						setActiveMenu={setActiveMenu}
					/>
				);
			})}
		</div>
	);
};

export default Icons;
