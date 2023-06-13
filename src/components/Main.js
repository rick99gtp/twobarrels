import "./Main.css";
import Overview from "./Overview";
import WhoWeAre from "./WhoWeAre";
import Jobs from "./Jobs";
import ContactUs from "./ContactUs";
import Blog from "./Blog";
import Wages from "./Wages/Wages";
import JobDetail from "./JobDetail/JobDetail";
import WFHComfortPackage from "./WFHComfortPackage/WFHComfortPackage";
import Retirement from "./Retirement/Retirement";
import HealthInsurance from "./HealthInsurance/HealthInsurance";
import MaternityPaternityLeave from "./MaternityPaternityLeave/MaternityPaternityLeave";
import FlexibleHours from "./FlexibleHours/FlexibleHours";
import Pto from "./Pto/Pto";
import Coffee from "./Coffee/Coffee";
import { Switch, Route } from "react-router-dom";
import Footer from "./Footer";

const Main = ({ appWidth, setActiveMenu, jobSubMenusVisible }) => {
	return (
		<div className="main">
			<Switch>
				<Route path="/whoweare">
					<WhoWeAre />
				</Route>
				<Route path="/jobs/software/senior-php-developer">
					<JobDetail jobTitle="senior-php-developer" />
				</Route>
				<Route path="/jobs/software/senior-engineer">
					<JobDetail jobTitle="senior-engineer" />
				</Route>
				<Route path="/jobs/information-security-director">
					<JobDetail jobTitle="information-security-director" />
				</Route>
				<Route path="/jobs/management/director-of-voip">
					<JobDetail jobTitle="director-of-voip" />
				</Route>
				<Route path="/jobs/software/product-manager">
					<JobDetail jobTitle="product-manager" />
				</Route>
				<Route path="/jobs/software/senior-software-engineer-voip">
					<JobDetail jobTitle="senior-software-engineer-voip" />
				</Route>
				<Route path="/jobs/software/senior-backend-developer">
					<JobDetail jobTitle="senior-backend-developer" />
				</Route>
				<Route path="/jobs/software/senior-data-engineer">
					<JobDetail jobTitle="senior-data-engineer" />
				</Route>
				<Route path="/jobs/systems/security-engineer">
					<JobDetail jobTitle="security-engineer" />
				</Route>
				<Route path="/jobs/websites/senior-front-web-developer">
					<JobDetail jobTitle="senior-front-web-developer" />
				</Route>
				<Route path="/jobs/software/devops-engineers">
					<JobDetail jobTitle="devops-engineers" />
				</Route>
				<Route path="/jobs/software/director-of-software-engineering">
					<JobDetail jobTitle="director-of-software-engineering" />
				</Route>
				<Route path="/jobs/websites/chief-marketing-officer">
					<JobDetail jobTitle="chief-marketing-officer" />
				</Route>
				<Route path="/jobs/websites/junior-graphic-designer">
					<JobDetail jobTitle="junior-graphic-designer" />
				</Route>
				<Route path="/jobs/benefits/wages">
					<Wages />
				</Route>
				<Route path="/jobs/benefits/wfh-comfort-package">
					<WFHComfortPackage />
				</Route>
				<Route path="/jobs/benefits/pto">
					<Pto />
				</Route>
				<Route path="/jobs/benefits/retirement">
					<Retirement />
				</Route>
				<Route path="/jobs/benefits/health-insurance">
					<HealthInsurance />
				</Route>
				<Route path="/jobs/benefits/maternity-paternity-leave">
					<MaternityPaternityLeave />
				</Route>
				<Route path="/jobs/benefits/flexible-hours">
					<FlexibleHours />
				</Route>
				<Route path="/jobs/benefits/coffee">
					<Coffee />
				</Route>
				<Route path="/jobs">
					<Jobs jobSubMenusVisible={jobSubMenusVisible} />
				</Route>
				<Route path="/contactus">
					<ContactUs />
				</Route>
				<Route path="/blog">
					<Blog />
				</Route>
				<Route path="/">
					<Overview setActiveMenu={setActiveMenu} appWidth={appWidth} />
				</Route>
			</Switch>
			<Footer />
		</div>
	);
};

export default Main;
