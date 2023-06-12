import "./Overview.css";
import Hero from "./Hero";
import NewSection from "./NewSection";
import Icons from "./Icons";
import OverviewBottom from "./OverviewBottom";
import OverviewAwesome from "./OverviewAwesome";
import WantToWorkHere from "./WantToWorkHere";

const Overview = ({ setActiveMenu, appWidth }) => {
	return (
		<div className="overview">
			<Hero />
			<NewSection>
				<Icons appWidth={appWidth} setActiveMenu={setActiveMenu} />
				<OverviewBottom />
			</NewSection>
			<OverviewAwesome />
			<WantToWorkHere />
		</div>
	);
};

export default Overview;
