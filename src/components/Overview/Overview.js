import "./Overview.css";
import Hero from "../Hero/Hero";
import NewSection from "../NewSection/NewSection";
import Icons from "../Icons/Icons";
import OverviewBottom from "../Overview/OverviewBottom";
import OverviewAwesome from "../Overview/OverviewAwesome";
import WantToWorkHere from "../WantToWorkHere/WantToWorkHere";

const Overview = ({ setActiveMenu, appWidth }) => {
	return (
		<div className="overview">
			<Hero />
			<NewSection>
				<Icons appWidth={appWidth} setActiveMenu={setActiveMenu} />
				<OverviewBottom />
			</NewSection>
			<OverviewAwesome />
			<WantToWorkHere setActiveMenu={setActiveMenu} />
		</div>
	);
};

export default Overview;
