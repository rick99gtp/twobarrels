import "./JobDetail.css";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import { jobDetails, benefits } from "./JobDetails";
import { useEffect } from "react";

const JobDetail = ({ jobTitle }) => {
	console.log(jobTitle);
	const jobDetailObj = jobDetails[jobTitle];
	console.log({ jobDetailObj });

	useEffect(() => {
		document.title = jobDetailObj.title;
	}, []);
	return (
		<div className="job-detail-container">
			<h1 className="job-details-title">{jobDetailObj.title}</h1>

			{/* Overview */}
			<h3>Overview:</h3>
			{parse(jobDetailObj.overview)}

			{/* Location */}
			<h3>Location:</h3>
			{jobDetailObj.location}

			{/* Duration */}
			<h3>Duration:</h3>
			{jobDetailObj.duration}

			{/* Wage */}
			<h3>Wage:</h3>
			{jobDetailObj.wage}

			{/* Responsibilities */}
			<h3>Responsibilities</h3>
			<ul>
				{jobDetailObj.responsibilities.map((item, index) => {
					return <li key={index}>{item}</li>;
				})}
			</ul>

			{/* Minimum Qualifications */}
			<h3>Minimum Qualifications</h3>
			<ul>
				{jobDetailObj.minimumQualifications.map((item, index) => {
					return <li key={index}>{item}</li>;
				})}
			</ul>

			{/* Preferred Qualifications */}
			<h3>Preferred Qualifications</h3>
			<ul>
				{jobDetailObj.preferredQualifications.map((item, index) => {
					return <li key={index}>{item}</li>;
				})}
			</ul>

			{/* Why you might liek this job */}
			<h3>Why you might like this job:</h3>
			{parse(jobDetailObj.youMightLikeThisJob)}

			{/* Benefits */}
			<h3>Benefits:</h3>
			<ul className="job-detail-benefits">
				{benefits.map((benefit) => {
					return (
						<li>
							{benefit.route !== null ? (
								<Link to={`${benefit.route}`}>{benefit.text}</Link>
							) : (
								<p>{parse(benefit.text)}</p>
							)}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default JobDetail;
