import "./Jobs.css";
import JobPost from "./JobPost";
import PositionsLower from "../PositionsLower/PositionsLower";
import JobList from "./JobList";
import {
	lookingForManagement,
	lookingForSystems,
	lookingForSoftware,
	lookingForDigital,
} from "./LookingForJobsList";
import { useEffect } from "react";

const Jobs = ({ setJobSubMenusVisible, setActiveMenu, appWidth }) => {
	useEffect(() => {
		document.title =
			"Software Engineering and Web Development Jobs in Spokane, WA";
		setJobSubMenusVisible(true);
		setActiveMenu("jobs");
	}, [setJobSubMenusVisible, setActiveMenu]);
	return (
		<div className="jobs__container">
			<h1>Jobs</h1>
			<hr />
			<section className="positions-upper row">
				<h4>Our Current Top Priority</h4>
				{JobList.map((job) => {
					return (
						<JobPost
							key={job.id}
							title={job.title}
							location={job.location}
							icon={job.icon}
							priority={job.priority}
							work_type={job.workType}
							salary={job.salary}
							note={job.note}
							route={job.route}
							worktype={job.workType}
							appWidth={appWidth}
						/>
					);
				})}

				<h4 className="row">Always Looking for Great Talent</h4>
				<section className="positions-lower row">
					<PositionsLower title="Management">
						{lookingForManagement.map((job, index) => {
							return (
								<li key={index}>
									<div style={{ margin: 0 }}>
										{job.title.map((title) => {
											return (
												<p key={title} style={{ margin: 0 }}>
													{title}
												</p>
											);
										})}
									</div>
									<span>{job.location}</span>
								</li>
							);
						})}
					</PositionsLower>
					<PositionsLower title="Software">
						{lookingForSoftware.map((job, index) => {
							return (
								<li key={index}>
									<div style={{ margin: 0 }}>
										{job.title.map((title) => {
											return (
												<p key={title} style={{ margin: 0 }}>
													{title}
												</p>
											);
										})}
									</div>
									<span>{job.location}</span>
								</li>
							);
						})}
					</PositionsLower>

					<PositionsLower title="Systems">
						{lookingForSystems.map((job, index) => {
							return (
								<li key={index}>
									<div style={{ margin: 0 }}>
										{job.title.map((title) => {
											return (
												<p key={title} style={{ margin: 0 }}>
													{title}
												</p>
											);
										})}
									</div>
									<span>{job.location}</span>
								</li>
							);
						})}
					</PositionsLower>
					<PositionsLower title="Digital">
						{lookingForDigital.map((job, index) => {
							return (
								<li key={index}>
									<div style={{ margin: 0 }}>
										{job.title.map((title) => {
											return (
												<p key={title} style={{ margin: 0 }}>
													{title}
												</p>
											);
										})}
									</div>
									<span>{job.location}</span>
								</li>
							);
						})}
					</PositionsLower>
				</section>
			</section>
		</div>
	);
};

export default Jobs;
