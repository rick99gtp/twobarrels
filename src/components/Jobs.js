import "./Jobs.css";
import JobPost from "./JobPost";
import PositionsLower from "./PositionsLower";
import JobList from "./JobList";

const Jobs = () => {
	return (
		<div className="jobs__container row">
			<h1>Jobs</h1>
			<hr />
			<section className="positions-upper">
				<h4>Our Current Top Priority</h4>
				{JobList.map((job) => {
					return (
						<JobPost
							title={job.title}
							location={job.location}
							icon={job.icon}
							priority={job.priority}
							work_type={job.workType}
							salary={job.salary}
							note={job.note}
						/>
					);
				})}
			</section>

			<h4>Always Looking for Great Talent</h4>
			<section className="positions-lower">
				<PositionsLower title="Management">
					<li>
						CTO/XTO - Chief Technology Officer<span>Spokane, WA</span>
					</li>
					<li>
						Chief Product Officer - XPO<span>Spokane, WA</span>
					</li>
					<li>
						Director of Marketing Demand<span>Austin, TX/hybrid</span>
					</li>
					<li>
						Director of Domain Name Registrar
						<span>Remote | Spokane - Austin - SLC</span>
					</li>
					<li>
						CISO / XISO - Chief Information <br />
						Security Officer / Executive Information <br />
						Security Officer<span>Spokane - Austin - Salt Lake City</span>
					</li>
					<li>
						Director of Front End Development
						<span>Remote | Spokane - Austin - SLC</span>
					</li>
				</PositionsLower>
				<PositionsLower title="Software">
					<li>
						Project Coordinator<span>Remote | Spokane - Austin - SLC</span>
					</li>
					<li>
						Product Owner<span>Remote | Spokane - Austin - SLC</span>
					</li>
					<li>
						Data Scientist<span>Remote | Spokane - Austin - SLC</span>
					</li>
					<li>
						Database Administrator<span>Remote | Spokane - Austin - SLC</span>
					</li>
					<li>
						UI/UX Designer<span>Remote | Spokane - Austin - SLC</span>
					</li>
					<li>
						iOS App Developer<span>Remote | Spokane - Austin - SLC</span>
					</li>
					<li>
						Product Designer<span>Spokane, WA</span>
					</li>
					<li>
						Product Manager<span>Remote | Spokane - Austin - SLC</span>
					</li>
					<li>
						Senior iOS App Developer<span>Remote | Spokane - Austin - SLC</span>
					</li>
					<li>
						Software Engineer - VoIP<span>Remote | Spokane - Austin - SLC</span>
					</li>
					<li>
						VOIP Architect<span>Remote | Spokane - Austin - SLC</span>
					</li>
					<li>
						Senior Android App Developer
						<span>Remote | Spokane - Austin - SLC</span>
					</li>
					<li>
						Product Manager-Merchant Services<span>Remote</span>
					</li>
					<li>
						Junior Automation Engineer<span>Spokane, WA</span>
					</li>
					<li>
						Junior Software Engineer<span>Spokane, WA</span>
					</li>
					<li>
						Software Engineer<span>Remote | Spokane - Austin - SLC</span>
					</li>
				</PositionsLower>

				<PositionsLower title="Systems">
					<li>
						Mac Desktop Support<span>Spokane, WA</span>
					</li>
					<li>
						Senior Linux Systems Engineer<span>Spokane, WA</span>
					</li>
					<li>
						Systems and Networking Manager<span>Spokane, WA</span>
					</li>
					<li>
						Desktop Support<span>Post Falls, ID</span>
					</li>
					<li>
						Junior Linux Systems Engineer<span>Spokane, WA</span>
					</li>
					<li>
						Linux Systems Engineer<span>Spokane, WA</span>
					</li>
					<li>
						Cyber Security Analyst - Information <br />
						Systems and Networking<span>Remote | Spokane - Austin - SLC</span>
					</li>
					<li>
						Security Analyst - Web Applications
						<span>Remote | Spokane - Austin - SLC</span>
					</li>
				</PositionsLower>

				<PositionsLower title="Digital">
					<li>
						Senior Marketing Specialist
						<span>Remote | Spokane - Austin - SLC</span>
					</li>
					<li>
						Senior Referral Affiliate Manager
						<span>Remote | Spokane - Austin - SLC</span>
					</li>
					<li>
						Graphic Designer<span>Remote | Spokane - Austin - SLC</span>
					</li>
					<li>
						Animator<span>Remote | Spokane - Austin - SLC</span>
					</li>
					<li>
						Videographer<span>Remote | Spokane - Austin - SLC</span>
					</li>
					<li>
						Creative Director<span>Remote | Spokane - Austin - SLC</span>
					</li>
					<li>
						Senior PPC Management Specialist
						<span>Remote | Spokane - Austin - SLC</span>
					</li>
					<li>
						Social Media Specialist<span>Remote | Spokane - Austin - SLC</span>
					</li>
					<li>
						Marketing Data Analyst<span>Remote | Spokane - Austin - SLC</span>
					</li>
					<li>
						Landing Page Designer/Developer
						<span>Remote | Spokane - Austin - SLC</span>
					</li>
					<li>
						Media Coordinator<span>Remote | Spokane - Austin - SLC</span>
					</li>
					<li>
						Front End SEO Developer<span>Remote | Spokane - Austin - SLC</span>
					</li>
					<li>
						Product Marketing Communications Manager<span>Austin, TX</span>
					</li>
					<li>
						Technical Recruiter<span>Spokane - Austin - SLC</span>
					</li>
					<li>
						Front-End Web Developer<span>Remote | Spokane - Austin - SLC</span>
					</li>
					<li>
						Junior Front-End Web Developer<span>Spokane, WA</span>
					</li>
					<li>
						Marketing Content Writer<span>Remote | Spokane - Austin - SLC</span>
					</li>
					<li>
						SEO Specialist<span>Remote | Spokane - Austin - SLC</span>
					</li>
				</PositionsLower>
			</section>
		</div>
	);
};

export default Jobs;
