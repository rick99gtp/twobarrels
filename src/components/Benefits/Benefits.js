import "./Benefits.css";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { benefits } from "../JobDetail/JobDetails";
import { useEffect } from "react";

const Benefits = () => {
	useEffect(() => {
		document.title = "What's the Freaking Benefits? | Two Barrels LLC";
	}, []);
	return (
		<div className="page-container">
			<h1 className="job-details-title">Benefits</h1>
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

export default Benefits;
